import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, Hammer, Box, Tag, Star, Settings, HelpCircle } from 'lucide-react';

export default function App() {
  return <ShopReviews />;
}

function ShopReviews() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const profileButtonRef = useRef(null);
  const profileDropdownRef = useRef(null);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileButtonRef.current &&
        !profileButtonRef.current.contains(event.target) &&
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const reviews = [
    {
      id: 1,
      username: 'username_098',
      avatar: 'https://placehold.co/40x40/dbeafe/1e40af?text=U&font=inter',
      rating: 5,
      time: '1 Month Ago',
      device: 'Vivo 30 E',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
      likes: 23,
    },
    {
      id: 2,
      username: 'username_098',
      avatar: 'https://placehold.co/40x40/dbeafe/1e40af?text=U&font=inter',
      rating: 5,
      time: '3 Weeks Ago',
      device: 'Oppo Reno 5',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
      likes: 20,
    },
    {
      id: 3,
      username: 'username_098',
      avatar: 'https://placehold.co/40x40/dbeafe/1e40af?text=U&font=inter',
      rating: 3,
      time: '2 Months Ago',
      device: 'Infinix Hot 30',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
      likes: 12,
    },
  ];

  const StarRating = ({ rating }) => (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.868 5.748a1 1 0 00.95.69h6.03c.969 0 1.371 1.24.588 1.81l-4.88 3.54a1 1 0 00-.364 1.118l1.868 5.748c.3.921-.755 1.688-1.54 1.118l-4.88-3.54a1 1 0 00-1.175 0l-4.88 3.54c-.784.57-1.838-.197-1.54-1.118l1.868-5.748a1 1 0 00-.364-1.118L2.48 11.175c-.783-.57-.38-1.81.588-1.81h6.03a1 1 0 00.95-.69l1.868-5.748z" />
        </svg>
      ))}
    </div>
  );

  return (
    <div className="flex bg-gray-100 font-inter">
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
              className="flex items-center px-3 py-2.5 text-gray-700 hover:bg-gray-100 hover:text-blue-600 rounded-lg transition-colors"
            >
              <Hammer className="h-5 w-5" />
              <span className="ml-3 text-sm font-medium">Repair</span>
            </Link>

            <Link
              to="/business/services"
              className="flex items-center px-3 py-2.5 text-gray-700 hover:bg-gray-100 hover:text-blue-600 rounded-lg transition-colors"
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
              className="flex items-center px-3 py-2.5 hover:bg-gray-100 hover:text-blue-600 rounded-lg transition-colors bg-blue-50 text-blue-600"
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
      <div className="flex-1 flex flex-col">
        {/* Reviews content */}
        <main className="p-8 flex-grow overflow-y-auto">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Reviews and Ratings</h1>
          {/* Reviews list */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            {reviews.map((review) => (
              <div key={review.id} className="p-6 border-b border-gray-200">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <img className="h-10 w-10 rounded-full" src={review.avatar} alt="User avatar" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{review.username}</p>
                      <p className="text-xs text-gray-500">Device: {review.device}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <StarRating rating={review.rating} />
                    <span>{review.time}</span>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
