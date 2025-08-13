import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CardItem {
  id: number;
  title: string;
  posterUrl: string;
  year: number;
  type: 'movies' | 'anime' | 'drama' | 'kids';
  description?: string;
  rating?: number;
}

const Cards = ({ items }: { items: CardItem[] }) => {
  if (!items || items.length === 0) {
    return <div className="text-center text-lg text-gray-400 p-8">No items found.</div>;
  }

  const FALLBACK_IMAGE_URL = '/assets/kids.jpg';

  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-4'>
      {items.map((item) => (
        <Link 
          href={`/${item.type}/${item.id}`}
          key={item.id} 
          passHref
          aria-label={`View details for ${item.title}`}
        >
          <div className='relative bg-gray-800 rounded-lg shadow-xl overflow-hidden cursor-pointer group transform hover:scale-105 transition-transform duration-300'>
            <div className="relative w-full h-48 sm:h-64">
              <Image
                src={item.posterUrl || FALLBACK_IMAGE_URL} 
                alt={item.title}
                fill
                style={{ objectFit: 'cover' }}
                quality={80}
              />
            </div>
            
            <div className='p-4'>
              <h2 className='text-md font-bold text-white whitespace-nowrap overflow-hidden text-overflow-ellipsis'>{item.title}</h2>
              <p className='text-gray-400 text-sm mt-1'>({item.year})</p>
              
              {item.description && (
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                  <p className="text-white text-sm text-center line-clamp-4">{item.description}</p>
                </div>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Cards;