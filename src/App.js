import React, { useState } from "react";
import AppContainer from "./components/AppContainer";
import api from "./services/api";

function App() {
  const [userInfo, setUserInfo] = useState("");
  const [repos, setRepos] = useState([]);
  const [starred, setStarred] = useState([]);
  const [repoName, setRepoName] = useState("");
  const [loading, setLoading] = useState(false);

  const callService = e => {
    const keyCode = e.which || e.keyCode;
    if (keyCode === 13) {
      setLoading(true);
      setRepos([]);
      setStarred([]);
      api
        .get(`${repoName}`)
        .then(res => {
          const { data } = res;
          setUserInfo(data);
        })
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
    }
  };

  const changeRepoName = e => {
    setRepoName(e.target.value);
  };

  const callActions = type => {
    setRepos([]);
    setStarred([]);
    api.get(`${repoName}/${type}`).then(res => {
      const { data } = res;
      type === "repos" ? setRepos(data) : setStarred(data);
    });
  };

  return (
    <AppContainer
      loading={loading}
      userInfo={userInfo}
      callService={callService}
      changeRepoName={changeRepoName}
      repos={repos}
      starred={starred}
      getRepos={() => callActions("repos")}
      getStarred={() => callActions("starred")}
    />
  );
}

export default App;
