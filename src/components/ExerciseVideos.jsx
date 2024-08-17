import { Link } from "react-router-dom";

const ExerciseVideos = () => {
  const videos = [
    {
      video: {
        channelId: "UCxp3qtgSppByDoESzEdkr8Q",
        channelName: "Bulk Supplements DIrect",
        description:
          "In this video, we show you how to perform a Dumbbell Pullover as a ",
        lengthText: "0:18",
        publishedTimeText: "2 years ago",
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/QZ_UC5SjvK4/hq720.jpg?sqp=-oaymwE9COgCEMoBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4JgALQBYoCDAgAEAEYWyBbKFswDw==&rs=AOn4CLA9rYDBO5tzYmHFjt8gj0AWIHksVw",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/QZ_UC5SjvK4/hq720.jpg?sqp=-oaymwExCNAFEJQDSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYWyBbKFswDw==&rs=AOn4CLC47qz173zJ6yEagH2kQfWyZO_aEg",
            width: 720,
          },
        ],
        title: "How To Do Dumbbell Pullovers - Lat Pulldown Alternative",
        videoId: "QZ_UC5SjvK4",
        viewCountText: "24,087 views",
      },
    },
    {
      video: {
        channelId: "UCzqQnibrUiju9Zsqcfh-bpg",
        channelName: "Men’s Health Muscle",
        description:
          "Of all the machines you'll find on the gym floor, few are as effective and useful for building back muscle than the ",
        lengthText: "9:25",
        publishedTimeText: "4 months ago",
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/tXzSOLwJ3UE/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDKyKKmOYBfYIjyrXNpm55_AXiRXw",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/tXzSOLwJ3UE/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDxJ5BkCyQXk6Q8U-cYDOcXCKAdNA",
            width: 720,
          },
        ],
        title:
          "No Lat Pulldown Machine? Try THESE Alternatives | Path to Gains | Men's Health Muscle",
        videoId: "tXzSOLwJ3UE",
        viewCountText: "4,552 views",
      },
    },
    {
      video: {
        channelId: "UCyZMOs_IPZ1OYOkwXB6z20A",
        channelName: "Christy Senay | Unchained Strength",
        lengthText: "0:18",
        publishedTimeText: "2 years ago",
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/xU0YAE_fBMk/hq720.jpg?sqp=-oaymwE9COgCEMoBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4JgALQBYoCDAgAEAEYZSBlKGUwDw==&rs=AOn4CLCNynKfr9IKe3od8v68r56TDDdszw",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/xU0YAE_fBMk/hq720.jpg?sqp=-oaymwExCNAFEJQDSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYZSBlKGUwDw==&rs=AOn4CLDOKClbNyOnJmSGLAYxkQCQ8iE_uA",
            width: 720,
          },
        ],
        title: "Alternating Lat Pulldown",
        videoId: "xU0YAE_fBMk",
        viewCountText: "1,661 views",
      },
    },
  ];
  return (
    <div className="">
      <h1 className="">
        Watch <span className="">'NAME'</span> exercise videos
      </h1>

      <div className="">
        {videos?.map((item, index) => (
          <Link key={index} to={`https://www.youtube.com/watch?v=$${item.video.videoId}`}>
            <img
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
              className="h-40 w-40"
            />
            <div className="">
              <h2 className="">{item.video.title}</h2>
              <p className="">{item.video.channelName}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExerciseVideos;
