import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const Login = () => {
  const { register, formState: {errors}, handleSubmit } = useForm();

  const handleLogin = (data) => {
    console.log(data);

    
  };

  return (
      <div className="h-[600px] flex flex-col justify-center items-center ">
        <div className="max-w-96 md:w-auto p-10 border border-gray-200  shadow-slate-500 shadow-sm">
          <h2 className="text-2xl md:text-3xl text-center mb-6">Login</h2>

          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: "Email Is Required" })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.email && <p className="font-semibold text-sm text-red-500">{errors.email?.message}</p>}
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", { required: "Password Is Required", minLength: {value: 6, message: "Password Must be 6 Character Or Longer"}, })}
                className="input input-bordered w-full max-w-xs"
              />
                {errors.password && <p className="text-sm font-semibold text-red-500">{errors.password?.message}</p>}
              <label className="label">
                <span className="hover:link ">Forgot Password ?</span>
              </label>
            </div>

            <input
              className="btn btn-accent w-full mt-4"
              value="Login"
              type="submit"
            />
          </form>

          <p className="mt-4">
            New to Doctors Portal ? 
            <Link to='/signup' className="text-secondary pl-1 font-semibold">Create New Account</Link>
          </p>
          <div className="divider">OR</div>

          <button
            aria-label="Login with Google"
            type="button"
            className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-600 focus:ring-violet-600 hover:bg-accent hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current "
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            <p>Login with Google</p>
          </button>
        </div>
      </div>

  );
};

export default Login;
