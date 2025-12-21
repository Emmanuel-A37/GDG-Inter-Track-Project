export const SCREEN_SIZES = {
  mobile: {
    maxWidth: '744px',
    headerHeight: '56px',
    contentHeight: '981px',
    footerHeight: '96px',
    buttonWidth: '696px',
    buttonHeight: '56px',
    totalHeight: '1133px'
  },

  ipod: {
    maxWidth: '320px',
    headerHeight: '56px',
    contentHeight: '456px',
    footerHeight: '56px',
    buttonWidth: '288px',
    buttonHeight: '44px',
    totalHeight: '568px'
  },

  ipad: {
    maxWidth: '744px',
    headerHeight: '56px',
    contentHeight: '981px',
    footerHeight: '96px',
    buttonWidth: '696px',
    buttonHeight: '56px',
    totalHeight: '1133px'
  },

  desktop: {
    maxWidth: '1440px',
    headerHeight: '80px',
    contentHeight: '680px',
    footerHeight: '140px',
    buttonWidth: '400px',
    buttonHeight: '56px',
    totalHeight: '900px'
  }
};

export const getScreenSize = (screenType = 'mobile') => {
  return SCREEN_SIZES[screenType] || SCREEN_SIZES.mobile;
};

export const ICON_SIZES = {
  ipod: 64,
  mobile: 80,
  ipad: 96,
  desktop: 96
};

export const NO_INTERNET_ICON_SIZES = {
  ipod: 72,
  mobile: 88,
  ipad: 108,
  desktop: 108
};

export const UPLOAD_FAILURE_ICON_SIZES = {
  mobile: 144,
  ipod: 120,
  ipad: 144,
  desktop: 160
};

export const UPLOAD_SUCCESS_ICON_SIZES = {
  mobile: 128,
  ipod: 112,
  ipad: 128,
  desktop: 144
};
