import { useEffect, useState } from 'react';
import { IWeatherData } from '../types/apiTypes';

const API_KEY = process.env.REACT_APP_API_KEY || '';
const API_LINK = 'https://api.openweathermap.org/data/2.5/weather';

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const fetchWeather = async (city: string) => {
  let error = '';
  let data:IWeatherData|null = null;
  try {
    const response = await fetch(`${API_LINK}?q=${city}&appid=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Bad request');
    }

    data = await response.json();

    // I'll capitalize description here to not doing it anywhere else
    if (response.ok && data) {
      data.weather[0].description = capitalize(data.weather[0].description);
    }
  } catch {
    error = `Failed to fetch ${city} info!`;
  }
  return { error, data };
};

const useWeather = (city: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [data, setData] = useState<IWeatherData|null>(null);

  useEffect(() => {
    fetchWeather(city).then((response) => {
      setError(response.error);
      setData(response.data);
      setIsLoading(false);
    });
  }, [city]);

  return { isLoading, error, data };
};

export default useWeather;
