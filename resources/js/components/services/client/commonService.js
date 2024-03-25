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
export const resetPasswordSendEmail = async (payload) => {
  const axiosInstance = useAxios()
    try {
      const response = await axiosInstance.post(`password/email`, payload);
      return response.data;
    } catch (error) {
      return error;
    }
};
export const ResendVerificationEmail = async (email) => {
  const axiosInstance = useAxios()
    try {
      const response = await axiosInstance.post(`resend-verification-email/${email}`);
      return response.data;
    } catch (error) {
      return error;
    }
};




