const campaign = {
  id: null,
  name: null,
  campaignId: null,
  status: 'DRAFT',
  startDate: null,
  endDate: null,
  maxDisplays: 0,
  frequencyDays: 0,
  actions: {
    sendToWebsiteAction: {
      enabled: false,
      targetNewWindow: false,
      websiteUrl: null,
      bannerImages: {
        portrait: { url: null, height: '1050px', width: '300px' },
        skyscraper: { url: null, height: '600px', width: '160px' },
        medium_rectangle: { url: null, height: '250px', width: '300px' },
        smartphone_banner: { url: null, height: '50px', width: '300px' },
        billboard: { url: null, height: '250px', width: '970px' }
      },
      useAllImages: false,
      campaignKeyword: null,
      altText: null
    },
    sendToInboxAction: { enabled: false, messageType: null, messageSubject: null, messageText: null },
    sendToInterstitialPage: {
      enabled: false,
      title: null,
      routeTrigger: null,
      templateName: null,
      suppressAllowed: false,
      remindAllowed: false,
      remindDays: 0,
      mandatory: false,
      actionButtons: null,
      webPresentation: {
        bodyType: 'NONE',
        bodyImages: [
          {
            id: null,
            order: null,
            webImageUrl: null,
            webImageAltText: null,
            redirectUrl: null,
            openInNewWindow: false,
            header: null,
            caption: null,
            headerColor: null,
            captionColor: null
          }
        ],
        headerImageUrl: null,
        headerImageAltText: null,
        footerImageUrl: null,
        footerImageAltText: null,
        rotationSpeed: 0,
        bodyText: null,
        bodyVideoUrl: null
      },
      mobilePresentation: {
        bodyType: 'NONE',
        bodyImages: [
          {
            id: null,
            order: null,
            redirectUrl: null,
            openInNewWindow: false,
            header: null,
            caption: null,
            headerColor: null,
            captionColor: null,
            portraitImageUrl: null,
            landscapeImageUrl: null,
            mobileImageAltText: null
          }
        ],
        headerImageUrl: { portrait: null, landscape: null, headerImageAltText: null },
        footerImageUrl: { portrait: null, landscape: null, footerImageAltText: null },
        rotationSpeed: 0,
        bodyText: null,
        bodyVideoUrl: null
      }
    }
  },
  rules: [],
  campaignDeliveryRules: { deliverToWeb: false, deliverToIos: false, deliverToAndroid: false },
  locations: [],
  isDefault: false,
  priority: null,
  numberOfUsers: 0,
  description: '',
  companyId: null,
  campaignPriorityStatusType: null,
  currentOperation: 'COMPLETE',
  readyCheckDto: null,
  notes: null,
  userStateChangeReason: null,
  overrideOptOut: false,
  campaignLocked: false,
  lockedBy: null,
  campaignIntents: null,
  thirdPartyFileUploadBasedCampaign: false,
  anyUserRule: false,
  fileUploadBasedRule: false
};

export default campaign;
