import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Hammer, Box, Tag, Star, Settings, HelpCircle } from 'lucide-react';
import { ROUTES } from '../../constants/routes';
import { RejectionModal } from './index';

const Repair = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isRejectionModalOpen, setIsRejectionModalOpen] = useState(false);
  const [selectedRequestId, setSelectedRequestId] = useState(null);

  const repairRequests = [
    { id: 1, client: 'John Doe', deviceType: 'Samsung S25', repairType: 'Screen replacement', status: 'pending' },
    { id: 2, client: 'Juan Dela Cruz', deviceType: 'Samsung S25', repairType: 'Screen replacement', status: 'rejected' },
    { id: 3, client: 'Leyla Blue', deviceType: 'Iphone 17 Pro', repairType: 'Battery replacement', status: 'in-progress' },
    { id: 4, client: 'Beyondce Knows', deviceType: 'Itel S26', repairType: 'Speaker', status: 'done' },
    { id: 5, client: 'Jay B', deviceType: 'Iphone Xr', repairType: 'Battery replacement', status: 'completed' },
    { id: 6, client: 'Ariana Tall', deviceType: 'Iphone 12', repairType: 'Battery replacement', status: 'completed' }
  ];

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
    <div className="flex min-h-screen bg-gray-50">

      {/* Sidebar */}
      {/* <aside className="w-64 bg-white border-r border-gray-200 flex-shrink-0">
        <div className="py-6 px-4">
          <Link to="/business" className="text-2xl font-extrabold text-blue-600 px-2">
            PixelPatch
          </Link>

          <nav className="mt-8 space-y-2">
            <Link
              to="/business"
              className="flex items-center px-3 py-2.5 text-gray-700 hover:bg-gray-100 hover:text-blue-600 rounded-lg transition-colors"
            >
              <Home className="h-5 w-5" />
              <span className="ml-3 text-sm font-medium">Dashboard</span>
            </Link>

            <span className="block px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Request
            </span>

            <Link
              to="/business/repairs"
              className="flex items-center px-3 py-2.5 bg-blue-50 text-blue-600 hover:text-blue-600 rounded-lg transition-colors"
            >
              <Hammer className="h-5 w-5" />
              <span className="ml-3 text-sm font-medium">Repair</span>
            </Link>

            <Link
              to="/business/services"
              className="flex items-center px-3 py-2.5 hover:text-blue-600 rounded-lg transition-colors"
            >
              <Box className="h-5 w-5" />
              <span className="ml-3 text-sm font-medium">Services</span>
            </Link>

            <Link
              to="/business/discounts"
              className="flex items-center px-3 py-2.5 rounded-lg transition-colors"
            >
              <Tag className="h-5 w-5" />
              <span className="ml-3 text-sm font-medium">Discounts</span>
            </Link>

            <Link
              to="/business/reviews"
              className="flex items-center px-3 py-2.5 text-gray-700 hover:bg-gray-100 hover:text-blue-600 rounded-lg transition-colors"
            >
              <Star className="h-5 w-5" />
              <span className="ml-3 text-sm font-medium">Reviews</span>
            </Link>

            <span className="block px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Settings
            </span>

            <Link
              to="/business/settings"
              className="flex items-center px-3 py-2.5 text-gray-700 hover:bg-gray-100 hover:text-blue-600 rounded-lg transition-colors"
            >
              <Settings className="h-5 w-5" />
              <span className="ml-3 text-sm font-medium">Settings</span>
            </Link>

            <Link
              to="/business/help"
              className="flex items-center px-3 py-2.5 text-gray-700 hover:bg-gray-100 hover:text-blue-600 rounded-lg transition-colors"
            >
              <HelpCircle className="h-5 w-5" />
              <span className="ml-3 text-sm font-medium">Help</span>
            </Link>
          </nav>
        </div>
      </aside> */}

      {/* Main content */}
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
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-800">{request.client}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">{request.deviceType}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">{request.repairType}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`text-xs font-medium ${getStatusBadgeStyle(request.status)} px-2.5 py-0.5 rounded-full`}>
                        {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap space-x-3">
                      {(() => {
                        let viewPath = ROUTES.BUSINESS.REPAIR_DETAIL.replace(':id', request.id.toString());
                        if (request.status === 'pending') viewPath = ROUTES.BUSINESS.REPAIR_PENDING.replace(':id', request.id.toString());
                        else if (request.status === 'rejected') viewPath = ROUTES.BUSINESS.REPAIR_REJECTED.replace(':id', request.id.toString());
                        else if (request.status === 'in-progress') viewPath = ROUTES.BUSINESS.REPAIR_IN_PROGRESS.replace(':id', request.id.toString());
                        else if (request.status === 'done') viewPath = ROUTES.BUSINESS.REPAIR_DONE.replace(':id', request.id.toString());
                        else if (request.status === 'completed') viewPath = ROUTES.BUSINESS.REPAIR_COMPLETED.replace(':id', request.id.toString());
                        return (
                          <Link to={viewPath} className="text-blue-600 hover:text-blue-800 font-medium">View</Link>
                        );
                      })()}
                      {/* <button
                        onClick={() => {
                          setSelectedRequestId(request.id.toString());
                          setIsRejectionModalOpen(true);
                        }}
                        className="bg-white text-red-600 hover:text-red-800 font-medium"
                      >
                        Reject
                      </button> */}
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
    </div>
  );
};

export default Repair;
