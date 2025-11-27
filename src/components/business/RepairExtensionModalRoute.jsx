import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import RequestExtensionModal from './RequestExtensionModal';

// Wrapper to display the extension request modal via routing
export default function RepairExtensionModalRoute() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleClose = () => {
    if (id) {
      // Return to repair done page (or detail) depending on flow
      navigate(ROUTES.BUSINESS.REPAIR_DONE.replace(':id', id));
    } else {
      navigate(ROUTES.BUSINESS.REPAIRS);
    }
  };

  return (
    <RequestExtensionModal
      isOpen={true}
      onClose={handleClose}
      requestId={id || ''}
    />
  );
}
