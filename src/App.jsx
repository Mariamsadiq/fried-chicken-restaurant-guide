import React, { useState } from 'react';
import './App.css';
import Resturant from './components/Resturant';
import StarRating from './components/StarRating';

function App() {
  const [restaurant, setRestaurant] = useState({
    name: '',
    address: '',
    description: '',
    rate: '',
  });
  const [restList, setRestList] = useState([]);

  const addRest = (e) => {
    e.preventDefault();
    if (restaurant.name && restaurant.address && restaurant.description && restaurant.rate) {
      setRestList([...restList, { ...restaurant }]);
      setRestaurant({
        name: '',
        address: '',
        description: '',
        rate: '',
      });
    } else {
      // Optionally, you can add some form validation feedback here
    }
  }

  const handleDelete = (restaurantName) => {
    const updatedList = restList.filter(
      (restaurant) => restaurant.name !== restaurantName
    );
    setRestList(updatedList);
  };

  return (
    <div className="App">
      <header className='header'>
        <h3>  Find the best Fried Chicken Restaurant </h3>
      </header>
      <div className="main">
        <form onSubmit={addRest}>
          <label> Restaurant Name </label>
          <input
            type="text"
            value={restaurant.name}
            onChange={(e) => setRestaurant({ ...restaurant, name: e.target.value })}
          />
          <label> Address  </label>
          <input
            type="text"
            value={restaurant.address}
            onChange={(e) => setRestaurant({ ...restaurant, address: e.target.value })}
          />
          <label> Description  </label>
          <textarea
            value={restaurant.description}
            onChange={(e) => setRestaurant({ ...restaurant, description: e.target.value })}
          />
          <label> Rate  </label>
          <StarRating rating={restaurant.rate} onRate={(rate) => setRestaurant({ ...restaurant, rate })} />
          <button type="submit"> Add your Suggestion </button>
        </form>
      </div>
      <div className="showResturants">
        {restList.map((restaurant) => (
          <Resturant
            key={restaurant.name}
            name={restaurant.name}
            address={restaurant.address}
            description={restaurant.description}
            rate={restaurant.rate}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
