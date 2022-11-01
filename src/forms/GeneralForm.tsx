import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';
import { addDayToDate, today } from '../util';

interface GeneralFormProps {
  campaign: any;
  onChange: any;
  errors: any;
}

const GeneralForm = ({ campaign: { name, startDate, endDate }, onChange, errors }: GeneralFormProps) => {
  startDate = startDate ? startDate : today();
  const endDateMin = addDayToDate(startDate, 1);
  console.log('errors', errors);
  return (
    <>
      <FormGroup>
        <Label>Campaign Name</Label>
        <Input type="text" name="name" onChange={onChange} value={name || ''} invalid={!!errors.name} autoFocus />
        <FormFeedback>{errors.name}</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label>Start Date/Time</Label>
        <Input
          onKeyDown={e => e.preventDefault()}
          type="datetime-local"
          name="startDate1"
          // value={startDate}
          min={today()}
          onChange={onChange}
          invalid={!!errors.startDate}
        />
      </FormGroup>
      <FormGroup>
        <Label>End Date/Time</Label>
        <Input
          onKeyDown={e => e.preventDefault()}
          type="datetime-local"
          name="endDate"
          // value={endDate || new Date()}
          onChange={onChange}
          min={endDateMin}
          invalid={!!errors.endDate}
        />
      </FormGroup>
      <FormGroup switch inline>
        <Label>Inbox Message</Label>
        <Input type="switch" name="actions.sendToInboxAction.enabled" onChange={onChange} />
      </FormGroup>
      <FormGroup switch inline>
        <Label>Banner Ad</Label>
        <Input type="switch" name="actions.sendToWebsiteAction.enabled" onChange={onChange} />
      </FormGroup>
      <FormGroup switch inline >
        <Label>Interstitial Page</Label>
        <Input type="switch" name="actions.sendToInterstitialPage.enabled" onChange={onChange} />
      </FormGroup>
      <FormFeedback valid={!errors.actions} className={errors.actions ? 'd-block' : ''}>
        {errors.actions}
      </FormFeedback>
    </>
  );
};

export default GeneralForm;
