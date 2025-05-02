import React from "react";
import { useLoaderData } from "react-router";
import { FaEye, FaStar, FaShareAlt } from "react-icons/fa";
import { MdOutlineMoreVert } from "react-icons/md";
import { format } from "date-fns";

const Home = () => {
  const allnews = useLoaderData();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dragon News Home</h1>

      {allnews.map((item) => (
        <div key={item.id} className="p-4 rounded-lg shadow-md border mb-6">
          {/* Author and Controls */}
          <div className="flex justify-between p-4 items-center mb-3 bg-gray-200 rounded-md">
            <div className="flex items-center gap-2">
              <img
                src={item.author.img}
                alt="author"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h2 className="font-semibold text-sm">{item.author.name}</h2>
                <p className="text-xs text-gray-500">
                  {format(new Date(item.author.published_date), "yyyy-MM-dd")}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-xl">
              <FaShareAlt />
              <MdOutlineMoreVert />
            </div>
          </div>

          {/* Title */}
          <h3 className="font-bold text-lg text-gray-800 mb-3">{item.title}</h3>

          {/* Image */}
          <img
            src={item.image_url}
            alt={item.title}
            className="w-full h-52 object-cover rounded-md mb-3"
          />

          {/* Details */}
          <p className="text-sm text-gray-700 mb-3">
            {item.details.slice(0, 220)}...
          </p>

          {/* Read More */}
          <a href="#" className="text-orange-500 text-sm font-semibold">
            Read More
          </a>

          {/* Tags */}
          <div className="mt-3 text-xs text-gray-500">
            Tags: {item.tags.join(", ")}
          </div>

          {/* Footer Info: Rating and Views */}
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center text-orange-400 text-sm">
              {[...Array(item.rating.number)].map((_, i) => (
                <FaStar key={i} className="mr-1" />
              ))}
              <span className="text-gray-700 ml-2">{item.rating.number}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <FaEye className="mr-1" />
              {item.total_view}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
