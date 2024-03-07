const baseURL = "https://api.github.com/users/";
 
export const getProfile = async (username) => {
  const res = await fetch(baseURL + username);
    if (res.ok) {
        return res.json();
    } else {
        throw new Error(res.statusText);
    }
};