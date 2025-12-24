export interface Video {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  views: string;
  embedUrl: string;
}

const categories = ['Bangla', 'English', 'Physics', 'Chemistry', 'Biology', 'Higher Math'];

const generateVideos = (): Video[] => {
  const videos: Video[] = [];
  
  categories.forEach((category, catIndex) => {
    for (let i = 1; i <= 10; i++) {
      videos.push({
        id: `${category.toLowerCase().replace(' ', '-')}-${i}`,
        title: `${category} - Class ${i}`,
        category,
        thumbnail: 'https://i.postimg.cc/vBfWC1xT/hqdefault.jpg',
        views: `${Math.floor(Math.random() * 50 + 10)}K`,
        embedUrl: 'https://www.youtube.com/embed/ERUzrO0ANJY',
      });
    }
  });
  
  return videos;
};

export const videos = generateVideos();
export { categories };
