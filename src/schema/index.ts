import * as Yup from 'yup';

const getValidationErrors = err => {
  const validationErrors = {};

  err.inner.forEach(error => {
    if (error.path) {
      validationErrors[error.path] = error.message;
    }
  });
  // console.log('getValidationErrors', validationErrors);
  return validationErrors;
};

export const minimumSchema = Yup.object({
  id: Yup.string().required().nullable(),
  name: Yup.string()
    .trim()
    .required()
    .nullable()
    .transform((v, o) => (o === "" ? null : v)),
  startDate: Yup.date().required(),
  endDate: Yup.date().required(),
  actions: Yup.object({
    sendToWebsiteAction: Yup.object({
      enabled: Yup.boolean()
    }),
    sendToInboxAction: Yup.object({
      enabled: Yup.boolean()
    }),
    sendToInterstitialPage: Yup.object({
      enabled: Yup.boolean()
    })
  }).test('campaignActionsTest', 'Must select at least one action.', action => Object.keys(action).some(k => action[k].enabled))
});

const campaignDeliveryRulesSchema = Yup.object({
  campaignDeliveryRules: Yup.object({
    deliverToWeb: Yup.boolean(),
    deliverToIos: Yup.boolean(),
    deliverToAndroid: Yup.boolean()
  }).test('campaignDeliveryRulesTest', 'Must select at least one delivery channel option.', cdr =>
    Object.keys(cdr).some(k => cdr[k])
  )
});

export const validateSchema = (objToValidate, schema) => {
  let results = {};
  schema.validate(objToValidate, { abortEarly: false }).catch(function (err) {
    results = getValidationErrors(err);
  });
  return results;
};

export const mergeSchemas = (...schemas) => {
  const [first, ...rest] = schemas;
  return rest.reduce((mergedSchemas, schema) => mergedSchemas.concat(schema), first);
};
