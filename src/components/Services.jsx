import { Link } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

const Services = () => {
  return (
    <div className="bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-3xl font-extrabold mb-8">Explore Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by Name..."
            className="rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3 py-2"
          />
          <select className="rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3 py-2">
            <option>All Status</option>
            <option>Open</option>
            <option>Closed</option>
          </select>
          <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">Clear</button>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          <button className="bg-white font-black border flex items-center justify-center w-full md:w-auto py-3 rounded-lg hover:bg-gray-50 transition shadow-sm px-4">Smartphone</button>
          <button className="bg-white font-black border flex items-center justify-center w-full md:w-auto py-3 rounded-lg hover:bg-gray-50 transition shadow-sm px-4"> Laptop</button>
          <button className="bg-white font-black border flex items-center justify-center w-full md:w-auto py-3 rounded-lg hover:bg-gray-50 transition shadow-sm px-4"> Tablet</button>
          <button className="bg-white font-black border flex items-center justify-center w-full md:w-auto py-3 rounded-lg hover:bg-gray-50 transition shadow-sm px-4"> Gaming Consoles</button>
          <button className="bg-white font-black border flex items-center justify-center w-full md:w-auto py-3 rounded-lg hover:bg-gray-50 transition shadow-sm px-4"> Desktop CPU</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow1-md overflow-hidden hover:shadow-lg transition flex flex-col justify-evenly">
            <img src="https://placehold.co/300x200/e0e7ff/3b82f6?text=Shop+Image" alt="Shop Image" className="w-full h-32 object-cover" />
            <div className="p-4 flex flex-col justify-between">
              <h3 className="font-semibold text-gray-900">TechFix Pro</h3>
              <div className="flex items-center mt-1 text-yellow-400">★★★★★<span className="text-xs text-gray-600 ml-1">4.5</span></div>
              <p className="text-xs text-gray-500 mt-2">123 Normal Road, Balamban</p>
              <div className="mt-3 flex flex-wrap gap-1">
                <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-0.5 rounded-full">Desktop CPU</span>
              </div>
              <Link to={ROUTES.SHOP_DETAIL(1)} className="block w-full text-center bg-blue-600 text-white rounded-md py-2 text-sm font-medium mt-4 hover:bg-blue-700">View Details</Link>
            </div>
          </div>

          {/* Other cards (duplicated samples) */}
          <div className="bg-white rounded-lg shadow1-md overflow-hidden hover:shadow-lg transition flex flex-col justify-evenly">
            <img src="https://placehold.co/300x200/e0e7ff/3b82f6?text=Shop+Image" alt="Shop Image" className="w-full h-32 object-cover" />
            <div className="p-4 flex flex-col justify-between">
              <h3 className="font-semibold text-gray-900">RepairHub</h3>
              <div className="flex items-center mt-1 text-yellow-400">★★★★☆<span className="text-xs text-gray-600 ml-1">4.2</span></div>
              <p className="text-xs text-gray-500 mt-2">45 Tech Street, Zamboanga</p>
              <div className="mt-3 flex flex-wrap gap-1">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded-full">Laptop</span>
              </div>
              <Link to={ROUTES.SHOP_DETAIL(2)} className="block w-full text-center bg-blue-600 text-white rounded-md py-2 text-sm font-medium mt-4 hover:bg-blue-700">View Details</Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow1-md overflow-hidden hover:shadow-lg transition flex flex-col justify-evenly">
            <img src="https://placehold.co/300x200/e0e7ff/3b82f6?text=Shop+Image" alt="Shop Image" className="w-full h-32 object-cover" />
            <div className="p-4 flex flex-col justify-between">
              <h3 className="font-semibold text-gray-900">GadgetWorks</h3>
              <div className="flex items-center mt-1 text-yellow-400">★★★★★<span className="text-xs text-gray-600 ml-1">5.0</span></div>
              <p className="text-xs text-gray-500 mt-2">Near WMSU, Zamboanga City</p>
              <div className="mt-3 flex flex-wrap gap-1">
                <span className="bg-pink-100 text-pink-800 text-xs font-medium px-2 py-0.5 rounded-full">Smartphone</span>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-0.5 rounded-full">Tablet</span>
              </div>
              <Link to={ROUTES.SHOP_DETAIL(3)} className="block w-full text-center bg-blue-600 text-white rounded-md py-2 text-sm font-medium mt-4 hover:bg-blue-700">View Details</Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow1-md overflow-hidden hover:shadow-lg transition flex flex-col justify-evenly">
            <img src="https://placehold.co/300x200/e0e7ff/3b82f6?text=Shop+Image" alt="Shop Image" className="w-full h-32 object-cover" />
            <div className="p-4 flex flex-col justify-between">
              <h3 className="font-semibold text-gray-900">FixLab</h3>
              <div className="flex items-center mt-1 text-yellow-400">★★★★☆<span className="text-xs text-gray-600 ml-1">4.3</span></div>
              <p className="text-xs text-gray-500 mt-2">12 Main Avenue, Pagadian</p>
              <div className="mt-3 flex flex-wrap gap-1">
                <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2 py-0.5 rounded-full">Laptop</span>
              </div>
              <Link to={ROUTES.SHOP_DETAIL(4)} className="block w-full text-center bg-blue-600 text-white rounded-md py-2 text-sm font-medium mt-4 hover:bg-blue-700">View Details</Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow1-md overflow-hidden hover:shadow-lg transition flex flex-col justify-evenly">
            <img src="https://placehold.co/300x200/e0e7ff/3b82f6?text=Shop+Image" alt="Shop Image" className="w-full h-32 object-cover" />
            <div className="p-4 flex flex-col justify-between">
              <h3 className="font-semibold text-gray-900">ByteCare</h3>
              <div className="flex items-center mt-1 text-yellow-400">★★★☆☆<span className="text-xs text-gray-600 ml-1">3.8</span></div>
              <p className="text-xs text-gray-500 mt-2">78 Tech Valley, Dipolog</p>
              <div className="mt-3 flex flex-wrap gap-1">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded-full">Desktop CPU</span>
              </div>
              <Link to={ROUTES.SHOP_DETAIL(5)} className="block w-full text-center bg-blue-600 text-white rounded-md py-2 text-sm font-medium mt-4 hover:bg-blue-700">View Details</Link>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Services;
