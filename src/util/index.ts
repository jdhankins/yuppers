import to from 'await-to-js';
import moment from 'moment';

const INPUT_DATE_FORMAT = 'YYYY-MM-DDTHH:MM:SS';

export const isCamelCase = val => {
  const camelCaseRegex = /^[a-z]+([A-Z]*([a-z]|[\d](?![a-z]))*)+$|^$/;
  return camelCaseRegex.test(val);
};

export const execute = async (promise: Promise<unknown>) => {
  const [err, res] = await to(promise);
  if (err) return [err];
  return [null, res];
};

export const today = () => {
  return moment().format(INPUT_DATE_FORMAT)
}

export const addDayToDate = (date, daysToAdd) => {
  return moment(date).add(daysToAdd, 'days').format(INPUT_DATE_FORMAT);       // Tomorrow at 2:43 PM

}
