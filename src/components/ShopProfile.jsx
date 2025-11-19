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
      <header className="border-b border-gray-200 bg-white w-full flex-shrink-0 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        </div>
      </header>

      <main>
        <div className="w-full h-48 md:h-64 lg:h-80 bg-gray-200">
          <img src="https://placehold.co/1920x320/a5f3fc/0ea5e9?text=Shop+Banner&font=inter" alt="Shop banner image" className="w-full h-full object-cover" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative -mt-16 md:-mt-24">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between p-4 bg-white rounded-lg shadow-lg">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-24 w-24 md:h-32 md:w-32 rounded-full border-4 border-white bg-gray-100 overflow-hidden">
                  <img src="https://placehold.co/128x128/e0e7ff/4338ca?text=TECHFIX&font=inter" alt="TechFix Pro Logo" className="h-full w-full object-contain p-4" />
                </div>
                <div className="ml-4 mt-16 md:mt-0">
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{shop.name}</h1>
                  <div className="flex items-center mt-1">
                    <span className="text-sm text-yellow-500">{Array.from({ length: shop.rating }).map((_, i) => (<span key={i}>★</span>))}</span>
                    <span className="text-sm text-gray-600 ml-2">{shop.rating}.0 ({shop.reviews} reviews)</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0 md:mb-2">
                <button className="flex items-center justify-center px-5 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-sm">
                  <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                  Book Service
                </button>
                <Link to="/ai-assistant" className="flex items-center justify-center px-5 py-2 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors shadow-sm">
                  <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Chat
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start bg-white rounded-lg shadow-lg p-4 mt-1 border-t border-gray-100">
              <div className="flex items-center text-sm text-gray-600">
                <svg className="h-5 w-5 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>9AM - 8PM</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <svg className="h-5 w-5 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                <span>122 Normal Road, Baliwasan Zamboanga City</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <svg className="h-5 w-5 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" /></svg>
                <a href="#" className="hover:text-blue-600">techfix.com</a>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <svg className="h-5 w-5 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-1.499 1.499a1.06 1.06 0 01-1.49 0A10.502 10.502 0 018.31 8.31a1.06 1.06 0 010-1.49l1.499-1.499c.362-.271.527-.734.417-1.173L9.34 3.102a1.125 1.125 0 00-1.091-.852H6.997A2.25 2.25 0 004.75 4.5v2.25z" /></svg>
                <span>(062) 990 8765</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
              <div className="lg:col-span-2 space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Offered Repair Services</h2>
                  <div className="space-y-3">
                    <details className="group border border-gray-200 rounded-lg">
                      <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50">
                        <div className="flex items-center">
                          <svg className="h-5 w-5 mr-3 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25H3.75A2.25 2.25 0 011.5 15V7.5A2.25 2.25 0 013.75 5.25h16.5A2.25 2.25 0 0122.5 7.5v7.5A2.25 2.25 0 0120.25 17.25H15M9 17.25v3.75h6v-3.75M9 17.25H15" /></svg>
                          <span className="font-medium">Laptop</span>
                        </div>
                      </summary>
                      <div className="p-4 border-t border-gray-200 bg-gray-50/50">
                        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                          <li>Screen Replacement</li>
                          <li>Battery Replacement</li>
                          <li>Keyboard Repair</li>
                          <li>Software Troubleshooting</li>
                        </ul>
                      </div>
                    </details>

                    <details className="group border border-gray-200 rounded-lg">
                      <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50">
                        <div className="flex items-center">
                          <svg className="h-5 w-5 mr-3 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>
                          <span className="font-medium">Smartphone</span>
                        </div>
                      </summary>
                      <div className="p-4 border-t border-gray-200 bg-gray-50/50">
                        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                          <li>Cracked Screen Repair</li>
                          <li>Battery Replacement</li>
                          <li>Charging Port Repair</li>
                          <li>Water Damage Repair</li>
                        </ul>
                      </div>
                    </details>

                    <details className="group border border-gray-200 rounded-lg">
                      <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50">
                        <div className="flex items-center">
                          <svg className="h-5 w-5 mr-3 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5h3m-3 0h3m-3 0h3m-6.75 0H21m-16.5 0H2.25m16.5 0H2.25m16.5 0H3.75m16.5 0c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H3.75c-.621 0-1.125.504-1.125 1.125v12.75c0 .621.504 1.125 1.125 1.125z" /></svg>
                          <span className="font-medium">Tablet</span>
                        </div>
                      </summary>
                      <div className="p-4 border-t border-gray-200 bg-gray-50/50">
                        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                          <li>Screen Replacement</li>
                          <li>Button Repair</li>
                        </ul>
                      </div>
                    </details>

                    <details className="group border border-gray-200 rounded-lg">
                      <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50">
                        <div className="flex items-center">
                          <svg className="h-5 w-5 mr-3 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3.75H15.75V13.5H8.25V3.75zM8.25 13.5L6 18.75h12l-2.25-5.25H8.25zM15 8.25h.008v.008H15V8.25z" /><path d="M10.5 11.25h3v.008h-3v-.008z" /><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 20.25h10.5" /></svg>
                          <span className="font-medium">Desktop</span>
                        </div>
                      </summary>
                      <div className="p-4 border-t border-gray-200 bg-gray-50/50">
                        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                          <li>Hardware Upgrades</li>
                          <li>Virus Removal</li>
                          <li>Data Recovery</li>
                        </ul>
                      </div>
                    </details>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Verified Documents</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <a href="#" className="block p-4 border border-gray-200 rounded-lg text-center hover:bg-gray-50 hover:shadow-sm transition-all">
                      <svg className="h-8 w-8 mx-auto text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
                      <p className="mt-2 text-sm font-medium">DTI Registration</p>
                      <span className="text-xs text-green-600">Verified</span>
                    </a>
                    <a href="#" className="block p-4 border border-gray-200 rounded-lg text-center hover:bg-gray-50 hover:shadow-sm transition-all">
                      <svg className="h-8 w-8 mx-auto text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
                      <p className="mt-2 text-sm font-medium">Business Permit</p>
                      <span className="text-xs text-green-600">Verified</span>
                    </a>
                    <a href="#" className="block p-4 border border-gray-200 rounded-lg text-center hover:bg-gray-50 hover:shadow-sm transition-all">
                      <svg className="h-8 w-8 mx-auto text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
                      <p className="mt-2 text-sm font-medium">BIR Certificate</p>
                      <span className="text-xs text-green-600">Verified</span>
                    </a>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Customer Reviews</h2>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <button className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800 font-medium">All</button>
                    <button className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">Smartphone <span className="ml-1 text-gray-500">12</span></button>
                    <button className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">Laptop <span className="ml-1 text-gray-500">8</span></button>
                    <button className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">Tablet <span className="ml-1 text-gray-500">4</span></button>
                    <button className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">+2</button>
                  </div>

                  <div className="space-y-6">
                    <div className="border-b border-gray-200 pb-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <img className="h-10 w-10 rounded-full" src="https://placehold.co/40x40/f3e8ff/a855f7?text=U1" alt="User Avatar" />
                          <div className="ml-3">
                            <p className="text-sm font-semibold">username_098</p>
                            <div className="flex items-center">
                              <span className="text-xs text-yellow-500">★★★★★</span>
                              <span className="text-xs text-gray-500 ml-2">1 Month Ago</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-gray-600">23</span>
                          <button className="bg-white text-gray-500 hover:text-blue-600 border-gray-500 hover:border-blue-600">
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.8-1.03 1.9-1.8 3.1-2.2v1.1c-1 .4-1.8.9-2.4 1.5L6.6 10.5zM17.4 10.5c.8-1.03 1.9-1.8 3.1-2.2v1.1c-1 .4-1.8.9-2.4 1.5L17.4 10.5zM12 3a9 9 0 00-9 9c0 4.97 4.03 9 9 9s9-4.03 9-9c0-4.97-4.03-9-9-9zm-1.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm6 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>
                          </button>
                          <button className="bg-white text-gray-500 hover:text-blue-600 border-gray-500 hover:border-blue-600">
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" /></svg>
                          </button>
                        </div>
                      </div>
                      <p className="mt-3 text-sm text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.</p>
                    </div>

                    <div className="border-b border-gray-200 pb-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <img className="h-10 w-10 rounded-full" src="https://placehold.co/40x40/e0f2fe/0ea5e9?text=U2" alt="User Avatar" />
                          <div className="ml-3">
                            <p className="text-sm font-semibold">username_098</p>
                            <div className="flex items-center">
                              <span className="text-xs text-yellow-500">★★★★☆</span>
                              <span className="text-xs text-gray-500 ml-2">3 Weeks Ago</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-gray-600">20</span>
                          <button className="bg-white text-gray-500 hover:text-blue-600 border-gray-500 hover:border-blue-600">
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.8-1.03 1.9-1.8 3.1-2.2v1.1c-1 .4-1.8.9-2.4 1.5L6.6 10.5zM17.4 10.5c.8-1.03 1.9-1.8 3.1-2.2v1.1c-1 .4-1.8.9-2.4 1.5L17.4 10.5zM12 3a9 9 0 00-9 9c0 4.97 4.03 9 9 9s9-4.03 9-9c0-4.97-4.03-9-9-9zm-1.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm6 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>
                          </button>
                          <button className="bg-white text-gray-500 hover:text-blue-600 border-gray-500 hover:border-blue-600">
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" /></svg>
                          </button>
                        </div>
                      </div>
                      <p className="mt-3 text-sm text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.</p>
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <img className="h-10 w-10 rounded-full" src="https://placehold.co/40x40/fefce8/eab308?text=U3" alt="User Avatar" />
                          <div className="ml-3">
                            <p className="text-sm font-semibold">username_098</p>
                            <div className="flex items-center">
                              <span className="text-xs text-yellow-500">★★★☆☆</span>
                              <span className="text-xs text-gray-500 ml-2">2 Months Ago</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-gray-600">12</span>
                          <button className="bg-white text-gray-500 hover:text-blue-600 border-gray-500 hover:border-blue-600">
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.8-1.03 1.9-1.8 3.1-2.2v1.1c-1 .4-1.8.9-2.4 1.5L6.6 10.5zM17.4 10.5c.8-1.03 1.9-1.8 3.1-2.2v1.1c-1 .4-1.8.9-2.4 1.5L17.4 10.5zM12 3a9 9 0 00-9 9c0 4.97 4.03 9 9 9s9-4.03 9-9c0-4.97-4.03-9-9-9zm-1.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm6 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>
                          </button>
                          <button className="bg-white text-gray-500 hover:text-blue-600 border-gray-500 hover:border-blue-600">
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" /></svg>
                          </button>
                        </div>
                      </div>
                      <p className="mt-3 text-sm text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.</p>
                    </div>
                  </div>
                </section>
              </div>

              <aside className="lg:col-span-1">
                <div className="sticky top-24">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Location</h2>
                  <div className="w-full h-80 bg-gray-200 rounded-lg overflow-hidden">
                    <img src="https://placehold.co/600x400/e5e7eb/9ca3af?text=Map+Placeholder&font=inter" alt="Map of 122 Normal Road, Baliwasan Zamboanga City" className="w-full h-full object-cover" />
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
