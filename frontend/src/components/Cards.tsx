import React from 'react';
import Image from 'next/image';

interface Card {
  id: number;
  title: string;
  description: string;
  image: string;
  year: number;
}

const Cards = () => {
  const cardData: Card[] = [
    {
      id: 1,
      title: 'Card 1',
      description: 'Description for Card 1',
      image: 'https://images.unsplash.com/photo-1518779578993-ec3579dfef79',
      year: 2021,
    },
    {
      id: 2,
      title: 'Card 2',
      description: 'Description for Card 2',
      image: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b',
      year: 2022,
    },
    {
      id: 3,
      title: 'Card 3',
      description: 'Description for Card 3',
      image: 'https://images.unsplash.com/photo-1517409241551-b0e77d54b455',
      year: 2023,
    },
    {
      id: 4,
      title: 'Card 4',
      description: 'Description for Card 4',
      image: 'https://images.unsplash.com/photo-1522896561-12c858564f58',
      year: 2024,
    },
  ];

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
      {cardData.map((card) => (
        <div key={card.id} className='bg-gray-800 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300'>
          {/* Using Next.js Image for optimization */}
          <div className="relative w-full h-64">
            <Image
              src={card.image} 
              alt={card.title}
              fill
              style={{ objectFit: 'cover' }}
              quality={80}
            />
          </div>
          <div className='p-4'>
            <h2 className='text-lg font-bold text-white'>{card.title}</h2>
            <p className='text-gray-400'>{card.description}</p>
            <p className='text-gray-500 text-sm mt-2'>Year: {card.year}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;