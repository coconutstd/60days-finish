import { fetchRepoLanguage, fetchRepos, fetchUser } from "./fetch.js";
import { $ } from "./utils.js";

google.charts.load("current", { packages: ["corechart"] });

const USER_NAME = "coconutstd";

function getDataTable(object) {
  return Object.entries(object);
}

function convertNullableText(text) {
  return text || "빈 내용";
}

function attachUserLink() {
  $(".overview").href = `https://github.com/${USER_NAME}`;
  $(".repositories").href = `https://github.com/${USER_NAME}?tab=repositories`;
  $(".projects").href = `https://github.com/${USER_NAME}?tab=projects`;
}

function renderUserInfo(userInfo) {
  console.log(userInfo);
  $(".profile img").src = userInfo.avatar_url;
  $(".nickname").innerText = USER_NAME;
  $(".name").innerText = userInfo.name;
  $(".words").innerText = userInfo.bio;
  $(".followers").innerText = userInfo.followers;
  $(".following").innerText = userInfo.following;
  $(".location").innerText = convertNullableText(userInfo.location);
  $(".email").innerText = convertNullableText(userInfo.email);
}

function renderLanguageChart(dataTable) {
  if (!dataTable) {
    return;
  }

  const dataTableHeader = ["언어", "작성된 코드 라인"];

  const data = google.visualization.arrayToDataTable([
    dataTableHeader,
    ...dataTable,
  ]);

  const options = {
    title: "",
    pieHole: 0.4,
  };

  const chart = new google.visualization.PieChart(
    document.querySelector("#language-chart")
  );
  chart.draw(data, options);
}

function renderRepoList(repos) {
  repos.json().then((repo) => {
    repo.forEach((r) => {
      const html = document.createElement("div");
      html.classList.add("repository");
      html.innerHTML = `
      <span class="title">${r.name}</span>
      <span class="public">${r.visibility}</span>
    `;
      $(".repositories .wrapper").appendChild(html);
    });
  });
}

function renderPortfolio() {
  fetchRepos(USER_NAME).then((repos) => renderRepoList(repos));
  fetchUser(USER_NAME).then((response) =>
    response.json().then((userinfo) => {
      renderUserInfo(userinfo);
    })
  );
  const totalLanguage = {};

  const languageDataTable = getDataTable(totalLanguage);
  renderLanguageChart(languageDataTable);
}
attachUserLink();
renderPortfolio();
