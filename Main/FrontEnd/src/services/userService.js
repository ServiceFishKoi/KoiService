import axios from "../config/axios";

export const CreateUser = async (userData) => {
  const res = axios({
    url: "/auth/register",
    method: "POST",
    userData,
  });
  return res;
};

export const LoginUser = async (userData) => {
  try {
    const result = await axios({
      url: "/users/login",
      method: "POST",
      data: userData,
    });
    return result;
  } catch (error) {
    throw new Error(error.response?.data?.error || error.message || "An unexpected error occurred.");
  }
};


export function GetAllUser() {
  const { data, error, isLoading, mutate } = axios({
    url: "",
    method: "GET",
  });
  return { userData: data, isLoading, isError: error, mutate };
}

export function GetUserById(id) {
  const { userData } = axios({
    url: `/${id}`,
    method: "GET",
    id,
  });
  return { userData };
}

export const DeleteUser = async (id) => {
  try {
    axios({
      url: "",
      method: "DELETE",
      id,
    });
  } catch (err) {
    console.error("Error deleting product:", err);
    throw err;
  }
};

export async function UpdateUser(userData) {
  try {
    const response = axios({
      url: "",
      method: "UPDATE",
      userData,
    });
    const data = await response.json();
    return { ok: response.ok, data };
  } catch (error) {
    console.error("Error in UpdateUser:", error);
    return { ok: false, error };
  }
}

export const changePassword = async (userData) => {
  try {
    const res = axios({
      url: "",
      method: "UPDATE",
      userData,
    });

    if (!res.ok) {
      throw new Error(await res.text());
    }
    return res.json();
  } catch (error) {
    console.error("Error changing password:", error);
    throw error;
  }
};
