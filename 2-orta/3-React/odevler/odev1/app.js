import axios from "axios";

const getData = (user_id) => {
  return new Promise(async (resolve, reject) => {
    const { data: users } = await axios(
      "https://jsonplaceholder.typicode.com/users/" + user_id
    );
    
    const { data: posts } = await axios(
      "https://jsonplaceholder.typicode.com/posts?userId=" + user_id
    );

    resolve({ users, posts });
  });
};

export default getData;
