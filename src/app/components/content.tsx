import Carousel from "./carousel";
import TimeLine from "./timeLine";

interface ContentProps {
  className?: string;
}

const Content: React.FC<ContentProps> = ({ className }) => {
  return (
    <div className={`flex flex-col w-full border-opacity-50 ${className}`}>
      <div className="grid h-200 card bg-base-500 rounded-box place-items-center flex-grow">
        <Carousel />
      </div>
      <div className="h-50 divider">
        ===================== Latest Share =====================
      </div>
      <div className="grid h-200 card rounded-box place-items-center flex-grow">
        <TimeLine />
      </div>
    </div>
  );
};

export default Content;
