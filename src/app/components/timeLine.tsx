import Avatar from "./avatar";

interface TimeLineProps {
  className?: string;
}

const TimeLine: React.FC<TimeLineProps> = () => {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      <li>
        <div className="timeline-middle">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-start md:text-end mb-10">
          <Avatar name={"1"} />
          <div className="text-lg font-black">Eddie</div>
          Provide 3 months software development outsourcing.
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-middle">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end mb-10">
          <Avatar name={"2"} />
          <div className="text-lg font-black">Morris</div>
          Provide 2 hours professional startup consulting.
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-middle">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-start md:text-end mb-10">
          <Avatar name={"3"} />
          <div className="text-lg font-black">Nick</div>
          Provide 1 semester English conversation.
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-middle">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end mb-10">
          <Avatar name={"4"} />
          <div className="text-lg font-black">Picasso</div>
          Drawing inspiring 1 week.
        </div>
        <hr />
      </li>
    </ul>
  );
};

export default TimeLine;
