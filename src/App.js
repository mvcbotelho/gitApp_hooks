import React, { useState } from "react";
import AppContainer from "./components/AppContainer";
import api from "./services/api";

function App() {
  const [userInfo, setUserInfo] = useState("");
  const [repos, setRepos] = useState([]);
  const [starred, setStarred] = useState([]);
  const [repoName, setRepoName] = useState("");

  const callService = e => {
    const keyCode = e.which || e.keyCode;
    if (keyCode === 13) {
      setRepos([]);
      setStarred([]);
      api
        .get(`${repoName}`)
        .then(res => {
          const { data } = res;
          setUserInfo(data);
        })
        .catch(error => console.log(error));
    }
  };

  const changeRepoName = e => {
    setRepoName(e.target.value);
  };

  const callActions = type => {
    if (type === "repo") {
      setStarred([]);
      api.get(`${repoName}/repos`).then(res => {
        const { data } = res;
        setRepos(data);
      });
    }

    if (type === "starred") {
      setRepos([]);
      api.get(`${repoName}/starred`).then(res => {
        const { data } = res;
        setStarred(data);
      });
    }
  };

  return (
    <AppContainer
      userInfo={userInfo}
      callService={callService}
      changeRepoName={changeRepoName}
      repos={repos}
      starred={starred}
      getRepos={() => callActions("repo")}
      getStarred={() => callActions("starred")}
    />
  );
}

export default App;
