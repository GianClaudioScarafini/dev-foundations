# Project 04 — Weather Dashboard

**Difficulty:** Mid  
**Stack:** React + TypeScript + Vite + External API  
**Time estimate:** 2–3 sessions  

---

## What you're building

A weather dashboard that fetches real data from a public API and displays it cleanly. This is a pure frontend project — no backend needed. The goal is mastering TypeScript in React: typed props, typed API responses, typed hooks, typed state.

Use the **Open-Meteo API** — it's free, no API key required.  
Docs: https://open-meteo.com/en/docs

---

## What it shows

- Current temperature, wind speed, weather condition for any city
- 7-day forecast (high/low + weather icon/emoji)
- Hourly temperature chart for today (build with plain SVG or CSS — no chart library)
- Search for any city by name (use Open-Meteo's geocoding API)
- Saved locations — persist in localStorage
- Toggle °C / °F

---

## API calls you'll make

```ts
// 1. Geocoding — city name to coordinates
GET https://geocoding-api.open-meteo.com/v1/search?name=London&count=5

// 2. Weather — coordinates to forecast
GET https://api.open-meteo.com/v1/forecast
  ?latitude=51.51&longitude=-0.13
  &current=temperature_2m,windspeed_10m,weathercode
  &daily=temperature_2m_max,temperature_2m_min,weathercode
  &hourly=temperature_2m
  &timezone=auto
```

---

## Type the API responses

This is the main TypeScript challenge of this project.
The APIs return large objects — you must type them accurately.

```ts
// Define these types yourself (read the API docs):
interface GeocodingResult { ... }
interface CurrentWeather { ... }
interface DailyForecast { ... }
interface HourlyData { ... }
interface WeatherResponse { ... }
```

---

## Component structure

```
src/
├── App.tsx
├── types/
│   └── weather.ts         ← all API response types
├── hooks/
│   ├── useWeather.ts      ← fetches weather for given coordinates
│   ├── useGeocoding.ts    ← searches cities by name
│   └── useSavedLocations.ts ← localStorage persistence
├── components/
│   ├── SearchBar.tsx
│   ├── CurrentWeather.tsx
│   ├── ForecastCard.tsx   ← single day
│   ├── ForecastList.tsx   ← 7 days
│   ├── HourlyChart.tsx    ← plain SVG chart
│   ├── LocationList.tsx   ← saved locations
│   └── TemperatureToggle.tsx
└── utils/
    ├── weatherCodes.ts    ← map WMO weather codes to descriptions + emojis
    └── temperature.ts     ← °C ↔ °F conversion
```

---

## Requirements

- [ ] TypeScript strict mode
- [ ] All API responses typed — no `any`, no casting raw fetch results directly
- [ ] `useFetch<T>` generic hook for all API calls
- [ ] Loading and error states handled in UI — not just console.log
- [ ] Saved locations in localStorage — survive page refresh
- [ ] Hourly chart built with SVG (not a library) — shows temperature curve
- [ ] Weather codes mapped to readable descriptions (see WMO codes)
- [ ] Responsive layout — usable on mobile

---

## Stretch goals

- [ ] Geolocation: "Use my location" button (`navigator.geolocation`)
- [ ] Animated weather icons (pure CSS)
- [ ] Precipitation probability in the forecast
- [ ] Wind direction indicator
- [ ] Deploy to Vercel — live URL on your CV

---

## Skills used

- React + TypeScript (hooks, props, events)
- Typed fetch with generics
- useReducer for complex state
- localStorage persistence
- SVG for data visualisation
- External API integration

---

## What to say in an interview

> "I built a weather dashboard in React with TypeScript. The challenge was typing the Open-Meteo API response accurately — it has nested arrays with specific indices for hourly data. I built a generic useFetch hook that types the response based on a type parameter. I also drew the hourly temperature chart myself using SVG — no chart library."
