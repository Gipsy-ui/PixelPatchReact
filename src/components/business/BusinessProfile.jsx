import React, { useState, useEffect } from 'react';
import { mockShops } from '../../data/mockShops';

const BusinessProfile = () => {
  // Simulate fetching the logged-in business profile. 
  // In a real app, this would come from auth context or API.
  // We'll use the first shop from mockShops as the default.
  const [profile, setProfile] = useState(mockShops[0]);
  const [isEditing, setIsEditing] = useState(false);
  const [tempProfile, setTempProfile] = useState(mockShops[0]);
  const [newService, setNewService] = useState('');

  // Sync tempProfile when editing starts
  useEffect(() => {
    if (isEditing) {
      setTempProfile({ ...profile });
    }
  }, [isEditing, profile]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTempProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceAdd = () => {
    if (newService.trim()) {
      setTempProfile(prev => ({
        ...prev,
        services: [...prev.services, newService.trim()]
      }));
      setNewService('');
    }
  };

  const handleServiceRemove = (index) => {
    setTempProfile(prev => ({
      ...prev,
      services: prev.services.filter((_, i) => i !== index)
    }));
  };

  const handleSave = () => {
    setProfile(tempProfile);
    setIsEditing(false);
    // Here you would typically make an API call to save the data
    console.log("Saved profile:", tempProfile);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setTempProfile(profile); // Revert changes
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* Header/Banner Section - Reusing style from Client-Booking */}
      <div className="w-full h-48 md:h-64 lg:h-80 bg-gray-200 relative group">
        <img
          src="https://placehold.co/1920x320/a5f3fc/0ea5e9?text=Shop+Banner&font=inter"
          alt="Shop banner image"
          className="w-full h-full object-cover"
        />
        {isEditing && (
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
            <span className="text-white font-medium bg-black bg-opacity-50 px-4 py-2 rounded">Change Banner</span>
          </div>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative -mt-16 md:-mt-24">
          <div className="bg-white rounded-lg shadow-lg p-6">
            
            {/* Top Section: Logo & Main Info */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="flex items-end">
                <div className="relative flex-shrink-0 h-24 w-24 md:h-32 md:w-32 rounded-full border-4 border-white bg-gray-100 overflow-hidden group">
                  <img
                    src="https://placehold.co/128x128/e0e7ff/4338ca?text=LOGO&font=inter"
                    alt="Shop Logo"
                    className="h-full w-full object-contain p-2"
                  />
                  {isEditing && (
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                      <span className="text-white text-xs font-medium bg-black bg-opacity-50 px-2 py-1 rounded">Edit</span>
                    </div>
                  )}
                </div>
                
                <div className="ml-4 mb-2">
                  {isEditing ? (
                    <input
                      type="text"
                      name="name"
                      value={tempProfile.name}
                      onChange={handleInputChange}
                      className="text-2xl md:text-3xl font-bold text-gray-900 border-b-2 border-blue-500 focus:outline-none bg-transparent w-full"
                      placeholder="Business Name"
                    />
                  ) : (
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{profile.name}</h1>
                  )}
                  
                  <div className="flex items-center mt-1 text-sm text-gray-600">
                     <span className="text-yellow-500 mr-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span key={i}>{i < profile.rating ? '★' : '☆'}</span>
                        ))}
                     </span>
                     <span>{profile.rating}.0 ({profile.reviews} reviews)</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mb-2">
                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="px-5 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-sm"
                  >
                    Edit Profile
                  </button>
                ) : (
                  <>
                    <button
                      onClick={handleCancel}
                      className="bg-blue-600 px-5 py-2 rounded-lg border !border-white text-white font-medium hover:bg-blue-700 transition-colors shadow-sm"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSave}
                      className="px-5 py-2 rounded-lg border border-white bg-green-600 text-white font-medium hover:bg-green-700 transition-colors shadow-sm"
                    >
                      Save Changes
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Content Grid */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Left Column: Details */}
              <div className="lg:col-span-2 space-y-8">
                
                {/* About Section */}
                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">About Us</h2>
                  {isEditing ? (
                    <textarea
                      name="description"
                      value={tempProfile.description || "We are a dedicated repair shop..."} // Fallback if description missing in mock
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Describe your business..."
                    />
                  ) : (
                    <p className="text-gray-600 leading-relaxed">
                      {profile.description || "We are a dedicated repair shop providing top-notch services for all your electronic needs. Our team of experts ensures quality repairs with quick turnaround times."}
                    </p>
                  )}
                </section>

                {/* Services Section */}
                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Services Offered</h2>
                  <div className="flex flex-wrap gap-2">
                    {(isEditing ? tempProfile.services : profile.services).map((service, index) => (
                      <span 
                        key={index} 
                        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${isEditing ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'bg-gray-100 text-gray-800'}`}
                      >
                        {service}
                        {isEditing && (
                          <button 
                            onClick={() => handleServiceRemove(index)}
                            className="bg-transparent ml-2 text-blue-500 hover:bg-blue-100 rounded-lg px-2 py-1"
                          >
                            ×
                          </button>
                        )}
                      </span>
                    ))}
                  </div>
                  
                  {isEditing && (
                    <div className="mt-3 flex gap-2">
                      <input
                        type="text"
                        value={newService}
                        onChange={(e) => setNewService(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleServiceAdd()}
                        placeholder="Add a service..."
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      />
                      <button
                        onClick={handleServiceAdd}
                        className="bg-blue-500 px-4 py-2 text-white rounded-lg text-sm font-medium hover:bg-blue-800"
                      >
                        Add
                      </button>
                    </div>
                  )}
                </section>

              </div>

              {/* Right Column: Contact & Info */}
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-4">Business Details</h3>
                  
                  <div className="space-y-4">
                    {/* Location */}
                    <div>
                      <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Address</label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="address"
                          value={tempProfile.address}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 text-sm"
                        />
                      ) : (
                        <div className="flex items-start text-gray-700">
                          <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                          <span className="text-sm">{profile.address}</span>
                        </div>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Phone</label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="phone"
                          value={tempProfile.phone}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 text-sm"
                        />
                      ) : (
                        <div className="flex items-center text-gray-700">
                          <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                          <span className="text-sm">{profile.phone}</span>
                        </div>
                      )}
                    </div>

                    {/* Website */}
                    <div>
                      <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Website</label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="website"
                          value={tempProfile.website}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 text-sm"
                        />
                      ) : (
                        <div className="flex items-center text-gray-700">
                          <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>
                          <a href={profile.website} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline truncate">{profile.website}</a>
                        </div>
                      )}
                    </div>

                    {/* Hours */}
                    <div>
                      <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Operating Hours</label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="hours"
                          value={tempProfile.hours}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 text-sm"
                        />
                      ) : (
                        <div className="flex items-center text-gray-700">
                          <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                          <span className="text-sm">{profile.hours}</span>
                        </div>
                      )}
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessProfile;
