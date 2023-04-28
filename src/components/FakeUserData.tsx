interface SensorData {
    current: number;
    voltage: number;
    radiance: number;
    getDate: Date;
    status: 0 | 1;
  }
  
 export const generateSensorData = (): SensorData => {
    const current = Math.random() * 20;
    const voltage = Math.random() * 20;
    const radiance = Math.random() * 100;
    const getDate = new Date();
    const status: 0 | 1 = Math.round(Math.random()) as 0 | 1;
  
    return { current, voltage, radiance, getDate, status };
  };
  
  
  