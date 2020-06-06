const request = async (endpoint, method = "GET", body = undefined, token) => {
  try {
    const api_call = await fetch(endpoint, {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
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
    throw error;
  }
};

export const getPosts = async () => {
  try {
    const posts = await request("http://localhost:8000/post/list");
    return posts;
  } catch (error) {
    return error;
  }
};

export const getUserData = async (token, username) => {
  try {
    const userData = await request(
      `http://localhost:8000/user/data/${username}`,
      "GET",
      undefined,
      token
    );
    return userData;
  } catch (error) {
    return error;
  }
};

export const publishPost = async (token, post) => {
  try {
    const postRequest = await request(
      "http://localhost:8000/post/add",
      "POST",
      post,
      token
    );
  } catch (error) {
    return error;
  }
};

export const signIn = async (username, password) => {
  try {
    const user = { username, password };
    const signInRequest = await request(
      "http://localhost:8000/auth/signin",
      "POST",
      user
    );
    return signInRequest;
  } catch (error) {
    return error;
  }
};
