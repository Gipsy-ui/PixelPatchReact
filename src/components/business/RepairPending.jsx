import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

// This component is rendered inside BusinessLayout, which already provides sidebar & header.
export default function RepairPending() {
  const navigate = useNavigate();
  const { id } = useParams();
  const repairId = id || "001";

  const handleReject = () => {
    navigate(ROUTES.BUSINESS.REPAIR_REJECT_MODAL.replace(':id', repairId));
  };

  const handleConfirmPickup = () => {
    // Navigate to awaiting assessment view
    navigate(ROUTES.BUSINESS.AWAITING_ASSESSMENT);
  };

  return (
    <div className="p-8 flex-grow overflow-y-auto">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden max-w-4xl mx-auto">

        {/* Header */}
        <div className="px-8 py-6 border-b border-gray-200 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Request #{repairId}</h1>
          <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium border border-orange-200">
            Pending
          </span>
        </div>

        {/* Request Information */}
        <div className="p-8 border-b border-gray-200 bg-gray-50/50">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Request Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Samsung S25</h3>
              </div>

              <div>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
                  Device Type
                </p>
                <p className="text-sm text-gray-900">Smartphone</p>
              </div>

              <div>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
                  Repair Type
                </p>
                <p className="text-sm text-gray-900">Screen Replacement</p>
              </div>

              <div>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
                  Service Type
                </p>
                <p className="text-sm text-gray-900">Pickup</p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div>
                <div className="h-7"></div>
              </div>

              <div>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
                  Pickup Address
                </p>
                <p className="text-sm text-gray-900">
                  112, Normal Road, Baliwasan Zamboanga City
                </p>
              </div>

              <div>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
                  Preferred Time
                </p>
                <p className="text-sm text-gray-900">Oct 25, 2025</p>
              </div>
            </div>

            {/* Full Width Description */}
            <div className="md:col-span-2">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
                Description
              </p>
              <p className="text-sm text-gray-900">
                The screen of the phone is broken and it is not turning on.
              </p>
            </div>
          </div>
        </div>

        {/* Reference Images */}
        <div className="p-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Reference Images
          </h2>
          <div className="flex gap-4">
            <img
              src="https://placehold.co/100x150/e0f2fe/3b82f6?text=Front"
              alt="Phone Front"
              className="w-24 h-32 object-contain border border-gray-200 bg-white rounded-lg p-1"
            />
            <img
              src="https://placehold.co/100x150/e0f2fe/3b82f6?text=Back"
              alt="Phone Back"
              className="w-24 h-32 object-contain border border-gray-200 bg-white rounded-lg p-1"
            />
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-8 py-6 bg-white border-t border-gray-200 flex justify-end gap-4">
          <button
            onClick={handleReject}
            className="px-6 py-2.5 rounded-lg bg-red-600 text-white font-medium text-sm hover:bg-red-700 transition-colors shadow-sm"
          >
            Reject
          </button>

          <button
            onClick={handleConfirmPickup}
            className="px-6 py-2.5 rounded-lg bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 transition-colors shadow-sm"
          >
            Confirm Pickup
          </button>
        </div>

      </div>
    </div>
  );
}
