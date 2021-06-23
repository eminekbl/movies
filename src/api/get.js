import axios from "axios";

async function get(id) {
  var movieID =""
  if(id) movieID = id
    const config = {
        method: "get",
        headers: {
            "access-control-allow-origin" : "*",
            "Content-type": "application/json; charset=UTF-8"
          },
        baseURL: "https://movies-ek.herokuapp.com",
        url: `/movies/${movieID}`,
      };
    
      try {
        const { data } = await axios(config);
        // console.log(data)
        return data;
    
      } catch (error) {
          console.log(error);
        return error.response.data;
      }
}

export default get
