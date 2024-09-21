import AuthLayout from '@/components/AuthLayout';

const Signin = () => {
  return (
    <AuthLayout title="Sign In">
      <form className="space-y-6">
        <div>
          <input
            type="email"
            placeholder="Email"
            required
            className="input-style"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            required
            className="input-style"
          />
        </div>
        <button className="btn-primary">Sign In</button>
      </form>
    </AuthLayout>
  );
};

export default Signin;
