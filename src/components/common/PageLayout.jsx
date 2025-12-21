import React from 'react';

const PageLayout = ({ 
  children, 
  maxWidth = '744px',
  headerHeight = '56px',
  contentHeight = '981px',
  footerHeight = '96px'
}) => {
  return (
    <div 
      className="bg-white mx-auto flex flex-col"
      style={{ 
        maxWidth: maxWidth,
        minHeight: '100vh'
      }}
    >
      {children}
    </div>
  );
};

const PageLayoutHeader = ({ children, height = '56px' }) => {
  return (
    <div style={{ height: height }}>
      {children}
    </div>
  );
};

const PageLayoutContent = ({ children, height = '981px' }) => {
  return (
    <div 
      className="flex flex-col items-center justify-center px-5"
      style={{ height: height }}
    >
      {children}
    </div>
  );
};

const PageLayoutFooter = ({ children, height = '96px' }) => {
  return (
    <div 
      className="flex items-center justify-center px-6"
      style={{ height: height }}
    >
      {children}
    </div>
  );
};

PageLayout.Header = PageLayoutHeader;
PageLayout.Content = PageLayoutContent;
PageLayout.Footer = PageLayoutFooter;

export default PageLayout;