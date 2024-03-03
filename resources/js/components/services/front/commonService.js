import useAxios from "../../Utils/hooks/useAxios";

export const getCountries = async () => {
  const axiosInstance = useAxios()
    try {
      const response = await axiosInstance.get(`get-countries`);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
};

export const getPromotions = async () => {
  const axiosInstance = useAxios()
    try {
      const response = await axiosInstance.get(`get-promotions`,);
      return response.data;
    } catch (error) { return null;}
};
export const getHomeSLiders = async () => {
  const axiosInstance = useAxios()
    try {
      const response = await axiosInstance.get(`get-home-slider`,);
      return response.data;
    } catch (error) { return null;}
};


