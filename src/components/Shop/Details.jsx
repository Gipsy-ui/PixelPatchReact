import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; // <-- import useNavigate
import { Link } from "react-router-dom";
import {
  Home,
  Hammer,
  Box,
  Tag,
  Star,
  Settings,
  HelpCircle,
} from "lucide-react";

export default function ShopServiceDetail() {
  const navigate = useNavigate(); // <-- initialize navigate
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

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isProfileOpen]);

  return (
    <div
      className="flex min-h-screen bg-gray-100"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col">
        <main className="p-8 overflow-y-auto">
          <div className="bg-white p-8 rounded-lg shadow-sm border max-w-3xl mx-auto">
            {/* Header */}
            <div className="flex justify-between items-center pb-4 border-b">
              <h1 className="text-2xl font-semibold">Service Details</h1>
              <button
                onClick={() => navigate("/business/services/add-delete")}
                className="bg-white text-sm font-medium text-blue-600 hover:text-blue-800"
              >
                Edit
              </button>
            </div>

            {/* Body */}
            <div className="space-y-6 pt-6">
              <div>
                <label className="text-sm text-gray-500">Category</label>
                <p className="text-lg font-semibold">Smartphone</p>
              </div>

              <div>
                <label className="text-sm text-gray-500">Repair Service</label>
                <p className="text-lg font-semibold">Screen Replacement</p>
                <p className="text-sm text-gray-600 mt-1">
                  This is a repair service you provide for the selected device.
                </p>
              </div>

              <div>
                <label className="text-sm text-gray-500">Estimated Timeframe</label>
                <p className="text-lg font-semibold">2 to 4 Days</p>
              </div>

              <div>
                <label className="text-sm text-gray-500">Estimated Price</label>
                <p className="text-lg font-semibold">200.00 PHP</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
