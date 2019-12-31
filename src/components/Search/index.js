import React from "react";

const Search = ({ handleChange, handleKeyUp }) => {
  return (
    <div className="input-group input-group-lg my-3">
      <input
        className="form-control"
        type="search"
        placeholder="Digite o nome do usuário no github"
        onChange={handleChange}
        onKeyUp={handleKeyUp}
      />
    </div>
  );
};

export default Search;
