import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../data/data.js'; // Path thik ache ki na check korben

const FoodDetails = () => {
  const { id } = useParams();
  const food = data.find((item) => item.id === parseInt(id));

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: ''
  });

  // Food khuje na pele
  if (!food) {
    return <div className='pt-24 text-center text-2xl font-bold'>Food not found!</div>;
  }

  // Input change handle kora
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Order confirm kora
  const handleOrder = (e) => {
    e.preventDefault();
    const { name, email, address } = formData;

    if (name && email && address) {
      alert(`Congratulations ${name}! Your order for ${food.name} has been confirmed. ✅`);
      setFormData({ name: '', email: '', address: '' }); // Form clear kora
    } else {
      alert("Please fill up all the fields (Name, Email, Address) to confirm your order! ❌");
    }
  };

  return (
    <div className='max-w-[1240px] mx-auto p-4 py-24'>
      <div className='grid md:grid-cols-2 gap-8 bg-white shadow-2xl rounded-2xl overflow-hidden'>
        
        {/* Left Side: Image */}
        <div className='w-full h-full'>
          <img 
            className='w-full h-[300px] md:h-full object-cover' 
            src={food.image} 
            alt={food.name} 
          />
        </div>

        {/* Right Side: Details & Form */}
        <div className='p-8 flex flex-col justify-center'>
          <h1 className='text-4xl font-bold text-gray-800 mb-2'>{food.name}</h1>
          <p className='text-orange-600 font-bold text-2xl mb-6'>Price: {food.price}</p>

          <form onSubmit={handleOrder} className='space-y-4'>
            <div>
              <label className='block font-semibold mb-1'>Full Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name" 
                className='w-full p-3 border rounded-lg outline-orange-500 transition'
                required 
              />
            </div>
            <div>
              <label className='block font-semibold mb-1'>Email Address</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email" 
                className='w-full p-3 border rounded-lg outline-orange-500 transition'
                required 
              />
            </div>
            <div>
              <label className='block font-semibold mb-1'>Delivery Address</label>
              <textarea 
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your full address" 
                rows="3"
                className='w-full p-3 border rounded-lg outline-orange-500 transition'
                required 
              ></textarea>
            </div>

            <button 
              type="submit"
              className='w-full bg-orange-600 text-white font-bold py-3 rounded-lg hover:bg-orange-700 transition duration-300 shadow-md'
            >
              Confirm Order Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;