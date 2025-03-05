import { NextPage } from 'next';
import { ErrorProps } from 'next/error';

const CustomError: NextPage<ErrorProps> = ({ statusCode }) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500 mb-4">Error</h1>
        <p className="text-xl">
          {statusCode
            ? `An error ${statusCode} occurred on server`
            : 'An error occurred on client'}
        </p>
        <button
          onClick={() => (window.location.href = '/')}
          className="mt-8 btn"
        >
          Go back home
        </button>
      </div>
    </div>
  );
};

// Use getInitialProps to capture the status code for your custom error page
CustomError.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default CustomError;
