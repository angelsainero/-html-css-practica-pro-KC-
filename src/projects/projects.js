const PROJECTS = [
  {
    image: 'images/projects/dvd-pack-3-peliculas-shin-chan.jpg',
    label: '3 peliculas shin chan',
  },
  {
    image: 'images/projects/dvd-shin-chan-la-invasion.jpg',
    label: 'shin chan la invasion',
  },
  {
    image: 'images/projects/pack-dvd-shin-chan-diversion-5.jpg',
    label: 'pack dvd shin chan diversion 5',
  },
  {
    image: 'images/projects/pack-dvd-shin-chan-diversion-2.jpg',
    label: 'pack dvd shin chan diversion',
  },
  {
    image: 'images/projects/pack-5-peliculas-shin-chan-2.jpg',
    label: 'pack 5 peliculas shin chan',
  },
  {
    image: 'images/projects/pack-dvd-shin-chan-diversion-3.jpg',
    label: 'pack dvd shin chan diversion 3',
  },
  {
    image: 'images/projects/pack-dvd-shin-chan-diversion-4.jpg',
    label: 'pack dvd shin chan diversion 4',
  },
];

export const getProjects = async () => {
  try {
    const apiRequest = await fetch('https://kitsu.io/api/edge/anime?filter[text]=shin-chan');
    const apiData = await apiRequest.json();
    const projects = apiData.data.map(anime => ({
      label: anime.attributes.titles.en || anime.attributes.titles.ja_jp || anime.attributes.titles.en_us,
      image: anime.attributes.posterImage.medium,
    }));
    return projects;
  } catch (error) {
    // fallback API in case it reaches API LIMIT in class
    // this is only for educational purposes. Here we should handle the error
    return Promise.resolve(PROJECTS);
  }
};
