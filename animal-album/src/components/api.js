const API_URL = "https://animal-api-two.vercel.app/";

export const request = async (name) => {
  try {
    const res = await fetch(name ? `${API_URL}${name}` : API_URL);
    const data = await res.json();
    return data.photos;
  } catch (err) {
    console.log(err);
  }
};
