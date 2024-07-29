import React from 'react';
import '../../assets/css/Destination.css';

const Card = ({ title, copy, button }) => (
  <div className="card">
    <div className="content">
      <h2 className="title">{title}</h2>
    </div>
  </div>
);

const Destination = () => {
  const cards = [
    {
      title: 'Bangalore',
      copy: 'Experience the vibrant lifestyle and booming real estate market in the Silicon Valley of India.',
      button: 'Read More',
    },
    {
      title: 'Chennai',
      copy: 'Explore the coastal city with its rich cultural heritage and rapidly growing residential areas.',
      button: 'Read More',
    },
    {
      title: 'Hyderabad',
      copy: 'Discover the city of pearls, known for its IT hubs and a perfect blend of tradition and modernity.',
      button: 'Read More',
    },
    {
      title: 'Coimbatore',
      copy: 'Invest in the Manchester of South India, known for its pleasant climate and industrial growth.',
      button: 'Read More',
    },
  ];

  return (
    <div className="dest">
      <h1 className="heading pt-10">TOP LOCATIONS IN SOUTH INDIA</h1>
      <p className="subheading">Explore the best real estate locations in South India!</p>
      <main className="page-content">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
          />
        ))}
      </main>
    </div>
  );
};

export default Destination;
