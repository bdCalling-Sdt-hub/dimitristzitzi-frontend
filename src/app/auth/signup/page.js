import AuthLayout from '@/components/AuthLayout';

const Signup = () => {
  return (
    <AuthLayout title="Sign Up">
      <form className="space-y-6">
        <div>
          <input
            type="text"
            placeholder="Name"
            required
            className="input-style"
          />
        </div>
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
        <button className="btn-primary">Sign Up</button>
      </form>
    </AuthLayout>
  );
};

export default Signup;
