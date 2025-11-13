import React, { useState, useRef, useEffect } from 'react';

export default function App() {
  return <ClientAiLanding />;
}

function ClientAiLanding() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileButtonRef = useRef(null);
  const profileDropdownRef = useRef(null);

  // Effect to handle clicking outside the dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isProfileOpen &&
        profileButtonRef.current &&
        !profileButtonRef.current.contains(event.target) &&
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target)
      ) {
        setIsProfileOpen(false);
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isProfileOpen]);

  // Mock data for shops and testimonials
  const shops = [
    { id: 1, name: 'TechFix Pro', address: '123 Normal Road, Baliwasan', rating: 4.5, tags: ['Smartphone', 'Laptop'] },
    { id: 2, name: 'TechFix Pro', address: '123 Normal Road, Baliwasan', rating: 4.5, tags: ['Gaming Consoles'] },
    { id: 3, name: 'TechFix Pro', address: '123 Normal Road, Baliwasan', rating: 4.5, tags: ['Smartphone', 'Desktop CPU'] },
    { id: 4, name: 'TechFix Pro', address: '123 Normal Road, Baliwasan', rating: 4.5, tags: ['Laptop', 'Gaming Consoles'] },
    { id: 5, name: 'TechFix Pro', address: '123 Normal Road, Baliwasan', rating: 4.5, tags: ['Smartphone', 'Laptop'] },
    { id: 6, name: 'TechFix Pro', address: '123 Normal Road, Baliwasan', rating: 4.5, tags: ['Desktop CPU'] },
    { id: 7, name: 'TechFix Pro', address: '123 Normal Road, Baliwasan', rating: 4.5, tags: ['Tablet', 'Smartphone'] },
    { id: 8, name: 'TechFix Pro', address: '123 Normal Road, Baliwasan', rating: 4.5, tags: ['Gaming Consoles'] },
    { id: 9, name: 'TechFix Pro', address: '123 Normal Road, Baliwasan', rating: 4.5, tags: ['Laptop'] },
    { id: 10, name: 'TechFix Pro', address: '123 Normal Road, Baliwasan', rating: 4.5, tags: ['Smartphone'] },
  ];

  const testimonials = [
    { name: 'Jane Doe', title: 'Tech Enthusiast', review: '"PixelPatch made it so easy for me to fix my phone, the diagnosis was quick and accurate. Highly recommended."' },
    { name: 'Jane Doe', title: 'Tech Enthusiast', review: '"PixelPatch made it so easy for me to fix my phone, the diagnosis was quick and accurate. Highly recommended."' },
    { name: 'Jane Doe', title: 'Tech Enthusiast', review: '"PixelPatch made it so easy for me to fix my phone, the diagnosis was quick and accurate. Highly recommended."' },
  ];

  const partners = [
    { name: 'SM City Mindpro', logo: 'https://placehold.co/150x70/f3f4f6/9ca3af?text=SM+Mindpro' },
    { name: 'KCC Malls', logo: 'https://placehold.co/150x70/f3f4f6/9ca3af?text=KCC+Malls' },
    { name: 'Robinsons Malls', logo: 'https://placehold.co/150x70/f3f4f6/9ca3af?text=Robinsons' },
    { name: 'CityMall', logo: 'https://placehold.co/150x70/f3f4f6/9ca3af?text=CityMall' },
    { name: 'Vista Mall Sta. Rosa', logo: 'https://placehold.co/150x70/f3f4f6/9ca3af?text=Vista+Mall' },
  ];

  return (
    <div className="bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* 1. Header */}
      <header className="border-b border-gray-200 bg-white w-full flex-shrink-0 sticky top-0 z-40">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="text-2xl font-extrabold text-blue-600">
              PixelPatch
            </a>

            {/* Main Navigation */}
            <div className="hidden md:flex items-baseline space-x-6">
              <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
              <a href="#" className="text-blue-600 border-b-2 border-blue-600 px-3 py-2 text-sm font-medium">AI Assistant</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Become a Partner</a>
            </div>

            {/* Header Icons & Profile */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-gray-500 hover:text-blue-600 rounded-full p-2 transition-colors">
                <span className="sr-only">Notifications</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
              </button>
              <button className="text-gray-500 hover:text-blue-600 rounded-full p-2 transition-colors">
                <span className="sr-only">Messages</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76v-1.503c0-.858.694-1.553 1.553-1.553h.002c.859 0 1.554.695 1.554 1.553v1.503A1.553 1.553 0 013.805 14.313H3.803A1.553 1.553 0 012.25 12.76zm3.003-1.503v1.503c0 .858.695 1.553 1.553 1.553h.002c.859 0 1.554-.695 1.554-1.553v-1.503c0-.858-.695-1.553-1.554-1.553h-.002a1.553 1.553 0 00-1.553 1.553zm3.004v1.503c0 .858.695 1.553 1.553 1.553h.002c.859 0 1.554-.695 1.554-1.553v-1.503c0-.858-.695-1.553-1.554-1.553h-.002a1.553 1.553 0 00-1.553 1.553zm10.493-1.553h-.002a1.553 1.553 0 00-1.553 1.553v1.503c0 .858.694 1.553 1.553 1.553h.002c.859 0 1.553-.695 1.553-1.553v-1.503c0-.858-.694-1.553-1.553-1.553zM9.75 12c0-.858.695-1.553 1.554-1.553h.002c.859 0 1.553.695 1.553 1.553v1.503c0 .858-.694 1.553-1.553 1.553h-.002c-.859 0-1.554-.695-1.554-1.553V12zm3.003 0v1.503c0 .858.695 1.553 1.553 1.553h.002c.859 0 1.554-.695 1.554-1.553V12c0-.858-.695-1.553-1.554-1.553h-.002a1.553 1.553 0 00-1.553 1.553z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 19.5v2.25c0 .621.504 1.125 1.125 1.125h.375c.621 0 1.125-.504 1.125-1.125V19.5m-3.375 0v2.25c0 .621.504 1.125 1.125 1.125h.375c.621 0 1.125-.504 1.125-1.125V19.5m-3.375 0h3.375m-3.375 0v-1.5c0-1.036.84-1.875 1.875-1.875h.375c1.036 0 1.875.84 1.875 1.875v1.5m-3.375 0h3.375M9 19.5v2.25c0 .621.504 1.125 1.125 1.125h.375c.621 0 1.125-.504 1.125-1.125V19.5m-3.375 0v2.25c0 .621.504 1.125 1.125 1.125h.375c.621 0 1.125-.504 1.125-1.125V19.5m-3.375 0h3.375m-3.375 0v-1.5c0-1.036.84-1.875 1.875-1.875h.375c1.036 0 1.875.84 1.875 1.875v1.5m-3.375 0h3.375M4.5 19.5v2.25c0 .621.504 1.125 1.125 1.125h.375c.621 0 1.125-.504 1.125-1.125V19.5m-3.375 0v2.25c0 .621.504 1.125 1.125 1.125h.375c.621 0 1.125-.504 1.125-1.125V19.5m-3.375 0h3.375m-3.375 0v-1.5c0-1.036.84-1.875 1.875-1.875h.375c1.036 0 1.875.84 1.875 1.875v1.5m-3.375 0h3.375" />
                </svg>
              </button>
              <div className="relative">
                <button 
                  ref={profileButtonRef} 
                  onClick={() => setIsProfileOpen(prev => !prev)} 
                  className="flex items-center justify-center h-10 w-10 rounded-full overflow-hidden border-2 border-gray-200 hover:border-blue-500 transition-colors"
                >
                  <span className="sr-only">Open user menu</span>
                  <img className="h-full w-full object-cover" src="https://placehold.co/40x40/e0f2fe/3b82f6?text=U&font=inter" alt="User avatar" />
                </button>
                {/* Profile Dropdown */}
                {isProfileOpen && (
                  <div ref={profileDropdownRef} className="absolute right-0 mt-2 w-64 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                    <div className="py-1" role="none">
                      <div className="flex items-center px-4 py-3 border-b border-gray-200">
                        <img className="h-10 w-10 rounded-full" src="https://placehold.co/40x40/dbeafe/1e40af?text=JD&font=inter" alt="User Avatar" />
                        <div className="ml-3">
                          <p className="text-sm font-semibold text-gray-900">John Doe</p>
                          <p className="text-sm text-gray-500">johndoe@gmail.com</p>
                        </div>
                      </div>
                      <div className="py-1">
                        <a href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                        <a href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100">Repairs</a>
                        <a href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100">Devices</a>
                        <a href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100">AI Assistant</a>
                      </div>
                      <div className="py-1 border-t border-gray-200">
                        <a href="#" className="block px-4 py-3 text-sm text-blue-600 hover:bg-gray-100">Switch to Business</a>
                      </div>
                      <div className="py-1 border-t border-gray-200">
                        <a href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                        <a href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100">Help</a>
                      </div>
                      <div className="py-1 border-t border-gray-200">
                        <a href="#" className="block px-4 py-3 text-sm text-red-600 hover:bg-gray-100">Log Out</a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="md:hidden">
              <button className="text-gray-500 hover:text-gray-900 p-2">
                <span className="sr-only">Open main menu</span>
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </header>

      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row">
          
          {/* Sidebar yung 3 Icons */}
          <aside className="w-full md:w-20 lg:w-24 py-6 md:py-10 flex flex-row md:flex-col items-center flex-shrink-0">
            <a href="#" className="p-3 rounded-lg bg-blue-100 text-blue-600">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </a>
            <a href="#" className="p-3 rounded-lg text-gray-500 hover:bg-gray-100 mt-0 md:mt-4 ml-4 md:ml-0">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
              </svg>
            </a>
            <a href="#" className="p-3 rounded-lg text-gray-500 hover:bg-gray-100 mt-0 md:mt-4 ml-4 md:ml-0">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </a>
          </aside>
          
          <div className="flex-1 min-w-0">
            <div className="pt-6 md:pt-10 pb-12">
              <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Welcome to PixelPatch Troubleshooting AI, How can I help?
              </h1>
              <div className="relative max-w-3xl mx-auto">
                <input
                  type="text"
                  placeholder="Explain your situation..."
                  className="w-full pl-5 pr-14 py-4 rounded-lg text-base bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-lg text-blue-600 hover:bg-blue-100">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                </button>
              </div>
            </div>

            <section className="py-12">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Explore Repair Shops Near You</h2>
                <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500 flex items-center">
                  See All
                  <svg className="h-4 w-4 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
              
              {/* Filter Buttons */}
              <div className="flex flex-wrap gap-3 mb-6">
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 bg-gray-100 text-sm font-medium">
                  📱<span>Smartphone</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50">
                  💻<span>Laptop</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50">
                  📟<span>Tablet</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50">
                  🎮<span>Gaming Consoles</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50">
                  🖥️<span>Desktop CPU</span>
                </button>
              </div>

              {/* Shop Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                {shops.map((shop) => (
                  <div key={shop.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-full h-32 bg-gray-200">
                       <img src={`https://placehold.co/300x200/e0e7ff/4338ca?text=Shop+Image`} alt="Shop" className="w-full h-full object-cover"/>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold text-gray-900">{shop.name}</h3>
                        <div className="flex items-center gap-1 text-xs font-medium text-gray-700">
                          <svg className="h-3 w-3 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          {shop.rating}
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{shop.address}</p>
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {shop.tags.map(tag => (
                          <span key={tag} className="text-xs font-medium bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">{tag}</span>
                        ))}
                      </div>
                      <button className="w-full mt-4 py-2 px-4 rounded-lg bg-blue-50 text-sm font-medium text-blue-600 hover:bg-blue-100">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            
            {/* 4. Testimonials Sections */}
            <section className="py-12">
              <div className="bg-blue-50 rounded-lg p-10 md:p-16">
                <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">Hear from our users</h2>
                <p className="text-base text-gray-600 text-center max-w-2xl mx-auto mb-10">
                  Read what our community has to say about their experience
                  with PixelPatch and our experts of repair shops.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center">
                      <img 
                        src={`https://placehold.co/80x80/dbeafe/1e40af?text=JD&font=inter`} 
                        alt="Jane Doe" 
                        className="w-20 h-20 rounded-full mb-4 border-4 border-blue-100"
                      />
                      <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-blue-600 mb-4">{testimonial.title}</p>
                      <p className="text-base text-gray-700 font-medium italic">{testimonial.review}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="py-12">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">Partners:</h3>
              <div className="flex flex-wrap justify-between items-center gap-8 opacity-60">
                {partners.map(partner => (
                  <img key={partner.name} src={partner.logo} alt={partner.name} className="h-10 md:h-12" />
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-16">
            <div className="col-span-2 md:col-span-4 lg:col-span-1">
              <a href="#" className="text-2xl font-extrabold text-blue-600">PixelPatch</a>
              <p className="mt-3 text-sm text-gray-600">Where technology and expertise meet to bring your gadgets back to life.</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Quick Links</h3>
              <ul className="mt-4 space-y-3">
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">AI Assistant</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Find Service</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Partner</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Company</h3>
              <ul className="mt-4 space-y-3">
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">About Us</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Career</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Support</h3>
              <ul className="mt-4 space-y-3">
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Help Center</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Connect With Us</h3>
              <ul className="mt-4 space-y-3">
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Facebook</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Instagram</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">X (Twitter)</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 py-6">
            <p className="text-center text-sm text-gray-500">&copy; 2025 PixelPatch Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}