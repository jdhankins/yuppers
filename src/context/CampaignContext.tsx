import React from 'react';

import campaign from '../data';
import { minimumSchema, validateSchema } from '../schema';

const ACTION_TYPE = {
  SET_CAMPAIGN: 'SET_CAMPAIGN',
  SET_SCHEMA: 'SET_SCHEMA'
};

const initialState = {
  campaign: campaign,
  campaignSchema: minimumSchema
};

export const CampaignStateContext = React.createContext(initialState);
export const CampaignDispatchContext = React.createContext(null);

const campaignReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_CAMPAIGN:
      return {
        ...state,
        campaign: action.campaign
      };

    case ACTION_TYPE.SET_SCHEMA:
      return {
        ...state,
        campaignSchema: action.campaignSchema
      };
  }
};

export const CampaignProvider = ({ children }: any) => {
  const [state, dispatch] = React.useReducer(campaignReducer, initialState);

  return (
    <>
      <CampaignStateContext.Provider value={state}>
        {/*// @ts-ignore*/}
        <CampaignDispatchContext.Provider value={dispatch}>{children}</CampaignDispatchContext.Provider>
      </CampaignStateContext.Provider>
    </>
  );
};

export const useCampaignState = () => {
  const context = React.useContext(CampaignStateContext);
  if (context === undefined) {
    throw new Error('useCampaignState must be used within a SessionProvider');
  }
  return context;
};

export const useCampaignDispatch = () => {
  const context = React.useContext(CampaignDispatchContext);
  if (context === undefined) {
    throw new Error('useCampaignDispatch must be used within a SessionProvider');
  }
  return context;
};

const validateCampaign = async (campaign, campaignSchema) => {
  //
};

export const setCampaign = (dispatch, campaign) => {
  dispatch({ type: ACTION_TYPE.SET_CAMPAIGN, campaign });
};

export const setCampaignSchema = (dispatch, campaignSchema) => {
  dispatch({ type: ACTION_TYPE.SET_SCHEMA, campaignSchema });
};
