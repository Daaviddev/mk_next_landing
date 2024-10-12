/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React, { useEffect, useState } from 'react';
import CarCard from '@/components/sections/featured_car_card';

const Vozila = () => {
  const [fetchedCars, setFetchedCars] = useState<any[]>([]);
  const [filteredCars, setFilteredCars] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // State for the filters
  const [selectedMake, setSelectedMake] = useState<string>('');
  const [mileageRange, setMileageRange] = useState<number[]>([0, 200000]); // Min, Max mileage
  const [yearRange, setYearRange] = useState<number[]>([2000, 2024]); // Min, Max year
  const [selectedEngine, setSelectedEngine] = useState<string>('');

  // Fetch cars on mount
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch(
          'https://mk-nest-backendservices.replit.app/listing/company/6673f85d9c545fa1cecfeffd'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch cars');
        }
        const data = await response.json();
        const unsoldCars = data.filter((car: any) => !car.listing.isSold);

        console.log(unsoldCars);
        setFetchedCars(unsoldCars);
        setFilteredCars(unsoldCars); // Initially show all cars
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  // Filter cars based on filter state
  useEffect(() => {
    let filtered = fetchedCars;

    if (selectedMake) {
      filtered = filtered.filter(
        (car) =>
          car.listing.car.make.toLowerCase() === selectedMake.toLowerCase()
      );
    }

    filtered = filtered.filter(
      (car) =>
        car.listing.listingDetails.mileage >= mileageRange[0] &&
        car.listing.listingDetails.mileage <= mileageRange[1]
    );

    filtered = filtered.filter(
      (car) =>
        car.listing.car.year >= yearRange[0] &&
        car.listing.car.year <= yearRange[1]
    );

    if (selectedEngine) {
      filtered = filtered.filter(
        (car) =>
          car.listing.car.fuel.toLowerCase() === selectedEngine.toLowerCase()
      );
    }

    setFilteredCars(filtered);

    for (const car of filteredCars) {
      if (car.listing.car.gear === 'Mehanički mjenjač') {
        car.listing.car.gear = 'Mehanički';
      }
    }
  }, [
    selectedMake,
    mileageRange,
    yearRange,
    selectedEngine,
    fetchedCars,
    filteredCars,
  ]);

  return (
    <main>
      <div className="py-8 antialiased dark:bg-gray-900 md:py-12 border-gray-500">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          {/* Filter Section */}
          <div className="mb-10 flex flex-wrap justify-between items-center text-gray-100 bg-opacity-50 bg-[rgba(23,26,33,0.05)] backdrop-blur-md border border-gray-300/25 shadow-black shadow-lg rounded-xl">
            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 justify-between items-center w-full px-5 py-5">
              <h2 className="text-xl font-semibold text-gray-100 sm:text-2xl w-[20%]">
                Filter
              </h2>
              {/* Car Make Filter */}
              <div className="flex w-full flex-col lg:flex-row items-start lg:items-center ml-0 pl-0">
                <div className="flex flex-row w-full justify-between p-3 lg:p-0 lg:justify-center items-center">
                  <label className="block text-gray-100 mr-5">Marka :</label>
                  <select
                    value={selectedMake}
                    onChange={(e) => setSelectedMake(e.target.value)}
                    className="bg-gray-700 text-white px-4 py-2 pl-1 rounded-xl"
                  >
                    <option value="">Sve Marke</option>
                    <option value="Audi">Audi</option>
                    <option value="VW">VW</option>
                    <option value="Peugeot">Peugeot</option>
                    <option value="Nissan">Nissan</option>
                    <option value="Renault">Renault</option>
                    <option value="Opel">Opel</option>
                    {/* Add more makes as needed */}
                  </select>
                </div>

                {/* Mileage Range Filter */}
                <div className="flex flex-row w-full justify-between p-3 lg:p-0 lg:justify-center items-center">
                  <label className="block text-gray-100 mr-5">
                    Kilometraža :
                  </label>
                  <div>
                    <div className="flex justify-between text-gray-400 text-sm">
                      <span>0 km</span>
                      <span>{mileageRange[1]} km</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="300000"
                      step="1000"
                      value={mileageRange[1]}
                      onChange={(e) =>
                        setMileageRange([0, Number(e.target.value)])
                      }
                      className="w-full bg-gray-700"
                    />
                  </div>
                </div>

                {/* Year Range Filter */}
                <div className="flex flex-row w-full justify-between p-3 lg:p-0 lg:justify-center items-center">
                  <label className="block text-gray-100 mr-5">Godina :</label>
                  <div>
                    <div className="flex justify-between text-gray-400 text-sm">
                      <span>2000</span>
                      <span>{yearRange[1]}</span>
                    </div>
                    <input
                      type="range"
                      min="2000"
                      max="2024"
                      step="1"
                      value={yearRange[1]}
                      onChange={(e) =>
                        setYearRange([2000, Number(e.target.value)])
                      }
                      className="w-full bg-gray-700"
                    />
                  </div>
                </div>

                {/* Engine Filter */}
                <div className="flex flex-row w-full justify-between p-3 lg:p-0 lg:justify-center items-center">
                  <label className="block text-gray-100 mr-5">Motor :</label>
                  <select
                    value={selectedEngine}
                    onChange={(e) => setSelectedEngine(e.target.value)}
                    className="bg-gray-700 text-white px-4 py-2 pl-1  rounded-xl"
                  >
                    <option value="">Svi</option>
                    <option value="Diesel">Dizel</option>
                    <option value="Benzin">Benzin</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Car Listings Section */}
          <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 p-5 xl:grid-cols-4 text-gray-100 bg-opacity-50 bg-[rgba(23,26,33,0.05)] backdrop-blur-md border border-gray-300/10 shadow-black shadow-lg rounded-xl">
            {filteredCars.map((automobile) => (
              <CarCard
                key={automobile.listing.id}
                name={automobile.listing.title}
                price={automobile.listing.price}
                year={automobile.listing.car.year}
                km={`${automobile.listing.listingDetails.mileage} km`}
                gear={automobile.listing.car.gear} // Update if available in API
                fuel={automobile.listing.car.fuel} // Update if available in API
                image={automobile.listing.listingDetails.imageUrl}
                link={automobile.listing.link}
                sold={automobile.listing.isSold}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Vozila;
