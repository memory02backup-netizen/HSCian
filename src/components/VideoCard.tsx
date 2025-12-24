import { Link } from 'react-router-dom';
import { Video } from '@/data/videos';

interface VideoCardProps {
  video: Video;
}

const VideoCard = ({ video }: VideoCardProps) => {
  return (
    <Link to={`/watch/${video.id}`} className="video-card block">
      <div className="relative aspect-video bg-muted overflow-hidden">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      
      <div className="p-3">
        <h3 className="text-foreground font-medium text-sm line-clamp-2 mb-1">
          {video.title}
        </h3>
        <div className="flex items-center gap-2 text-muted-foreground text-xs">
          <span>HSCian</span>
          <span>•</span>
          <span>{video.views} views</span>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
