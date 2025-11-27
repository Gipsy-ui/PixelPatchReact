import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ROUTES } from '../../constants/routes';

const RejectionModal = ({ isOpen, onClose, requestId }) => {
  const [rejectionReason, setRejectionReason] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // TODO: Replace with actual API call
    // API call would go here: submitRejection(requestId, rejectionReason)

    // Close modal and navigate back to repairs list
    onClose();
    navigate(ROUTES.BUSINESS.REPAIRS);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden">
        <div className="flex justify-between items-center p-5">
          <h2 className="text-xl font-semibold text-gray-900">Reason for rejection</h2>
          <button 
            onClick={onClose}
            className="bg-white text-gray-900 hover:text-gray-600"
          >
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="p-5 pt-0">
            <div>
              <label htmlFor="rejection_reason" className="sr-only">
                Reason for rejection
              </label>
              <textarea
                id="rejection_reason"
                name="rejection_reason"
                rows="6"
                className="mt-1 block w-full rounded-lg border-gray-200 bg-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-4"
                placeholder="We're sorry... Gomenazai..."
                value={rejectionReason}
                onChange={(e) => setRejectionReason(e.target.value)}
                required
              />
            </div>
          </div>
          
          <div className="flex justify-end p-5 pt-0">
            <button
              type="submit"
              className="rounded-lg border border-transparent bg-red-600 py-2 px-6 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

RejectionModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  requestId: PropTypes.string.isRequired
};

export default RejectionModal;