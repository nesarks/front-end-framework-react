import React, { useState } from 'react';
import './App.css';
import Product from './Product';

function App() {
  // User state management
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [occupation, setOccupation] = useState('');

  // Product state management (optional: you can move this to the Product component)
  const [product, setProduct] = useState({
    name: 'Sample Product',
    price: 29.99,
    description: 'This is a sample product description.',
  });

  // Method to update product details
  const updateProductDetails = (newDetails) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      ...newDetails,
    }));
  };

  // Method to handle user addition
  const handleAddUser = (e) => {
    e.preventDefault();
    if (name && age && occupation) {
      const newUser = {
        id: Date.now(),
        name,
        age,
        occupation,
      };
      setUsers([...users, newUser]);
      setName('');
      setAge('');
      setOccupation('');
    }
  };

  return (
    <div className="App">
      {/* User Profiles Section */}
      <h1>User Profiles</h1>
      {users.length === 0 ? (
        <p>No users available</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.age}) - {user.occupation}
            </li>
          ))}
        </ul>
      )}
      <form onSubmit={handleAddUser}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Occupation"
          value={occupation}
          onChange={(e) => setOccupation(e.target.value)}
          required
        />
        <button type="submit">Add User</button>
      </form>

      {/* Product Section */}
      <h1>Product Information</h1>
      <Product product={product} onUpdate={updateProductDetails} />
    </div>
  );
}

export default App;
