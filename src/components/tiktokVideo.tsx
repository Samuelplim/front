import React from "react";

interface TikTokProps {
  url: string;
}

const TikTokVideo: React.FC<TikTokProps> = ({ url }) => {
  const match = url.match(/@([^/]+)/) || ["", ""];
  return (
    <div className="bg-black p-2">
      <a href={url} target="_blank">
        @{match[1]}
      </a>
    </div>
  );
};

export default TikTokVideo;
