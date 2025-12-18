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
    maxWidth: '800px',
    headerHeight: '60px',
    contentHeight: '1000px',
    footerHeight: '100px',
    buttonWidth: '750px',
    buttonHeight: '60px',
    totalHeight: '1200px'
  },
  ipad: {
    maxWidth: '1024px',
    headerHeight: '70px',
    contentHeight: '1200px',
    footerHeight: '120px',
    buttonWidth: '900px',
    buttonHeight: '70px',
    totalHeight: '1400px'
  },
  desktop: {
    maxWidth: '1440px',
    headerHeight: '80px',
    contentHeight: '1400px',
    footerHeight: '140px',
    buttonWidth: '1200px',
    buttonHeight: '80px',
    totalHeight: '1620px'
  }
};

// Helper function to get sizes
export const getScreenSize = (screenType = 'mobile') => {
  return SCREEN_SIZES[screenType] || SCREEN_SIZES.mobile;
};