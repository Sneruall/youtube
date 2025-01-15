import { storyblokEditable } from "@storyblok/react";

const Youtube = ({ blok }) => {
  // Function to extract video ID from YouTube URL
  const getVideoId = (url) => {
    if (url.startsWith("https://www.youtube.com/watch?v=")) {
      return url.split("=")[1];
    } else if (url.startsWith("https://youtu.be/")) {
      return url.split("/")[3];
    }
    return null; // Return null if not a valid URL
  };

  const videoId = getVideoId(blok.video_url);

  return (
    <div {...storyblokEditable(blok)}>
      {videoId && (
        <iframe
          width="100%"
          height="480"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
      {!videoId && <p>Invalid YouTube URL</p>}
    </div>
  );
};

export default Youtube;
