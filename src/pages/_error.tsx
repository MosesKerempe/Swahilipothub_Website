import React from 'react';

const ErrorPage = ({ statusCode }) => (
  <div>
    <h1>{statusCode ? `Error: ${statusCode}` : 'An error occurred'}</h1>
    <p>
      {statusCode === 404
        ? 'Page not found.'
        : 'An unexpected error has occurred.'}
    </p>
  </div>
);

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
