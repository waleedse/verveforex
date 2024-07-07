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
        const response = await axiosInstance.post(`add-promotion`, payload, {

            headers: {
                'content-type': false,
                'mime-type': "multipart/form-data",
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response.data;
    } catch (error) { return null; }
};

export const upateWebsitePromotion = async (payload) => {
    const axiosInstance = useAxios()
    try {
        const response = await axiosInstance.post(`update-promotion`, payload, {

            headers: {
                'content-type': false,
                'mime-type': "multipart/form-data",
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response.data;
    } catch (error) { return null; }
};

export const getPromotions = async (status = 'all') => {
    const axiosInstance = useAxios()
    try {
        const response = await axiosInstance.get(`get-all-promotions/${status}`,);
        return response.data;
    } catch (error) { return null; }
};

export const getPromotionById = async (id) => {
    const axiosInstance = useAxios()
    try {
        const response = await axiosInstance.get(`get-promotion-by-id/${id}`);
        return response.data;
    } catch (error) { return null; }
};
export const deletePromotionById = async (id) => {
    const axiosInstance = useAxios()
    try {
        const response = await axiosInstance.delete(`delete-promotion/${id}`);
        return response.data;
    } catch (error) { return null; }
};
export const addWebsiteBroker = async (payload) => {
    const axiosInstance = useAxios()
    try {
        const response = await axiosInstance.post(`add-broker`, payload, {

            headers: {
                'content-type': false,
                'mime-type': "multipart/form-data",
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response.data;
    } catch (error) { return null; }
};

export const upateWebsiteBroker = async (payload) => {
    const axiosInstance = useAxios()
    try {
        const response = await axiosInstance.post(`update-broker`, payload, {

            headers: {
                'content-type': false,
                'mime-type': "multipart/form-data",
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response.data;
    } catch (error) { return null; }
};

export const getBroker = async (status = 'all') => {
    const axiosInstance = useAxios()
    try {
        const response = await axiosInstance.get(`get-all-brokers/${status}`,);
        return response.data;
    } catch (error) { return null; }
};

export const getBrokerById = async (id) => {
    const axiosInstance = useAxios()
    try {
        const response = await axiosInstance.get(`get-broker-by-id/${id}`);
        return response.data;
    } catch (error) { return null; }
};
export const deleteBrokerById = async (id) => {
    const axiosInstance = useAxios()
    try {
        const response = await axiosInstance.delete(`delete-broker/${id}`);
        return response.data;
    } catch (error) { return null; }
};


// Sliders
export const addWebsiteSlider = async (payload) => {
    const axiosInstance = useAxios()
    try {
        const response = await axiosInstance.post(`add-slider`, payload, {

            headers: {
                'content-type': false,
                'mime-type': "multipart/form-data",
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response.data;
    } catch (error) { return null; }
};

export const upateWebsiteSlider = async (payload) => {
    const axiosInstance = useAxios()
    try {
        const response = await axiosInstance.post(`update-slider`, payload, {

            headers: {
                'content-type': false,
                'mime-type': "multipart/form-data",
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response.data;
    } catch (error) { return null; }
};

export const getSlider = async () => {
    const axiosInstance = useAxios()
    try {
        const response = await axiosInstance.get(`get-all-sliders`,);
        return response.data;
    } catch (error) { return null; }
};

export const getSliderById = async (id) => {
    const axiosInstance = useAxios()
    try {
        const response = await axiosInstance.get(`get-slider-by-id/${id}`);
        return response.data;
    } catch (error) { return null; }
};
export const deleteSliderById = async (id) => {
    const axiosInstance = useAxios()
    try {
        const response = await axiosInstance.delete(`delete-slider/${id}`);
        return response.data;
    } catch (error) { return null; }
};


// News
export const addNews = async (payload) => {
    const axiosInstance = useAxios()
    try {
        const response = await axiosInstance.post(`add-news`, payload, {

            headers: {
                'content-type': false,
                'mime-type': "multipart/form-data",
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response.data;
    } catch (error) { return null; }
};

export const updateNews = async (payload) => {
    const axiosInstance = useAxios()
    try {
        const response = await axiosInstance.post(`update-news`, payload, {

            headers: {
                'content-type': false,
                'mime-type': "multipart/form-data",
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response.data;
    } catch (error) { return null; }
};

export const getNews = async () => {
    const axiosInstance = useAxios()
    try {
        const response = await axiosInstance.get(`get-all-news`,);
        return response.data;
    } catch (error) { return null; }
};

export const getNewsById = async (id) => {
    const axiosInstance = useAxios()
    try {
        const response = await axiosInstance.get(`get-news-by-id/${id}`);
        return response.data;
    } catch (error) { return null; }
};
export const getUserById = async (id) => {
    const axiosInstance = useAxios()
    try {
        const response = await axiosInstance.get(`get-user/${id}`);
        return response.data;
    } catch (error) { return null; }
};


export const deleteNewsById = async (id) => {
    const axiosInstance = useAxios()
    try {
        const response = await axiosInstance.delete(`delete-news/${id}`);
        return response.data;
    } catch (error) { return null; }
};

export const getAllClients = async (id) => {
    const axiosInstance = useAxios()
    try {
        const response = await axiosInstance.get(`get-clients`);
        return response.data;
    } catch (error) { return null; }
};

export const getAllIbRequests = async () => {
    const axiosInstance = useAxios()
    try {
        const response = await axiosInstance.get(`get-ib-requests`);
        return response.data;
    } catch (error) { return null; }
};
export const approveIbRequests = async (id) => {
    const axiosInstance = useAxios()
    try {
        const response = await axiosInstance.get(`approve-request/${id}`);
        return response.data;
    } catch (error) { return null; }
};
export const getAllIntroducingBroker = async (id) => {
    const axiosInstance = useAxios()
    try {
        const response = await axiosInstance.get(`get-introducing-brokers`);
        return response.data;
    } catch (error) { return null; }
};
export const declineIbRequests = async (id) => {
    const axiosInstance = useAxios()
    try {
        const response = await axiosInstance.get(`decline-request/${id}`);
        return response.data;
    } catch (error) { return null; }
};

