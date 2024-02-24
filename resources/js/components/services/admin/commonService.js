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
export const addWebsitePromotion = async (payload) => {
  const axiosInstance = useAxios()
    try {
      const response = await axiosInstance.post(`add-promotion`,payload);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
};

export const getPromotions = async (payload) => {
  const axiosInstance = useAxios()
    try {
      const response = await axiosInstance.get(`get-promotions`,payload);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
};

