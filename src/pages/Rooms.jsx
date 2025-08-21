import React from 'react'

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      name: 'Deluxe Double Room',
      price: 'From LKR 12,000/night',
      image: '/img/rooms/1.jpg',
      description: 'A cozy retreat for couples or two travelers looking for a comfortable stay with stunning views.',
      features: ['King-size bed or two single beds', '55-inch Smart TV', 'Air Conditioning', 'Complimentary Wi-Fi']
    },
    {
      id: 2,
      name: 'Deluxe Family Room',
      price: 'From LKR 15,000/night',
      image: '/img/rooms/2_b.jpg',
      description: 'Perfect for families or small groups, providing spacious accommodation with modern amenities.',
      features: ['King-size bed + 1 single bed', '55-inch Smart TV', 'Air Conditioning', 'Family-friendly space']
    },
    {
      id: 3,
      name: 'Deluxe Single Room',
      price: 'From LKR 9,000/night',
      image: '/img/rooms/single.png',
      description: 'Designed for solo travelers seeking comfort and privacy in a cozy setting.',
      features: ['Single bed', '55-inch Smart TV', 'Air Conditioning', 'Private space']
    },
    {
      id: 4,
      name: 'Mixed Dormitory',
      price: 'From LKR 3,000/night',
      image: '/img/rooms/4.jpg',
      description: 'Budget-friendly option for backpackers and solo adventurers who love meeting fellow travelers.',
      features: ['Shared accommodation', 'Individual beds', 'Common facilities', 'Great for socializing']
    }
  ]

  return (
    <main style={{ paddingTop: '100px' }}>
      <div className="container">
        <div className="section">
          <h1 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '1rem', color: '#24262d' }}>
            Find Your Perfect Stay
          </h1>
          <p style={{ textAlign: 'center', fontSize: '1.1rem', marginBottom: '3rem', color: '#666' }}>
            Choose from our variety of comfortable accommodations designed for every type of traveler
          </p>
          
          <div style={{ display: 'grid', gap: '2rem' }}>
            {rooms.map((room) => (
              <div key={room.id} className="room-card" style={{ 
                display: 'flex', 
                flexDirection: window.innerWidth > 768 ? 'row' : 'column',
                alignItems: 'center',
                gap: '2rem',
                padding: '2rem'
              }}>
                <img 
                  src={room.image} 
                  alt={room.name}
                  style={{
                    width: window.innerWidth > 768 ? '400px' : '100%',
                    height: '300px',
                    objectFit: 'cover',
                    borderRadius: '10px',
                    flexShrink: 0
                  }}
                />
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#24262d' }}>
                    {room.name}
                  </h3>
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem', color: '#666' }}>
                    {room.description}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
                    {room.features.map((feature, index) => (
                      <li key={index} style={{ 
                        padding: '0.5rem 0', 
                        borderBottom: '1px solid #eee',
                        fontSize: '1rem'
                      }}>
                        ✓ {feature}
                      </li>
                    ))}
                  </ul>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.3rem', fontWeight: '600', color: '#feb30c' }}>
                      {room.price}
                    </span>
                    <a 
                      href="https://www.booking.com/hotel/lk/happy-laugh-hostel-ella12.en-gb.html" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Rooms