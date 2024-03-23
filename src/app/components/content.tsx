import Carousel from "./carousel";
import TimeLine from "./timeLine";

interface ContentProps {
  className?: string;
}

const Content: React.FC<ContentProps> = ({ className }) => {
  return (
    <div className={`flex flex-col w-full border-opacity-50 ${className}`}>
      <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
        <Carousel />
      </div>
      <div className="divider">
        =============================== Latest Share
        ===============================
      </div>
      <div className="grid h-20 card rounded-box place-items-center">
        <TimeLine />
      </div>
    </div>
  );
};

export default Content;
