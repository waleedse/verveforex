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

export const getClientPromotions = async () => {
    const axiosInstance = useAxios()
    try {
        const response = await axiosInstance.get(`get-promotions`,);
        return response.data;
    } catch (error) { return null; }
};
export const getClientBrokers = async () => {
    const axiosInstance = useAxios()
    try {
        const response = await axiosInstance.get(`get-client-brokers`,);
        return response.data;
    } catch (error) { return null; }
};
export const getClientBrokerLinks = async (id = '') => {
    const axiosInstance = useAxios()
    try {
        const response = await axiosInstance.get(`get-client-broker-links/${id}`,);
        return response.data;
    } catch (error) { return null; }
};
export const updateClientBrokerLinks = async (payload) => {
    const axiosInstance = useAxios()
    try {
        const response = await axiosInstance.post(`update-client-broker-links`, payload);
        return response.data;
    } catch (error) { return null; }
};




export const updateProfile = async (payload) => {
    const axiosInstance = useAxios()
    try {
        const response = await axiosInstance.post(`update-profile`, payload, {

            headers: {
                'content-type': false,
                'mime-type': "multipart/form-data",
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response.data;
    } catch (error) { return null; }
};

export const addNote = async (payload) => {
    const axiosInstance = useAxios()
    try {
        const response = await axiosInstance.post(`add-note`, payload);
        return response.data;
    } catch (error) { return null; }
};


export const getNotes = async (client) => {
    const axiosInstance = useAxios()
    try {
        const response = await axiosInstance.get(`get-notes/${client}`);
        return response.data;
    } catch (error) { return null; }
};
export const getClientCommissions = async (client) => {
    const axiosInstance = useAxios()
    try {
        const response = await axiosInstance.get(`get-client-broker-commissions`);
        return response.data;
    } catch (error) { return null; }
};
export const createIB = async (payload) => {
    const axiosInstance = useAxios()
    try {
        const response = await axiosInstance.post(`create-ib`, payload);
        return response.data;
    } catch (error) { return null; }
};
