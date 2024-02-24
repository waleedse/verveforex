
import * as Yup from 'yup';

export const addPromotion = Yup.object().shape({
  title: Yup.string().required('Required'),
  websiteLink: Yup.string().required('Required'),
});
