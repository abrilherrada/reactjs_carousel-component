export const fetchImages = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  
    return [
      './assets/cabins.jpg',
      './assets/ice.jpg',
      './assets/lake.jpg',
      './assets/mountains.jpg',
      './assets/river.jpg',
      './assets/volcano.jpg',
    ];
  };