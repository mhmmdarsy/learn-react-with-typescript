interface ProfileCardProps {
  name: string;
  age: number;
  bio?: string;
}

const ProfileCard = (props: ProfileCardProps) => {
  const { name, age, bio = '-' } = props;

  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Age: {age}</p>

      {/* ternary operator */}
      {bio ? <p>Bio: {bio}</p> : null}
    </div>
  );
};

export default ProfileCard;
