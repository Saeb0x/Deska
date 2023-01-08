import './Profile.css'

const Profile = () => {
  return (
    <div className="card">
    <div className="img">
      <img src={localStorage.getItem("profilePic")} alt="profile-pic"/>
    </div>
    <div className="infos">
      <div className="name">
        <h2>{localStorage.getItem("name")}</h2>
        <h4>{localStorage.getItem("email")}</h4>
      </div>
    </div>
  </div>
  );
}

export default Profile;
