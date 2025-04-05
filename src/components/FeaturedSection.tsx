
import React from 'react';
import ContentCard from './ContentCard';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Film, Tv } from 'lucide-react';

// Updated mock data with a wider variety of movies and series
const featuredContent = [
  {
    id: 1,
    title: "Dune: Part Two",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BODYwMTkzYmUtOTBiNy00Yjc4LWJhYzgtM2Y1MTQzYjhiNmNmXkEyXkFqcGdeQXVyNjk5NDA3OTk@._V1_.jpg",
    rating: 8.7,
    year: "2024",
    type: "movie" as const,
    genres: ["Sci-Fi", "Adventure"]
  },
  {
    id: 2,
    title: "Succession",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BNGZlOTllMmMtZjc1Mi00YzQ4LWJlODgtYjUwOGZkMDEyN2QxXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
    rating: 8.9,
    year: "2018-2023",
    type: "series" as const,
    genres: ["Drama", "Comedy"]
  },
  {
    id: 3,
    title: "Oppenheimer",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg",
    rating: 8.5,
    year: "2023",
    type: "movie" as const,
    genres: ["Biography", "Drama"]
  },
  {
    id: 4,
    title: "The Bear",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BZGRhZWY4NzQtYzA0YS00OGI3LWIxNTEtZjVmM2Q2MmJiZjcyXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
    rating: 8.6,
    year: "2022-",
    type: "series" as const,
    genres: ["Comedy", "Drama"]
  },
  {
    id: 5,
    title: "Poor Things",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BNGIyYWMzNjctNGQ1Yy00MTcwLWJmMWYtNzVlY2Q2ZTc5OWUyXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
    rating: 8.1,
    year: "2023",
    type: "movie" as const,
    genres: ["Romance", "Sci-Fi"]
  }
];

// Additional content sets
const trendingContent = [
  {
    id: 6,
    title: "Killers of the Flower Moon",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BNjQwOGIyZDAtNWI1Yi00ZTRmLTk2ZTctOTI1ZmZkOTYzYjljXkEyXkFqcGdeQXVyMTU0Mzc2ODg3._V1_.jpg",
    rating: 7.7,
    year: "2023",
    type: "movie" as const,
    genres: ["Crime", "Drama"]
  },
  {
    id: 7,
    title: "The Last of Us",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BZGUzYTI3M2EtZmM0Yy00NGUyLWI4ODEtN2Q3ZGJlYzhhZjU3XkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_FMjpg_UX1000_.jpg",
    rating: 8.8,
    year: "2023-",
    type: "series" as const,
    genres: ["Action", "Adventure"]
  },
  {
    id: 8,
    title: "Avatar: The Way of Water",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg",
    rating: 7.6,
    year: "2022",
    type: "movie" as const,
    genres: ["Action", "Sci-Fi"]
  },
  {
    id: 9,
    title: "Wednesday",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BM2ZmMjEyZmYtOGM4YS00YTNhLWE3ZDMtNzQxM2RhNjBlODIyXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg",
    rating: 8.1,
    year: "2022-",
    type: "series" as const,
    genres: ["Comedy", "Fantasy"]
  },
  {
    id: 10,
    title: "The Batman",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg",
    rating: 7.8,
    year: "2022",
    type: "movie" as const,
    genres: ["Action", "Crime"]
  }
];

const upcomingContent = [
  {
    id: 11,
    title: "Gladiator II",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BNzlhNGI3NGUtNGM1ZS00NzI4LWIyYzUtOGZhNTdhZWQ0MWZkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
    rating: 9.2,
    year: "2024",
    type: "movie" as const,
    genres: ["Action", "Drama"]
  },
  {
    id: 12,
    title: "Joker: Folie à Deux",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BOGE4ZWQ0Y2YtNDY0OC00Zjk0LThjZDgtZmFmY2QyYjU4NDI4XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
    rating: 8.9,
    year: "2024",
    type: "movie" as const,
    genres: ["Crime", "Drama"]
  },
  {
    id: 13,
    title: "Kingdom of the Planet of the Apes",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BOTE0MDAyNzQtMzcwYS00ZGYwLWJjM2ItNTg5NDgwZTZjZmEyXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
    rating: 8.5,
    year: "2024",
    type: "movie" as const,
    genres: ["Action", "Sci-Fi"]
  },
  {
    id: 14,
    title: "Furiosa: A Mad Max Saga",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BNDFlOTdhODYtOGU3Ni00MjY1LWJhZDUtOTVmZmQ2ODYwZDA5XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
    rating: 8.7,
    year: "2024",
    type: "movie" as const,
    genres: ["Action", "Adventure"]
  },
  {
    id: 15,
    title: "A Quiet Place: Day One",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMTc4MzA1NjI0OF5BMl5BanBnXkFtZTgwNDUyMDQ4ODE@._V1_.jpg",
    rating: 8.3,
    year: "2024",
    type: "movie" as const,
    genres: ["Horror", "Sci-Fi"]
  }
];

interface SectionProps {
  title: string;
  content: typeof featuredContent;
  icon?: React.ReactNode;
}

const ContentSection: React.FC<SectionProps> = ({ title, content, icon }) => {
  return (
    <section className="py-8 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex items-center mb-6">
          {icon && <div className="mr-2">{icon}</div>}
          <h2 className="text-xl md:text-2xl font-semibold">{title}</h2>
        </div>
        
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {content.map((item) => (
              <CarouselItem key={item.id} className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                <ContentCard
                  title={item.title}
                  imageUrl={item.imageUrl}
                  rating={item.rating}
                  year={item.year}
                  type={item.type}
                  genres={item.genres}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-end gap-2 mt-4">
            <CarouselPrevious className="relative -left-0 h-8 w-8 rounded-full bg-accent-purple/50 hover:bg-accent-purple/80" />
            <CarouselNext className="relative -right-0 h-8 w-8 rounded-full bg-accent-purple/50 hover:bg-accent-purple/80" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

const FeaturedSection = () => {
  return (
    <div className="space-y-10">
      <ContentSection 
        title="Trending Now" 
        content={trendingContent} 
        icon={<Film className="h-5 w-5 text-accent-purple" />} 
      />
      <ContentSection 
        title="Featured Movies" 
        content={featuredContent}
        icon={<Film className="h-5 w-5 text-accent-gold" />} 
      />
      <ContentSection 
        title="Coming Soon" 
        content={upcomingContent}
        icon={<Tv className="h-5 w-5 text-accent-purple" />} 
      />
    </div>
  );
};

export default FeaturedSection;
