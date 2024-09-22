// src/components/AuthLayout.js
const AuthLayout = ({ children }) => {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg ">
         
          {children}
        </div>
      </div>
    );
  };
  
  export default AuthLayout;
  
