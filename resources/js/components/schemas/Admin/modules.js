
import * as Yup from 'yup';

export const addPromotion = Yup.object().shape({
  title: Yup.string().required('Required'),
  websiteLink: Yup.string().required('Required'),
  image: Yup.string().required('Image is required'),
  shortDescription: Yup.string().required('Short description is required')
});
