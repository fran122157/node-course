const requestsModule = require("./01.requests");

requestsModule.getNodeRepos()
  .then(repos => console.log(repos.map(repo => `${repo.name}: ${repo.clone_url}`)))
  .catch(err => console.error(err));