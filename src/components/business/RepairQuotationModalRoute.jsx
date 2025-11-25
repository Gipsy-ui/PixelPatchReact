import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import AddQuotationModal from './AddingQuotationModal';

// Wrapper route component to display AddQuotationModal via routing
export default function RepairQuotationModalRoute() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleClose = () => {
    // Prefer returning to assessment (no quotation) if id present, else repairs list
    if (id) {
      navigate(ROUTES.BUSINESS.REPAIR_ASSESSMENT_NO_QUOTATION.replace(':id', id));
    } else {
      navigate(ROUTES.BUSINESS.REPAIRS);
    }
  };

  return (
    <AddQuotationModal
      isOpen={true}
      onClose={handleClose}
    />
  );
}
