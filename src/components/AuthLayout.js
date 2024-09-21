// src/components/AuthLayout.js
const AuthLayout = ({ children, title }) => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            {title}
          </h2>
          {children}
        </div>
      </div>
    );
  };
  
  export default AuthLayout;
  
