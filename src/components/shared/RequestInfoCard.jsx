import React from 'react';
import PropTypes from 'prop-types';

/**
 * Reusable component to display request information details
 * Used across repair pages to maintain consistent layout
 */
const RequestInfoCard = ({ request, showFullDescription = true }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Request Information</h2>
      
      {request.device && (
        <h3 className="text-lg font-medium text-gray-900 mb-4">{request.device}</h3>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        {request.deviceType && (
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
              Device Type
            </p>
            <p className="font-medium text-gray-900">{request.deviceType}</p>
          </div>
        )}
        
        {request.pickupAddress && (
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
              Pickup Address
            </p>
            <p className="font-medium text-gray-900">{request.pickupAddress}</p>
          </div>
        )}
        
        {request.repairType && (
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
              Repair Type
            </p>
            <p className="font-medium text-gray-900">{request.repairType}</p>
          </div>
        )}
        
        {request.preferredTime && (
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
              Preferred Time
            </p>
            <p className="font-medium text-gray-900">{request.preferredTime}</p>
          </div>
        )}
        
        {request.serviceType && (
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
              Service Type
            </p>
            <p className="font-medium text-gray-900">{request.serviceType}</p>
          </div>
        )}
        
        {request.description && showFullDescription && (
          <div className="md:col-span-2">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
              Description
            </p>
            <p className="font-medium text-gray-900">{request.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

RequestInfoCard.propTypes = {
  request: PropTypes.shape({
    device: PropTypes.string,
    deviceType: PropTypes.string,
    repairType: PropTypes.string,
    serviceType: PropTypes.string,
    pickupAddress: PropTypes.string,
    preferredTime: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  showFullDescription: PropTypes.bool,
};

export default RequestInfoCard;
