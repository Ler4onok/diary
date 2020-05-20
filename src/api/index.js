const request = async (endpoint, method = "GET", body = undefined) => {
  try {
    const api_call = await fetch(endpoint, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      ...(body && { body: JSON.stringify(body) }),
    });
    if (!api_call.ok) {
      throw api_call.status;
    }
    const data = await api_call.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const getPosts = async () => {
  try {
    const posts = request("http://localhost:8000/post/list");
    return posts;
  } catch (error) {
    return error;
  }
};

export const publishPost = async (post) => {
  try {
    const postRequest = await request("http://localhost:8000/post/add", "POST", post);
  } catch (error) {
    return error;
  }
};
