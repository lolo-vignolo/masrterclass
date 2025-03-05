"use client";
import { useEffect, useState } from "react";
import Image from "next/image"; // Si usas Next.js para cargar imágenes
import styles from "./page.module.css"; // Estilos CSS
import { FaSearch } from "react-icons/fa"; // Ícono de búsqueda (React Icons)

const Apicall = () => {
  interface WeatherData {
    main: {
      temp: number;
    };
    weather: {
      description: string;
      icon: string;
    }[];
  }

  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [city, setCity] = useState("Barcelona");
  const [inputCity, setInputCity] = useState("");
  const [error, setError] = useState<string | null>(null);

  const apiKey = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;

  const fetchWeather = async (cityName: string) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.cod === 200) {
        setWeather(data);
        setError(null);
      } else {
        setError(data.message);
        setWeather(null);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
      setError("An error occurred. Please try again later.");
      setWeather(null);
    }
  };

  const casa = {
    nombre: "Casa",
    color: "Rojo",
  };

  const patio = {
    nombre: "Casa",
    color: "Rojo",
  };

  const a = 2;
  const b = 2;

  console.log(a === b);
  console.log(casa === patio);

  useEffect(() => {
    fetchWeather(city);
  }, [casa.nombre]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputCity.trim()) {
      setCity(inputCity);
      setInputCity("");
    }
  };

  // const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // const smallerThanFive = useMemo(
  //   () => arrayNumbers.filter((number) => number < 5),
  //   [arrayNumbers]
  // );

  // Memoriza handleSearch
  // const handleSearch = useCallback(
  //   (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     if (inputCity.trim()) {
  //       setCity(inputCity);
  //       setInputCity("");
  //     }
  //   },
  //   [inputCity] // Dependencia de inputCity
  // );

  return (
    <div className={styles.container}>
      <Image
        src="/assets/dev_accelerator2.png"
        alt="Weather"
        width={500}
        height={250}
      />
      <h1 className={styles.title}>Weather in {city}</h1>
      <form onSubmit={handleSearch} className={styles.searchForm}>
        <input
          type="text"
          placeholder="Enter city"
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
          className={styles.searchInput}
        />
        <button style={{color:"red"}} type="submit" className={styles.searchButton}>
          <FaSearch size={20} />
        </button>
      </form>

      {error ? (
        <p className={styles.errorMessage}>{error}</p>
      ) : weather ? (
        <div className={styles.weatherInfo}>
          <div className={styles.iconContainer}>
            {weather.weather && (
              <Image
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
                width={200}
                height={200}
              />
            )}
          </div>
          <div className={styles.temperatureContainer}>
            <p className={styles.temperature}>{weather.main.temp}°C</p>
            <p className={styles.description}>
              {weather.weather[0].description}
            </p>
          </div>
        </div>
      ) : (
        <p className={styles.loading}>Loading...</p>
      )}
    </div>
  );
};

export default Apicall;
