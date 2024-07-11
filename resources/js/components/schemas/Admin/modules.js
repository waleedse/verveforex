
import * as Yup from 'yup';

export const addPromotion = Yup.object().shape({
    title: Yup.string().required('Required'),
    websiteLink: Yup.string().required('Required'),
    image: Yup.string().required('Image is required'),
    shortDescription: Yup.string().required('Short description is required')
});
export const addBroker = Yup.object().shape({
    title: Yup.string().required('Required'),
    websiteLink: Yup.string().required('Required'),
    signupLink: Yup.string().url("Signup link should be valid url").required('Required'),
    image: Yup.string().required('Image is required'),
    shortDescription: Yup.string().required('Short description is required')
});

export const addCommission = Yup.object().shape({
    commission: Yup.string().required('Required'),
});
export const sliderSchema = Yup.object().shape({
    title: Yup.string().required('Required'),
    index: Yup.string().required('Required'),
    image: Yup.string().required('Image is required'),
});
export const newsSchema = Yup.object().shape({
    title: Yup.string().required('Required'),
    body: Yup.string().required('Required'),
    image: Yup.string().required('Image is required'),
});
