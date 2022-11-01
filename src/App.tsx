import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import { CampaignProvider } from './context/CampaignContext';
import CampaignLayout from './layout/CampaignLayout';

function App() {
  return (
    <CampaignProvider>
      <CampaignLayout />
    </CampaignProvider>
  );
}

export default App;
