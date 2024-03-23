import Carousel from "./carousel";
import TimeLine from "./timeLine";

interface ContentProps {
  className?: string;
}

const Content: React.FC<ContentProps> = ({ className }) => {
  return (
    <div className={`flex flex-col w-full border-opacity-50 ${className}`}>
      <div className="grid h-[310px] card bg-base-500 rounded-box place-items-center flex-grow">
        <Carousel />
      </div>
      <div className="h-50 divider">
        <p className="text-2xl">~~  Latest Share  ~~</p>
      </div>
      <div className="grid h-[750px] card rounded-box place-items-center flex-grow">
        <TimeLine />
      </div>
    </div>
  );
};

export default Content;
