import React from 'react';
import ReactJson from 'react-json-view';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';

import { useCampaignState } from '../context/CampaignContext';
import PrimaryForm from '../forms/PrimaryForm';

const CampaignLayout = () => {
  const { campaign } = useCampaignState();
  return (
    <Container className="m-4">
      <Row>
        <Col>
          <PrimaryForm />
          <pre style={{ border: '1px solid #ffffff80' }}>
            <ReactJson style={{ padding: '20px', backgroundColor: '#1d2835f2' }} theme="tomorrow" src={campaign} />
          </pre>
        </Col>
        <Col>
          <Card>
            <CardHeader>Campaign Summary</CardHeader>
            <CardBody>test</CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CampaignLayout;
