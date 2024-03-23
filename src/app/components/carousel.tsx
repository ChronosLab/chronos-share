interface CarouselProps {
  className?: string;
}

const Carousel: React.FC<CarouselProps> = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img src="/assets/taipei.jpeg" className="mx-auto h-[350px]" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src="/assets/new-york.jpeg" className="mx-auto h-[350px]" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src="/assets/japan.jpeg" className="mx-auto h-[350px]" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
      </div>
    </div>
  );
};

export default Carousel;
