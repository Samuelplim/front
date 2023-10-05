import React from "react";
import { TikTokEmbed } from "react-social-media-embed";

interface TikTokProps {
  url: string;
}

const TikTokVideo: React.FC<TikTokProps> = ({ url }) => {
  return (
    <div className="bg-black">
      <TikTokEmbed width={350} url={url} />
    </div>
  );
};

export default TikTokVideo;
