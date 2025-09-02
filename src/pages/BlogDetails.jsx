import React from 'react';
import { useLocation } from 'react-router-dom';
import BlogsComp from '../components/blogs/BlogsComp';

const BlogDetails = () => {
  const location = useLocation();
  const { img, date, title, description, author } = location.state;

  return (
    <div className="min-h-[550px] pt-20 mt-10">
      {/* Blog Image */}
      <div className="h-[500px] overflow-hidden">
        <img
          src={img}
          alt={title}
          className="mx-auto h-[500px] w-full object-cover transition duration-700 hover:scale-110"
        />
      </div>

      {/* Blog Content */}
      <div className="container py-10 md:py-14">
        <p className="text-slate-600 text-sm mb-2">
          Written <span className="font-medium">{author}</span> on <span className="font-medium">{date}</span>
        </p>

        <h1 className="text-2xl md:text-3xl font-semibold mb-4">{title}</h1>

        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
      <div className="container pb-14">
        <BlogsComp />
      </div>
    </div>   
  );
};

export default BlogDetails;
