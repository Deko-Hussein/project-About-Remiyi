import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const GroceryOrder = () => {
  const [showModal, setShowModal] = useState(false);
  const [redirectToHome, setRedirectToHome] = useState(false);

  const handleOrder = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setRedirectToHome(true); // Redirect after closing the modal
  };

  // If redirectToHome is true, navigate to home
  if (redirectToHome) {
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800">Dalbo Qudaartaada</h2>
          <p className="text-gray-600 mb-4">Fadlan xulo qudaarta aad rabto inaad dalbato:</p>
          
          <ul className="space-y-3">
            <li className="flex items-center">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" />
              <span className="ml-2 text-gray-700">Qajaar</span>
            </li>
            <li className="flex items-center">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" />
              <span className="ml-2 text-gray-700">Basal</span>
            </li>
            <li className="flex items-center">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" />
              <span className="ml-2 text-gray-700">Carrot</span>
            </li>
            <li className="flex items-center">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" />
              <span className="ml-2 text-gray-700">Baradho</span>
            </li>
          </ul>

          <div className="mt-4">
            <button 
              onClick={handleOrder} 
              className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
            >
              Dalbo Hadda
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center pt-20">
          <div className="bg-white p-6 rounded shadow-lg max-w-sm">
            <h3 className="text-lg font-bold mb-2">Mahadsanid!</h3>
            <p className="mb-4">Ku mahadsanid sodalbashadaada!</p>
            <button 
              onClick={closeModal} 
              className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
            >
              Okey
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GroceryOrder;
