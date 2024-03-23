interface AvatarProps {
  name?: string;
}

const Avatar: React.FC<AvatarProps> = ({ name }) => {
  return (
    <div className="avatar">
      <div className="w-[90px] mask mask-squircle">
        <img src={`/assets/avatar/${name}.jpg`} />
      </div>
    </div>
  );
};

export default Avatar;
