export interface Forecast {
  day: string,
  temperature: string,
  wind: string
}

export interface Weather {
  name: string,
  temperature: string,
  wind: string,
  description: string,
  forecast: Forecast[]
}

export const DEFAULT_WEATHER: Weather = {
  name: '',
  temperature: '',
  wind: '',
  description: '',
  forecast: []
} as const;
