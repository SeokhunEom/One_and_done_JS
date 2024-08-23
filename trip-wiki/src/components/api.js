const API_URL = "https://trip-wiki-api.vercel.app/";

export const request = async (startIndex, region, sortBy, searchWord) => {
  try {
    const url = `${API_URL}${
      region && region !== "All" ? region : ""
    }?start=${startIndex}${sortBy ? `&sort=${sortBy}` : ""}${
      searchWord ? `&search=${searchWord}` : ""
    }`;

    const response = await fetch(url);
    if (response.ok) {
      return await response.json();
    }
  } catch (e) {
    console.error(e);
  }
};

export const requestCityDetail = async (cityId) => {
  try {
    const response = await fetch(`${API_URL}city/${cityId}`);
    if (response) {
      return await response.json();
    }
  } catch (e) {
    console.log(e);
  }
};
