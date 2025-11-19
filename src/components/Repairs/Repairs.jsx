import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ROUTES } from '../../constants/routes';

const RepairCard = ({ status, date, deviceName, deviceType, repairType, message }) => {
  const statusStyles = {
    Pending: 'bg-yellow-100 text-yellow-800',
    Accepted: 'bg-blue-100 text-blue-800',
    'In Progress': 'bg-orange-100 text-orange-800',
    Done: 'bg-green-100 text-green-800',
    Completed: 'bg-gray-100 text-gray-800',
    Rejected: 'bg-red-100 text-red-800',
  };

  const messageStyles = {
    Pending: 'bg-yellow-100',
    Accepted: 'bg-blue-100',
    'In Progress': 'bg-orange-100',
    Done: 'bg-green-100',
    Completed: 'bg-gray-100',
    Rejected: 'bg-red-100',
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="flex justify-between items-center p-4">
        <span className={`text-xs font-medium ${statusStyles[status]} px-2.5 py-0.5 rounded-full`}>
          {status}
        </span>
        <span className="text-xs text-gray-500">{date}</span>
      </div>
      <div className="p-4 pt-0">
        <img 
          className="w-full h-32 object-contain mb-3" 
          src="https://placehold.co/300x200/e0f2fe/3b82f6?text=Phone" 
          alt={deviceName} 
        />
        <h2 className="font-semibold text-lg">{deviceName}</h2>
        <p className="text-sm text-gray-600">{deviceType}</p>
        <p className="text-sm text-gray-500">{repairType}</p>
        <div className={`mt-3 p-2.5 rounded-md ${messageStyles[status]}`}>
          <p className={`text-xs ${statusStyles[status]} font-medium`}>{message}</p>
        </div>
      </div>
    </div>
  );
};

RepairCard.propTypes = {
  status: PropTypes.oneOf(['Pending', 'Accepted', 'In Progress', 'Done', 'Completed', 'Rejected']).isRequired,
  date: PropTypes.string.isRequired,
  deviceName: PropTypes.string.isRequired,
  deviceType: PropTypes.string.isRequired,
  repairType: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

const Repairs = () => {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Pending', 'Accepted', 'In Progress', 'Done', 'Completed'];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const mockRepairs = [
    {
      status: 'Pending',
      date: 'Oct 20, 2025',
      deviceName: 'Samsung S25',
      deviceType: 'Smartphone',
      repairType: 'Screen Replacement',
      message: "Waiting for the shop's review.",
    },
    {
      status: 'Accepted',
      date: 'Oct 22, 2025',
      deviceName: 'Samsung S25',
      deviceType: 'Smartphone',
      repairType: 'Screen Replacement',
      message: 'Ready for Pickup at your convenience.',
    },
    {
      status: 'In Progress',
      date: 'Oct 22, 2025',
      deviceName: 'Samsung S25',
      deviceType: 'Smartphone',
      repairType: 'Screen Replacement',
      message: 'Work in progress...',
    },
    {
      status: 'Done',
      date: 'Oct 22, 2025',
      deviceName: 'Samsung S25',
      deviceType: 'Smartphone',
      repairType: 'Screen Replacement',
      message: 'Your device has been repaired.',
    },
    {
      status: 'Completed',
      date: 'Oct 22, 2025',
      deviceName: 'Samsung S25',
      deviceType: 'Smartphone',
      repairType: 'Screen Replacement',
      message: 'Your request is complete.',
    },
    {
      status: 'Rejected',
      date: 'Oct 22, 2025',
      deviceName: 'Samsung S25',
      deviceType: 'Smartphone',
      repairType: 'Screen Replacement',
      message: 'Your request has been rejected.',
    },
  ];

  const filteredRepairs = activeTab === 'All' 
    ? mockRepairs 
    : mockRepairs.filter(repair => repair.status === activeTab);

  return (
    <div className="bg-gray-50 text-gray-900 flex flex-col min-h-screen">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-grow">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Repairs</h1>

        {/* Tab Navigation */}
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px space-x-6 overflow-x-auto" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`bg-white whitespace-nowrap py-3 px-1 text-sm font-medium ${
                  activeTab === tab
                    ? 'tab-active border-b-2 border-gray-500'
                    : 'text-gray-500 hover:text-gray-700 border-b-2 border-gray-500'
                }`}
                aria-current={activeTab === tab ? 'page' : undefined}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
        
        {/* Repairs Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {filteredRepairs.map((repair, index) => {
            const idStr = (index + 1).toString();
            // only add a pending view path for shared repairs list
            const viewPath = repair.status === 'Pending'
              ? ROUTES.REPAIR_PENDING.replace(':id', idStr)
              : null;
            return (
              <div key={index} className="relative">
                <RepairCard {...repair} />
                {viewPath && (
                  <div className=" flex justify-center absolute top-[65%] right-5 ">
                    <Link
                      to={viewPath}
                      className="rounded-md bg-white border border-gray-200 px-4 py-2 text-sm font-medium text-blue-600 hover:bg-gray-50 shadow-sm"
                    >
                      View
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        {/* Empty State Message */}
        {filteredRepairs.length === 0 && (
          <div className="text-center py-16">
            <p className="text-sm text-gray-500">No repairs to show.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Repairs;