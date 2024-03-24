import useAxios from "../../Utils/hooks/useAxios";

export const createUser = async (payload) => {
  const axiosInstance = useAxios()
    try {
      const response = await axiosInstance.post(`register`, payload);
      return response.data;
    } catch (error) {
      return error;
    }
};




