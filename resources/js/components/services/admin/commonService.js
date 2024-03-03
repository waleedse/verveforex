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


// Sliders
export const addWebsiteSlider = async (payload) => {
  const axiosInstance = useAxios()
    try {
      const response = await axiosInstance.post(`add-slider`,payload , {

        headers: {
            'content-type': false,
            'mime-type': "multipart/form-data",
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      return response.data;
    } catch (error) { return null;}
};

export const upateWebsiteSlider = async (payload) => {
  const axiosInstance = useAxios()
    try {
      const response = await axiosInstance.post(`update-slider`,payload , {

        headers: {
            'content-type': false,
            'mime-type': "multipart/form-data",
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      return response.data;
    } catch (error) { return null;}
};

export const getSlider = async () => {
  const axiosInstance = useAxios()
    try {
      const response = await axiosInstance.get(`get-all-sliders`,);
      return response.data;
    } catch (error) { return null;}
};

export const getSliderById = async (id) => {
  const axiosInstance = useAxios()
    try {
      const response = await axiosInstance.get(`get-slider-by-id/${id}`);
      return response.data;
    } catch (error) { return null;}
};
export const deleteSliderById = async (id) => {
  const axiosInstance = useAxios()
    try {
      const response = await axiosInstance.delete(`delete-slider/${id}`);
      return response.data;
    } catch (error) { return null;}
};

