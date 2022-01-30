const CLIENT_ID = "Iv1.7b694c2191de5796";
const CLIENT_SECRET = "b609dc921d26a128c17275574d564e3354d47326";

export function fetchUser(userName) {
  return fetch(
    `https://api.github.com/users/${userName}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
  );
}

export function fetchRepos(userName) {
  return fetch(
    `https://api.github.com/users/${userName}/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
  );
}

export function fetchRepoLanguage(userName, repoName) {
  return fetch(
    `https://api.github.com/repos/${userName}/${repoName}/languages?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
  );
}
