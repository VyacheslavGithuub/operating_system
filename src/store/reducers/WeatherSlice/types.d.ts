export interface IDataWeather {
  current: {
    // облачный покров
    cloudcover: number;
    // как будто
    feelslike: number;
    // влажность
    humidity: number;
    // день
    is_day: string;
    // время наблюдения
    observation_time: string;
    // осадок
    precip: number;
    // Температура
    temperature: number;
    // давление
    pressure: number;
    // температура
    temperature: number;
    // Ультрафиолетовый индекс
    uv_index: number;
    visibility: number;
    // код погоды
    weather_code: number;
    // описания погоды
    weather_descriptions: str[];
    // иконки погоды
    weather_icons: string[];
    // градус ветра
    wind_degree: number;
    // направление ветра
    wind_dir: string;
    // скорость ветра
    wind_speed: number;
  };
  location: {
    // страна
    country: string;
    lat: string;
    // местное время
    localtime: string;
    localtime_epoch: number;
    lon: string;
    // New York
    name: string;
    // America/New_York
    region: string;
    timezone_id: string;
    utc_offset: string;
  };
  request: {
    // язык
    language: string;
    // New York, United States of America
    query: string;
    // City
    type: string;
    // "мегаполис"
    unit: string;
  };
}
