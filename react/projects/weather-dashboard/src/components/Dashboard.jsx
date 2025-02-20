import React from 'react';
import { LoadingProvider, useLoading } from '../context/LoadingContext';
import CurrentWeatherCard from './CurrentWeatherCard';
import WeeklyWeather from './WeeklyWeather';
import CitySelector from './CitySelector';
import HourlyForecast from './HourlyWeather';

/**
 * Renders the content of the dashboard.
 * Displays a loading spinner if isLoading is true.
 * Otherwise, renders the weather components.
 */
const DashboardContent = () => {
  const { isLoading } = useLoading();

  if (isLoading) {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-25">
        <div className="loader text-white">
          <svg className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent" viewBox="0 0 24 24"></svg>
          <span className="ml-2"></span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <main>
        <div className="container mx-auto">
          <div className='flex flex-col sm:flex-row justify-center px-4 gap-4 py-8'>
            <CitySelector className="w-full sm:w-auto"/>
          </div>
          <div class="location-instructions w-1/2 mx-auto">
              <h2>Enable Location Services on iOS</h2>
              <p>To use the geolocation feature on our website, please enable location services on your iOS device:</p>
              <ol>
                  <li>Go to your device's <strong>Settings</strong>.</li>
                  <li>Scroll down and select <strong>Safari</strong>.</li>
                  <li>Tap <strong>Location</strong> and select <strong>While Using the App</strong>.</li>
                  <li>If prompted, allow our website to access your location.</li>
              </ol>
          </div>

          <div className="flex flex-col md:flex-row gap-4 p-4">
            <div className="flex-grow flex-shrink md:basis-1/3">
              <CurrentWeatherCard />
            </div>
            <div className="flex-grow flex-shrink md:basis-2/3">
              <WeeklyWeather />
            </div>
          </div>
          <div className='mx-auto w-full md:w-10/12 pb-40'>
            <HourlyForecast />
          </div>
        </div>
      </main>
    </div>
  );
};

/**
 * Renders the dashboard component.
 * Wraps the DashboardContent component with the LoadingProvider.
 */
const Dashboard = () => {
  return (
    <LoadingProvider>
      <DashboardContent />
    </LoadingProvider>
  );
};

export default Dashboard;
