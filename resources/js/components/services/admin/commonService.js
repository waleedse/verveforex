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
      const response = await axiosInstance.post(`add-promotion`,payload , {

        headers: {
            'content-type': false,
            'mime-type': "multipart/form-data",
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      return response.data;
    } catch (error) { return null;}
};

export const upateWebsitePromotion = async (payload) => {
  const axiosInstance = useAxios()
    try {
      const response = await axiosInstance.post(`update-promotion`,payload , {

        headers: {
            'content-type': false,
            'mime-type': "multipart/form-data",
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      return response.data;
    } catch (error) { return null;}
};

export const getPromotions = async (status = 'all') => {
  const axiosInstance = useAxios()
    try {
      const response = await axiosInstance.get(`get-all-promotions/${status}`,);
      return response.data;
    } catch (error) { return null;}
};

export const getPromotionById = async (id) => {
  const axiosInstance = useAxios()
    try {
      const response = await axiosInstance.get(`get-promotion-by-id/${id}`);
      return response.data;
    } catch (error) { return null;}
};
export const deletePromotionById = async (id) => {
  const axiosInstance = useAxios()
    try {
      const response = await axiosInstance.delete(`delete-promotion/${id}`);
      return response.data;
    } catch (error) { return null;}
};

