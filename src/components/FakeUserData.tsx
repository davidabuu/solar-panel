interface SensorData {
  current: number;
  voltage: number;
  radiance: number;
  getDate: Date;
  status: 0 | 1;
  setTime: string;
}

export const generateSensorData = (): SensorData => {
  const current = Math.random() * 20;

  const voltage = Math.random() * 20;
  const radiance = Math.random() * 100;
  const getDate = new Date();
  const status: 0 | 1 = Math.round(Math.random()) as 0 | 1;
  const setTime: string = new Date().toLocaleTimeString();

  return { current, voltage, radiance, getDate, status, setTime };
};

export const generateRandomValue = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};
