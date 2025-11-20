import { Link, useParams, useLocation } from 'react-router-dom';
import { mockShops } from '../data/mockShops';

const ShopProfile = () => {
  const { id } = useParams();
  const location = useLocation();
  const shopId = Number(id) || 1;

  const shopFromState = location.state && location.state.shop;
  const shop = shopFromState || mockShops.find(s => s.id === shopId) || mockShops[0];

  return (
    <div className="bg-white text-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white w-full flex-shrink-0 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* You can add header content here */}
        </div>
      </header>

      <main>
        {/* Banner */}
        <div className="w-full h-48 md:h-64 lg:h-80 bg-gray-200">
          <img
            src="https://placehold.co/1920x320/a5f3fc/0ea5e9?text=Shop+Banner&font=inter"
            alt="Shop banner"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Shop Info */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative -mt-16 md:-mt-24">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between p-4 bg-white rounded-lg shadow-lg">
              {/* Shop Logo and Name */}
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

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0 md:mb-2">
                <Link
                  to="/client-repair-request-modal"
                  state={{ shop }}
                  className="flex items-center justify-center px-5 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-sm"
                >
                  Book Service
                </Link>

                <Link
                  to="/messages"
                  className="flex items-center justify-center px-5 py-2 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors shadow-sm"
                >
                  Chat
                </Link>
              </div>
            </div>

            {/* Shop Details */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start bg-white rounded-lg shadow-lg p-4 mt-1 border-t border-gray-100">
              <div className="flex items-center text-sm text-gray-600">
                <span>9AM - 8PM</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span>122 Normal Road, Baliwasan Zamboanga City</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <a href="#" className="hover:text-blue-600">techfix.com</a>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span>(062) 990 8765</span>
              </div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
              <div className="lg:col-span-2 space-y-8">
                {/* Repair Services */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Offered Repair Services</h2>
                  <div className="space-y-3">
                    {['Laptop', 'Smartphone', 'Tablet', 'Desktop'].map((device, idx) => (
                      <details key={idx} className="group border border-gray-200 rounded-lg">
                        <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50">
                          <span className="font-medium">{device}</span>
                        </summary>
                        <div className="p-4 border-t border-gray-200 bg-gray-50/50">
                          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                            <li>Example Service 1</li>
                            <li>Example Service 2</li>
                          </ul>
                        </div>
                      </details>
                    ))}
                  </div>
                </section>

                {/* Verified Documents */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Verified Documents</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {['DTI Registration', 'Business Permit', 'BIR Certificate'].map((doc, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="block p-4 border border-gray-200 rounded-lg text-center hover:bg-gray-50 hover:shadow-sm transition-all"
                      >
                        <p className="mt-2 text-sm font-medium">{doc}</p>
                        <span className="text-xs text-green-600">Verified</span>
                      </a>
                    ))}
                  </div>
                </section>

                {/* Customer Reviews */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Customer Reviews</h2>
                  <div className="space-y-6">
                    {[1, 2, 3].map((review, idx) => (
                      <div key={idx} className="border-b border-gray-200 pb-6">
                        <p className="mt-3 text-sm text-gray-700">Sample review text {review}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="sticky top-24">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Location</h2>
                  <div className="w-full h-80 bg-gray-200 rounded-lg overflow-hidden">
                    <img
                      src="https://placehold.co/600x400/e5e7eb/9ca3af?text=Map+Placeholder&font=inter"
                      alt="Map of shop"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ShopProfile;
