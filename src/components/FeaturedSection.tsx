
import React from 'react';
import ContentCard from './ContentCard';

// Mock data for demonstration
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

interface SectionProps {
  title: string;
  content: typeof featuredContent;
}

const ContentSection: React.FC<SectionProps> = ({ title, content }) => {
  return (
    <section className="py-10 px-4 md:px-6">
      <div className="container mx-auto">
        <h2 className="text-xl md:text-2xl font-semibold mb-6">{title}</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {content.map((item) => (
            <ContentCard
              key={item.id}
              title={item.title}
              imageUrl={item.imageUrl}
              rating={item.rating}
              year={item.year}
              type={item.type}
              genres={item.genres}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturedSection = () => {
  return (
    <div className="space-y-12">
      <ContentSection title="Trending Now" content={featuredContent} />
      <ContentSection title="Recommended for You" content={[...featuredContent].reverse()} />
    </div>
  );
};

export default FeaturedSection;
