import { useFormik } from 'formik';
import { useEffect } from 'react';
import { Form, FormFeedback, FormGroup, Input, Label } from 'reactstrap';

import { setCampaign, useCampaignDispatch, useCampaignState } from '../context/CampaignContext';
import GeneralForm from './GeneralForm';

const PrimaryForm = () => {
  const { campaignSchema, campaign } = useCampaignState();
  const dispatch = useCampaignDispatch();
  const formik = useFormik({
    initialValues: campaign,
    validationSchema: campaignSchema,
    onSubmit: formValues => console.log(formValues)
  });
  const { handleSubmit, handleChange, values, errors, dirty, isValid } = formik;

  useEffect(() => {
    if (dirty) {
      setCampaign(dispatch, values);
    }
  }, [values]);

  const onChange = e => {
    const { name, value } = e.target;
    handleChange(e);
  };


  return (
    <Form onSubmit={handleSubmit}>
      <GeneralForm campaign={values} onChange={onChange} errors={errors} />
    </Form>
  );
};

export default PrimaryForm;
