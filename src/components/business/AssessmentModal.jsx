import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ROUTES } from '../../constants/routes';

const AssessmentModal = ({ isOpen, onClose, requestId }) => {
  const navigate = useNavigate();

  // Form states
  const [diagnosticFindings, setDiagnosticFindings] = useState("");
  const [possibleCauses, setPossibleCauses] = useState("");
  const [listParts, setListParts] = useState(true);
  const [addQuotation, setAddQuotation] = useState(false);

  const handleSave = () => {
    navigate("/shop/details");
  };

  // Parts list
  const [parts, setParts] = useState([
    { name: "", qty: 1 }
  ]);

  const handlePartChange = (index, key, value) => {
    const updated = [...parts];
    updated[index][key] = value;
    setParts(updated);
  };

  const addNewPart = () => {
    setParts([...parts, { name: "", qty: 1 }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitting assessment:", {
      requestId,
      diagnosticFindings,
      possibleCauses,
      parts: listParts ? parts : [],
      addQuotation
    });

    onClose();
    navigate(ROUTES.BUSINESS.REPAIR_ASSESSMENT.replace(":id", requestId));
  };

  if (!isOpen) return null;

  return (
    // Modal Overlay
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">

      {/* Modal Panel */}
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]">

        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 flex-shrink-0">
          <h2 className="text-xl font-semibold text-gray-900">Add Assessment</h2>

          <button
            onClick={onClose}
            className="bg-white text-gray-900 hover:text-gray-600 transition-colors"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body (Scrollable) */}
        <form onSubmit={handleSubmit} className="flex-grow overflow-y-auto">
          <div className="p-6 space-y-6">

            {/* Diagnostic Findings */}
            <div>
              <label className="block text-base font-medium text-gray-900 mb-2">
                Diagnostic Findings
              </label>
              <textarea
                rows="3"
                className="block w-full rounded-lg border-none bg-gray-100 p-4 text-sm text-gray-600 focus:ring-2 focus:ring-blue-500 resize-none outline-none"
                placeholder="This phone screen needs to be replaced in a delicate manner."
                value={diagnosticFindings}
                onChange={(e) => setDiagnosticFindings(e.target.value)}
                required
              ></textarea>
            </div>

            {/* Possible Causes */}
            <div>
              <label className="block text-base font-medium text-gray-900 mb-2">
                Possible Causes
              </label>
              <textarea
                rows="3"
                className="block w-full rounded-lg border-none bg-gray-100 p-4 text-sm text-gray-600 focus:ring-2 focus:ring-blue-500 resize-none outline-none"
                placeholder="Vertical drop into the ground."
                value={possibleCauses}
                onChange={(e) => setPossibleCauses(e.target.value)}
                required
              ></textarea>
            </div>

            {/* Reference Image */}
            <div>
              <label className="block text-base font-medium text-gray-900 mb-2">
                Reference Image (optional)
              </label>

              <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 px-6 py-10 hover:bg-gray-50 transition-colors cursor-pointer">
                <svg className="h-10 w-10 text-gray-700 mb-2" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>

                <div className="text-center">
                  <p className="text-sm text-blue-600 font-semibold">
                    Click to upload <span className="text-gray-900 font-normal">or drag and drop</span>
                  </p>
                  <p className="text-xs text-gray-400 mt-1">SVG, PNG, JPG or GIF (max. 800×400px)</p>
                </div>
              </div>
            </div>

            {/* List Parts Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={listParts}
                onChange={(e) => setListParts(e.target.checked)}
                className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label className="ml-2 text-sm font-medium text-blue-600 cursor-pointer">
                List parts needed for the fix.
              </label>
            </div>

            {/* Parts Section */}
            {listParts && (
              <div className="space-y-4">
                {parts.map((part, index) => (
                  <div key={index}>
                    <p className="text-base font-medium text-gray-900">
                      Part {index + 1}
                    </p>

                    <div className="flex items-center gap-3">
                      <input
                        type="text"
                        placeholder="S25 Brand New Screen"
                        value={part.name}
                        onChange={(e) => handlePartChange(index, "name", e.target.value)}
                        className="flex-grow rounded-lg bg-gray-100 p-3 text-sm text-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
                      />

                      <label className="text-sm font-medium text-gray-900">
                        Qty
                      </label>

                      <input
                        type="number"
                        min="1"
                        value={part.qty}
                        onChange={(e) => handlePartChange(index, "qty", e.target.value)}
                        className="w-20 rounded-lg bg-gray-100 p-3 text-sm text-center text-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                    </div>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={addNewPart}
                  className="text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  Add Another Part
                </button>
              </div>
            )}

            {/* Add Quotation Checkbox */}
            <div className="flex items-center pt-2">
              <input
                type="checkbox"
                checked={addQuotation}
                onChange={(e) => setAddQuotation(e.target.checked)}
                className="h-6 w-6 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label className="ml-3 text-sm font-medium text-gray-400 cursor-pointer">
                Add Quotation for this Assessment
              </label>
            </div>

          </div>

          {/* Footer */}
          <div className="flex justify-end p-6 pt-4 bg-white border-t">
            <button
            onClick={handleSave}
              type="submit"
              className="rounded-lg bg-blue-600 px-8 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 transition-colors"
            >
              Submit
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

AssessmentModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  requestId: PropTypes.string.isRequired
};

export default AssessmentModal;
