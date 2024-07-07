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
    } catch (error) { return null; }
};
export const getHomeSLiders = async () => {
    const axiosInstance = useAxios()
    try {
        const response = await axiosInstance.get(`get-home-slider`,);
        return response.data;
    } catch (error) { return null; }
};
export const getFeatureNews = async () => {
    const axiosInstance = useAxios()
    try {
        const response = await axiosInstance.get(`get-feature-news`,);
        return response.data;
    } catch (error) { return null; }
};
export const getSingleNewsBySlug = async (slug) => {
    const axiosInstance = useAxios()
    try {
        const response = await axiosInstance.get(`get-news-by-slug/${slug}`,);
        return response.data;
    } catch (error) { return null; }
};
export const getAllNews = async (slug) => {
    const axiosInstance = useAxios()
    try {
        const response = await axiosInstance.get(`get-news`,);
        return response.data;
    } catch (error) { return null; }
};
export const getAllBrokers = async () => {
    const axiosInstance = useAxios()
    try {
        const response = await axiosInstance.get(`get-all-brokers/1`,);
        return response.data;
    } catch (error) { return null; }
};

export const getIbWithRefferals = async (id) => {
    const axiosInstance = useAxios()
    try {
        const response = await axiosInstance.get(`get-ib-with-refferals/${id}`,);
        return response.data;
    } catch (error) { return null; }
};




