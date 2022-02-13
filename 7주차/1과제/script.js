const API_URL = "https://jsonplaceholder.typicode.com/users";

const ul = document.querySelector(".user-list");

fetch(API_URL).then((response) => {
  response.json().then((datas) => {
    const html = [];

    datas.map((data) => {
      const name = data.name;
      const email = data.email;
      const phone = data.phone;

      html.push(
        `<li><b>name</b> ${name}<br>
        <b>email</b> ${email}<br>
        <b>phone</b> ${phone}</li><br>`
      );
    });
    ul.innerHTML = html.join("");
  });
});
