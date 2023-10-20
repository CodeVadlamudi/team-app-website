import React from "react";

function Login() {
  return (
    <section className="my-24 px-10">
      <div className="bg-white shadow-md border h-[550px] max-w-[450px] p-10 space-y-5 mx-auto rounded-lg">
        <a href="/" className="w-32 h-12 block">
          <img
            src="./images/team-logo.png"
            alt="Team Logo"
            className="w-full h-full object-contain"
          />
        </a>

        <div>
          <h3>Sign In</h3>
          <h5>to continue to Team App</h5>
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-4 border p-2 w-full rounded">
            <img
              src="./images/github.png"
              alt="GitHub Image"
              className="w-7 h-7 object-contain"
            />
            <p>continue to GitHub</p>
          </div>
          <div className="flex items-center space-x-4 border p-2 w-full rounded">
            <img
              src="./images/google.png"
              alt="Google Image"
              className="w-7 h-7 object-contain"
            />
            <p>continue to Google</p>
          </div>
        </div>

        <div className="text-center">or</div>

        <div className="flex flex-col">
          <label htmlFor="emailAddress">Email Address</label>
          <input
            type="email"
            className="h-12 w-full border outline-none pl-4 rounded"
          />
        </div>

        <a
          href="/"
          className="bg-indigo-500 hover:bg-black duration-200 w-full h-12 text-white rounded flex items-center justify-center">
          CONTINUE
        </a>
      </div>
    </section>
  );
}

export default Login;
