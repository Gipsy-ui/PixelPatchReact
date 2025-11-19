import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { RejectionModal } from './index';

const Repair = () => {
  // Search and modal state
  const [searchQuery, setSearchQuery] = useState('');
  const [isRejectionModalOpen, setIsRejectionModalOpen] = useState(false);
  const [selectedRequestId, setSelectedRequestId] = useState(null);

  // Mock data for repair requests
  const repairRequests = [
    {
      id: 1,
      client: 'John Doe',
      deviceType: 'Samsung S25',
      repairType: 'Screen replacement',
      status: 'pending'
    },
    {
      id: 2,
      client: 'Juan Dela Cruz',
      deviceType: 'Samsung S25',
      repairType: 'Screen replacement',
      status: 'rejected'
    },
    {
      id: 3,
      client: 'Leyla Blue',
      deviceType: 'Iphone 17 Pro',
      repairType: 'Battery replacement',
      status: 'in-progress'
    },
    {
      id: 4,
      client: 'Beyondce Knows',
      deviceType: 'Itel S26',
      repairType: 'Speaker',
      status: 'done'
    },
    {
      id: 5,
      client: 'Jay B',
      deviceType: 'Iphone Xr',
      repairType: 'Battery replacement',
      status: 'completed'
    },
    {
      id: 6,
      client: 'Ariana Tall',
      deviceType: 'Iphone 12',
      repairType: 'Battery replacement',
      status: 'completed'
    }
  ];

  // Get status badge styling
  const getStatusBadgeStyle = (status) => {
    const styles = {
      pending: 'bg-yellow-100 text-yellow-800',
      rejected: 'bg-red-100 text-red-800',
      'in-progress': 'bg-orange-100 text-orange-800',
      done: 'bg-green-100 text-green-800',
      completed: 'bg-gray-100 text-gray-800'
    };
    return styles[status] || 'bg-gray-100 text-gray-800';
  };

  // Filter requests based on search
  const filteredRequests = repairRequests.filter(request => {
    const searchTerm = searchQuery.toLowerCase();
    return (
      request.client.toLowerCase().includes(searchTerm) ||
      request.deviceType.toLowerCase().includes(searchTerm) ||
      request.repairType.toLowerCase().includes(searchTerm) ||
      request.status.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <main className="flex-1 overflow-y-auto p-6">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Repair</h1>
        <div className="relative mt-4 sm:mt-0">
          <input
            type="text"
            className="w-full sm:w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
        </div>
      </div>

      {/* Requests Table */}
      <div className="bg-white rounded-lg shadow border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-max text-left text-sm">
            <thead className="border-b border-gray-200 bg-gray-50">
              <tr>
                <th className="px-6 py-3 font-medium text-gray-600 uppercase tracking-wider">Client</th>
                <th className="px-6 py-3 font-medium text-gray-600 uppercase tracking-wider">Device type</th>
                <th className="px-6 py-3 font-medium text-gray-600 uppercase tracking-wider">Repair type</th>
                <th className="px-6 py-3 font-medium text-gray-600 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 font-medium text-gray-600 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredRequests.map((request) => (
                <tr key={request.id}>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-800">
                    {request.client}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                    {request.deviceType}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                    {request.repairType}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`text-xs font-medium ${getStatusBadgeStyle(request.status)} px-2.5 py-0.5 rounded-full`}>
                      {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap space-x-3">
                    {(() => {
                      // Build the correct path depending on status
                      const idStr = request.id.toString();
                      let viewPath = ROUTES.BUSINESS.REPAIR_DETAIL.replace(':id', idStr);
                      if (request.status === 'pending') {
                        viewPath = ROUTES.BUSINESS.REPAIR_PENDING.replace(':id', idStr);
                      } else if (request.status === 'rejected') {
                        viewPath = ROUTES.BUSINESS.REPAIR_REJECTED.replace(':id', idStr);
                      }
                      return (
                        <Link to={viewPath} className="text-blue-600 hover:text-blue-800 font-medium">
                          View
                        </Link>
                      );
                    })()}
                    <button
                      onClick={() => {
                        setSelectedRequestId(request.id.toString());
                        setIsRejectionModalOpen(true);
                      }}
                      className="bg-white text-red-600 hover:text-red-800 font-medium"
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Rejection Modal */}
      <RejectionModal
        isOpen={isRejectionModalOpen}
        onClose={() => setIsRejectionModalOpen(false)}
        requestId={selectedRequestId}
      />
    </main>
  );
};

export { Repair as default };