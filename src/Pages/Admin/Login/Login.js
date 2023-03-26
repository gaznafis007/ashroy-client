import React from "react";

const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const userName = form.username.value;
    const password = form.password.value;
    const adminInfo = {
      userName,
      password,
    };
    console.log(adminInfo);
  };
  return (
    <section className="my-4">
      <h1 className="text-5xl text-center">Admin Login</h1>

      <form
        onSubmit={handleLogin}
        className="my-4 flex gap-4 flex-col justify-center items-center"
      >
        <div className="w-96">
          <input
            type="text"
            name="username"
            placeholder="username"
            className="border-2 w-full px-2 py-3 rounded-lg"
          />
        </div>
        <div className="w-96">
          <input
            type="password"
            name="password"
            placeholder="password"
            className="border-2 w-full px-2 py-3 rounded-lg"
          />
        </div>
        <input
          type="submit"
          value="login"
          className="mt-1 capitalize inline-block bg-primary px-4 py-3 rounded-md shadow-md text-white"
        />
      </form>
    </section>
  );
};

export default Login;
