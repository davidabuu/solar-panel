interface Coords {
    latitude: number;
    longitude: number;
  }
  
  const getLocation = (): Promise<Coords> =>
    new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('Geolocation is not supported.'));
      }
  
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          resolve({ latitude, longitude });
        },
        () => {
          reject(new Error('Permission denied.'));
        }
      );
    });
  
  export default getLocation;
  