import React from 'react';
import BlogCards from './BlogCards';
import Img1 from '../../assets/taj mahal.jpg';
import Img2 from '../../assets/US.webp';
import Img3 from '../../assets/japan.jpg';


const BlogsData = [
  {
    id: 1,
    img: Img1,
    title: "Top 10 Best Places To Visit In India",
    description: "India is the seventh-largest country in the world and the second-most populous nation, known for its incredible diversity in culture, traditions, landscapes, and history. From the snow-capped Himalayas in the north to the golden beaches in the south, from the deserts of Rajasthan to the lush backwaters of Kerala, India offers something unique at every corner.It is a land where ancient traditions meet modern innovation — home to world-famous monuments like the Taj Mahal, spiritual centers like Varanasi, vibrant festivals like Diwali and Holi, and cuisines that vary with every region.India is not just a country, it’s an experience of colors, flavors, spirituality, and warmth that leaves every traveler enchanted.",
    author: "by John Doe",
    date: "April, 2025",
  },
  {
    id: 2,
    img: Img2,
    title: "Top 10 Best Places To Visit In US",
    description: "The United States is the third-largest country in the world, known for its cultural diversity, global influence, and stunning natural wonders. From the skyscrapers of New York City to the entertainment hub of Los Angeles, from the breathtaking Grand Canyon to the beaches of Hawaii, the US offers travelers endless experiences.It’s a land where innovation meets tradition — famous for its Hollywood movies, music, technology, and world-class universities. With 50 unique states, each offering its own culture, cuisine, and attractions, the US is truly a melting pot of people, ideas, and landscapes.",
    author: "by John Doe",
    date: "April, 2025",
  },
  {
    id: 3,
    img: Img3,
    title: "Top 10 Best Places To Visit In Japan",
    description: "Japan is an island nation in East Asia, known for its unique blend of ancient traditions and modern innovation. From the serene temples of Kyoto and majestic Mount Fuji, to the bustling neon-lit streets of Tokyo, Japan offers a perfect balance of history, culture, and technology.Famous for its cherry blossoms (sakura), traditional tea ceremonies, sushi cuisine, samurai heritage, and futuristic robotics, Japan is a place where the past and future harmoniously coexist. Its efficient transport, beautiful landscapes, and warm hospitality make it one of the world’s most fascinating destinations.",
    author: "by John Doe",
    date: "April, 2025",
  },

];

const BlogsComp = () => {
  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-delay="400"
        className="container mx-auto px-2 sm:px-6 lg:px-8"
      >
        {/* Section Title */}
        <h1 className="my-8 border-l-8 border-[#3c5cdc] py-2 pl-3 text-3xl font-bold ml-4">
          Our Latest Blogs
        </h1>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-3 gap-4">
          {BlogsData.map((item, index) => (
            <BlogCards key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsComp;
