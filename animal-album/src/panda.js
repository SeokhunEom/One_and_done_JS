const API_URL = "https://animal-api-two.vercel.app/";

const content = document.querySelector("div.content");

const getData = async (name) => {
  try {
    const res = await fetch(`${API_URL}${name}`);
    const data = await res.json();
    data.photos.forEach((el) => {
      const img = document.createElement("img");
      img.src = el.url;
      img.alt = el.title;
      content.appendChild(img);
    });
  } catch (err) {
    console.log(err);
  }
};

getData("panda");
