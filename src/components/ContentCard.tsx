
import React from 'react';
import { Star, PlayCircle } from 'lucide-react';

interface ContentCardProps {
  title: string;
  imageUrl: string;
  rating: number;
  year: string;
  type: 'movie' | 'series';
  genres: string[];
}

const ContentCard: React.FC<ContentCardProps> = ({
  title,
  imageUrl,
  rating,
  year,
  type,
  genres
}) => {
  return (
    <div className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:-translate-y-2">
      <div className="aspect-[2/3] w-full overflow-hidden rounded-lg">
        <img 
          src={imageUrl} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80"></div>
        
        <div className="absolute top-2 right-2 bg-black/50 rounded-full p-1 backdrop-blur-sm">
          <div className="flex items-center px-2 py-1">
            <Star className="h-3 w-3 text-yellow-400 mr-1" fill="#FBBF24" />
            <span className="text-xs font-medium">{rating.toFixed(1)}</span>
          </div>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="rounded-full bg-accent-purple/90 p-2 backdrop-blur-sm cursor-pointer">
            <PlayCircle className="h-10 w-10 text-white" />
          </div>
        </div>
      </div>
      
      <div className="mt-3 space-y-1 px-1">
        <h3 className="line-clamp-1 text-sm font-medium">{title}</h3>
        <div className="flex items-center gap-2 text-xs text-foreground/70">
          <span>{year}</span>
          <span className="h-1 w-1 rounded-full bg-foreground/70"></span>
          <span className="capitalize">{type}</span>
        </div>
        <div className="flex flex-wrap gap-1">
          {genres.slice(0, 2).map((genre, index) => (
            <span key={index} className="text-[10px] px-1.5 py-0.5 bg-accent-purple/20 rounded-full">
              {genre}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
