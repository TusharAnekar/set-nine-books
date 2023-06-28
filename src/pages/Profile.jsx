import { useContext } from "react";
import { DataContext } from "../contexts/data-context";

export function Profile() {
  const { user } = useContext(DataContext);
  return (
    <>
      <h2>Profile</h2>
      <div className="profile-container">
        <img src={user.img} alt={`${user.name} profile`} />
        <p>
          <strong>Name: </strong>
          {user.name}
        </p>
        <p>
          <strong>Bio: </strong>
          {user.bio}
        </p>
      </div>
    </>
  );
}
