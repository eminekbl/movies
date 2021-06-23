import axios from "axios";

async function put(id) {
  const config = {
    method: "delete",
    baseURL: "https://movies-ek.herokuapp.com",
    url: `/movies/${id}`,
    headers: {
        "access-control-allow-origin" : "*",
        "Content-type": "application/json; charset=UTF-8"
      },
  };

  try {
    const { data } = await axios(config);
    console.log(data)
    return null;
  } catch (error) {
    return error.response.data;
  }
}

export default put;