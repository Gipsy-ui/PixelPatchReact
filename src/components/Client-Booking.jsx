import { Link, useParams, useLocation } from 'react-router-dom';
import { mockShops } from '../data/mockShops';
import { ROUTES } from '../constants/routes';

const ShopProfile = () => {
  const { id } = useParams();
  const location = useLocation();
  const shopId = Number(id) || 1;
  const shopFromState = location.state && location.state.shop;
  const shop = shopFromState || mockShops.find(s => s.id === shopId) || mockShops[0];

  return (
    <div className="bg-white text-gray-900">
      <header className="border-b border-gray-200 bg-white w-full flex-shrink-0 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
      </header>
      <main>
        {/* Banner */}
        <div className="w-full h-48 md:h-64 lg:h-80 bg-gray-200">
          <img
            src="https://placehold.co/1920x320/a5f3fc/0ea5e9?text=Shop+Banner&font=inter"
            alt="Shop banner image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Shop Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative -mt-16 md:-mt-24">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between p-4 bg-white rounded-lg shadow-lg">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-24 w-24 md:h-32 md:w-32 rounded-full border-4 border-white bg-gray-100 overflow-hidden">
                  <img
                    src="https://placehold.co/128x128/e0e7ff/4338ca?text=TECHFIX&font=inter"
                    alt="TechFix Pro Logo"
                    className="h-full w-full object-contain p-4"
                  />
                </div>
                <div className="ml-4 mt-16 md:mt-0">
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{shop.name}</h1>
                  <div className="flex items-center mt-1">
                    <span className="text-sm text-yellow-500">
                      {Array.from({ length: shop.rating }).map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </span>
                    <span className="text-sm text-gray-600 ml-2">
                      {shop.rating}.0 ({shop.reviews} reviews)
                    </span>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0 md:mb-2">
                <Link
                  to={ROUTES.CLIENT_REPAIR_REQUEST_MODAL}
                  state={{ shop }}
                  className="flex items-center justify-center px-5 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-sm"
                >
                  <svg
                    className="h-5 w-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                  Book Service
                </Link>

                <Link
                  to={ROUTES.CLIENT_MESSAGES}
                  className="flex items-center justify-center px-5 py-2 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors shadow-sm"
                >
                  Chat
                </Link>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default ShopProfile;
