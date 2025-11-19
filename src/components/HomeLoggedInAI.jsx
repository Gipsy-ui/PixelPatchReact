import React, { useState, useRef, useEffect } from 'react';

export default function App() {
  return <ClientAiLanding />;
}

function ClientAiLanding() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileButtonRef = useRef(null);
  const profileDropdownRef = useRef(null);

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
          
          <div className="w-full min-h-screen flex flex-col items-center pt-12 ">
            <div className="pt-20 md:pt-28 flex flex-col items-center gap-10 "> 
              <h1 className="text-3xl font-bold text-center ">
                Welcome to PixelPatch Troubleshooting AI, How can I help?
              </h1>
              
              <div className="w-full max-w-3xl relative">
                <input
                  type="text"
                  placeholder="Explain your situation..."
                  className="w-full pl-5 pr-14 py-4 rounded-lg text-base bg-white-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="bg-white absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-lg text-blue-600 hover:bg-blue-100">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                </button>
              </div>
            </div>


          </div>
        </div>
      </main>
    </div>
  );
}