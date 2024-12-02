import Image from "next/image";
import videoIntro from "@/assets/video-intro.png";

const VideoIntro: React.FC = () => {
  return (
    <div className="pt-[52px]">
      <Image src={videoIntro} className="w-full h-[768px]" alt="video" />
    </div>
  );
};
export default VideoIntro;
