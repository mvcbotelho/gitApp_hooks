import React from "react";
import Actions from "../Actions";
import Repos from "../Repos";
import Search from "../Search";
import UserInfo from "../UserInfo";

const AppContainer = ({
  userInfo,
  callService,
  changeRepoName,
  repos,
  starred,
  getRepos,
  getStarred
}) => {
  return (
    <div className="container">
      <Search handleChange={changeRepoName} handleKeyUp={callService} />
      {!!userInfo && <UserInfo userInfo={userInfo} />}
      {!!userInfo && <Actions getRepos={getRepos} getStarred={getStarred} />}
      {!!repos.length && (
        <Repos classType="repos" title="Repositórios" repos={repos} />
      )}
      {!!starred.length && (
        <Repos classType="starred" title="Favoritos" repos={starred} />
      )}
    </div>
  );
};

export default AppContainer;
