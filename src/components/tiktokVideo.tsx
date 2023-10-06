import React from "react";

interface TikTokProps {
  url: string;
}

const TikTokVideo: React.FC<TikTokProps> = ({ url }) => {
  const match = url.match(/@([^/]+)/) || ["", ""];
  return (
    <div className="bg-dark-1000 p-1 rounded-sm flex w-fit">
      <a href={url} target="_blank" className="flex">
        @{match[1]}
      </a>
    </div>
  );
};

export default TikTokVideo;
