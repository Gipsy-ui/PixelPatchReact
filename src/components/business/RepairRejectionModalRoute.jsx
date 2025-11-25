import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import RejectionModal from './RejectionModal';

// Wrapper route component to show the rejection modal standalone via routing
export default function RepairRejectionModalRoute() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleClose = () => {
    // Navigate back to the repair detail page (or repairs list if no id)
    if (id) {
      navigate(ROUTES.BUSINESS.REPAIR_DETAIL.replace(':id', id));
    } else {
      navigate(ROUTES.BUSINESS.REPAIRS);
    }
  };

  return (
    <RejectionModal
      isOpen={true}
      onClose={handleClose}
      requestId={id || ''}
    />
  );
}
