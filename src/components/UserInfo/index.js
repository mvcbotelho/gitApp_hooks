import React from "react";

const UserInfo = ({ userInfo }) => {
  return (
    <div className="row">
      <div className="col-4">
        <img
          className="img-fluid"
          alt="Avatar do github"
          src={userInfo.avatar_url}
        />
      </div>
      <div className="col-8">
        <h1 className="user-name">
          <a href={userInfo.html_url}>{userInfo.name}</a>
        </h1>
        <p>{userInfo.bio}</p>

        <ul className="list-group">
          <li className="list-group-item">{`Repositórios: ${userInfo.public_repos}`}</li>
          <li className="list-group-item">{`Seguindo: ${userInfo.following}`}</li>
          <li className="list-group-item">{`Seguidores: ${userInfo.followers}`}</li>
        </ul>
      </div>
    </div>
  );
};

export default UserInfo;
