import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import AssessmentModal from './AssessmentModal';

// Wrapper route component to display the assessment modal via routing
export default function RepairAssessmentModalRoute() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleClose = () => {
    // Return to the repair detail or repairs list if no id
    if (id) {
      navigate(ROUTES.BUSINESS.REPAIR_DETAIL.replace(':id', id));
    } else {
      navigate(ROUTES.BUSINESS.REPAIRS);
    }
  };

  return (
    <AssessmentModal
      isOpen={true}
      onClose={handleClose}
      requestId={id || ''}
    />
  );
}
