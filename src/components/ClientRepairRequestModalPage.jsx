import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import RepairRequestModal from './RepairRequestModal';
import { mockShops } from '../data/mockShops';

export default function ClientRepairRequestModalPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { shop } = location.state || {};
  const fallbackShop = mockShops[0];

  return (
    <RepairRequestModal
      shop={shop || fallbackShop}
      onClose={() => navigate(-1)}
    />
  );
}


