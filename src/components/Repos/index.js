import React from "react";

const Repos = ({ classType, title, repos }) => {
  return (
    <div className={classType}>
      <h2>{title}</h2>
      <ul className="list-group list-group-flush">
        {repos.map(repo => (
          <li className="list-group-item" key={repo.id}>
            <a href="repo.link">{repo.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Repos;
