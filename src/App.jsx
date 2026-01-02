import './App.css'
import h1 from './assets/h1.png'
import h2 from './assets/h2.png'
import h3 from './assets/h3.png'

function App() {
  const restaurants = [
    {
      id: 1,
      name: "Tasty Bites",
      location: "Downtown, City",
      originalPrice: 50,
      discountedPrice: 35,
      rating: 4.5,
      boughtCount: 120,
      images: [h1, h2, h3]
    },
    {
      id: 2,
      name: "Spice Garden",
      location: "Uptown, City",
      originalPrice: 80,
      discountedPrice: 60,
      rating: 4.8,
      boughtCount: 85,
      images: [h1, h2, h3]
    },
    {
      id: 3,
      name: "Burger Hub",
      location: "Midtown, City",
      originalPrice: 40,
      discountedPrice: 25,
      rating: 4.2,
      boughtCount: 200,
      images: [h1, h2, h3]
    }
  ]

  return (
    <div className="app-container">
      <header>
        <h1>Restaurant Listings</h1>
      </header>
      <main className="listing-container">
        {restaurants.map(restaurant => (
          <div key={restaurant.id} className="restaurant-card">
            <div className="image-grid">
              <div className="main-image">
                <img src={restaurant.images[0]} alt={`${restaurant.name} main`} />
              </div>
              <div className="side-images">
                <img src={restaurant.images[1]} alt={`${restaurant.name} side 1`} />
                <img src={restaurant.images[2]} alt={`${restaurant.name} side 2`} />
              </div>
            </div>
            <div className="details">
              <div className="header-row">
                <h2 className="name">{restaurant.name}</h2>
                <span className="rating">★ {restaurant.rating}</span>
              </div>
              <p className="location">{restaurant.location}</p>
              <div className="price-row">
                <span className="discounted-price">${restaurant.discountedPrice}</span>
                <span className="original-price">${restaurant.originalPrice}</span>
              </div>
              <p className="bought-count">{restaurant.boughtCount} bought</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  )
}

export default App
