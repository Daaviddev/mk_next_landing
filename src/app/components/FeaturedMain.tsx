'use client';

import React, { useState, useEffect } from 'react';
import CarCard from '@/components/sections/featured_car_card';
import MoreButton from '@/components/sections/more_button';

const FeaturedMainCarsSection: React.FC = () => {
  const [promotedCars, setPromotedCars] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch(
          'https://mk-nest-backendservices.replit.app/listing/promoted'
        ); // Replace with your actual API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch cars');
        }
        const data = await response.json();
        const promoted = data.filter((car: any) => car.isPromoted);

        // console.log(promoted);
        setPromotedCars(promoted);

        for (const car of promoted) {
          if (car.car.gear === 'Mehanički mjenjač') {
            car.car.gear = 'Mehanički';
          }
        }
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bg-gradient-to-t from-[#21243380] to-[#171A21] p-6 text-center text-white flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-lg">
        {promotedCars.map((car) => (
          <CarCard
            key={car.id}
            name={car.title}
            price={car.price}
            year={car.car.year}
            km={`${car.listingDetails.mileage} km`}
            gear={car.car.gear} // Update if available in API
            fuel={car.car.fuel} // Update if available in API
            image={car.listingDetails.imageUrl}
            link={car.link}
            sold={car.isSold}
          />
        ))}
      </div>
      <div className="mt-20 mb-10">
        <div className="flex justify-center">
          <MoreButton />
        </div>
      </div>
    </div>
  );
};

export default FeaturedMainCarsSection;
