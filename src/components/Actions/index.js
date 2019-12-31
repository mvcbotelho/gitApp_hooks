import React from "react";

const Actions = ({ getRepos, getStarred }) => {
  return (
    <div className="my-3">
      <button
        type="button"
        className="btn btn-outline-primary btn-lg mr-3"
        onClick={getRepos}
      >
        Ver repositórios
      </button>
      <button
        type="button"
        className="btn btn-outline-primary btn-lg"
        onClick={getStarred}
      >
        Ver favoritos
      </button>
    </div>
  );
};

export default Actions;
