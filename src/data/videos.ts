export interface Video {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  views: string;
  embedUrl: string;
  pdfUrl: string;
}

const categories = ['Bangla', 'English', 'Physics', 'Chemistry', 'Biology', 'Higher Math'];

const demoEmbedUrls = [
  'https://www.youtube.com/embed/ERUzrO0ANJY',
  'https://www.youtube.com/embed/dQw4w9WgXcQ',
];

const demoThumbnails = [
  'https://i.postimg.cc/vBfWC1xT/hqdefault.jpg',
  'https://i.postimg.cc/D0qNJ2g8/maxresdefault.jpg',
];

const demoPdfUrl = 'https://drive.google.com/file/d/1example/view';

const generateVideos = (): Video[] => {
  const videos: Video[] = [];

  categories.forEach((category, catIndex) => {
    for (let i = 1; i <= 10; i++) {
      videos.push({
        id: `${category.toLowerCase().replace(' ', '-')}-${i}`,
        title: `${category} - Class ${i}`,
        category,
        thumbnail: demoThumbnails[i % 2],
        views: `${Math.floor(Math.random() * 50 + 10)}K`,
        embedUrl: demoEmbedUrls[i % 2],
        pdfUrl: demoPdfUrl,
      });
    }
  });

  return videos;
};

export const videos = generateVideos();
export { categories };
