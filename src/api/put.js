import axios from "axios";

async function put(data,id) {
  const config = {
    method: "put",
    baseURL: "https://movies-ek.herokuapp.com",
    url: `/movies/${id}`,
    headers: {
        "access-control-allow-origin" : "*",
        "Content-type": "application/json; charset=UTF-8"
      },
    data: data,
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