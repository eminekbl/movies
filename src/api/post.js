import axios from "axios";

async function post(data) {
  const config = {
    method: "post",
    baseURL: "https://movies-ek.herokuapp.com",
    url: "/movies",
    data: data,
  };

  try {
    const { data } = await axios(config);
    console.log(data)
    return null;
  } catch (error) {
    console.log(error)
    return error;
  }
}

export default post;
