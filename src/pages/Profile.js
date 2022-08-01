import React, { useState, useEffect } from "react";
import Link from "../components/Link";
import List from "../components/List";
import "./Profile.css";

const Profile = ({ userName }) => {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState({});

  const items = [
    {
      field: "html_url",
      value: <Link url={profile.html_url} title={profile.html_url} />,
    },
    {
      field: "repos_url",
      value: <Link url={profile.repos_url} title={profile.repos_url} />,
    },
    { field: "name", value: profile.name },
    { field: "company", value: profile.company },
    { field: "location", value: profile.location },
    { field: "email", value: profile.email },
    { field: "bio", value: profile.bio },
  ];

  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await fetch(`https://api.github.com/users/${userName}`);
        const result = await data.json();
        if (result) {
          setProfile(result);
          setLoading(false);
        }
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [userName]);
  return (
    <div className="Profile-container">
      <h2>About me</h2>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <div>
          <img
            className="Profile-avatar"
            src={profile.avatar_url}
            alt="profile.name"
          />
          <List items={items} />
        </div>
      )}
    </div>
  );
};

export default Profile;
