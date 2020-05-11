const request = async (endpoint) => {
  try {
    const api_call = await fetch(endpoint);
    if (!api_call.ok) {
      throw api_call.status;
    }
    const data = await api_call.text();
    console.log(data);
    return data;
  } catch (error) {
    return error;
  }
};

export const getPosts = async () => {
  try {
    const posts = require("../mock/posts.json");
    return posts;
  } catch (error) {
    return error;
  }
};
