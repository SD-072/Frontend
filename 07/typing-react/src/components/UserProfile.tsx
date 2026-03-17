export type UserData = {
  username: string;
  image: string;
  info?: string;
  status: 'active' | 'paused' | 'inactive';
};

const UserProfile = ({ username, image, info, status }: UserData) => {
  return (
    <article>
      <h2>{username}</h2>
      <img src={image} alt='User' />
      <p>{info}</p>
      <p>Status: {status}</p>
    </article>
  );
};
export default UserProfile;
