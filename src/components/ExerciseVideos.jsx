import { Link } from "react-router-dom";

import Loader from './Loader'

const ExerciseVideos = ({youtubeVideos, name}) => {
  if (!youtubeVideos.length) return <Loader />
  
  return (
    <div className="bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Watch <span className="text-red-600">{name}</span> exercise videos
        </h1>

        <div className="overflow-x-auto pb-4">
          <div className="flex space-x-4" style={{ minWidth: "min-content" }}>
            {youtubeVideos?.map((item, index) => (
              <Link 
                key={index} 
                to={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex-shrink-0"
                style={{ width: "280px" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={item.video.thumbnails[0].url}
                  alt={item.video.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">{item.video.title}</h2>
                  <p className="text-sm text-gray-600">{item.video.channelName}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseVideos;
