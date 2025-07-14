import React, { useState } from "react";

function SignupPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    alert(`First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPassword: ${password}`);
  };

  // Google button does nothing—UI only
  const handleGoogleSignup = () => {
    // No action
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="absolute top-0 left-0 pl-10 flex-shrink-0 flex items-center "> 
        <img className='pt-5  h-20 w-20' src="../src/assets/logo.png" alt="logo" />
        </div>
      <div className="w-full max-w-md bg-gray-100 rounded-lg shadow p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block mb-1 text-gray-700">First Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                required
                autoComplete="given-name"
              />
            </div>
            <div className="w-1/2">
              <label className="block mb-1 text-gray-700">Last Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                required
                autoComplete="family-name"
              />
            </div>
          </div>
          <div>
            <label className="block mb-1 text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              autoComplete="new-password"
            />
          </div>
          <button
            onClick={() => window.location.href = '/'}
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>
        <div className="my-6 flex items-center">
          <hr className="flex-grow border-t" />
          <span className="mx-2 text-gray-400">or</span>
          <hr className="flex-grow border-t" />
        </div>
        <button
          type="button"
          onClick={handleGoogleSignup}
          className="w-full py-2 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50 transition"
        >
          <svg className="h-5 w-5 mr-2" viewBox="0 0 48 48">
            <g>
              <path fill="#4285F4" d="M44.5 20H24v8.5h11.7C34.1 33.5 29.8 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.1 8.1 2.9l6.1-6.1C34.2 6.5 29.4 4.5 24 4.5 12.7 4.5 3.5 13.7 3.5 25S12.7 45.5 24 45.5c10.5 0 19.5-8.5 19.5-19.5 0-1.3-.1-2.5-.3-3.5z"/>
              <path fill="#34A853" d="M6.3 14.7l7 5.1C15.3 17.1 19.3 14.5 24 14.5c3.1 0 5.9 1.1 8.1 2.9l6.1-6.1C34.2 6.5 29.4 4.5 24 4.5c-6.6 0-12 5.4-12 12 0 1.3.2 2.6.5 3.7z"/>
              <path fill="#FBBC05" d="M24 45.5c5.4 0 10.2-1.8 14-4.8l-6.5-5.3c-2.1 1.4-4.7 2.3-7.5 2.3-5.8 0-10.7-3.9-12.5-9.2l-7 5.1C8.8 41.1 15.8 45.5 24 45.5z"/>
              <path fill="#EA4335" d="M44.5 20H24v8.5h11.7c-1.2 3.2-4.2 5.5-7.7 5.5-5.8 0-10.7-3.9-12.5-9.2l-7 5.1C8.8 41.1 15.8 45.5 24 45.5c10.5 0 19.5-8.5 19.5-19.5 0-1.3-.1-2.5-.3-3.5z"/>
            </g>
          </svg>
          Sign in with Google
        </button>
      </div>
    </div>
  );
}

export default SignupPage;
