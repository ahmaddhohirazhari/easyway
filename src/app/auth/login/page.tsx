'use client';

import { useState } from 'react';

import Head from 'next/head';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Replace with your actual API call
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        // Save data to localStorage
        localStorage.setItem('userData', JSON.stringify(data));
        localStorage.setItem('token', data?.data?.accessToken);

        const loginTimestamp = new Date().getTime();
        localStorage.setItem('loginTimestamp', loginTimestamp.toString());

        // Redirect to home page
        await router.push('/');

        // Set timeout for session expiration (2 hours)
        setTimeout(() => {
          clearLocalStorage();
          Swal.fire({
            icon: 'info',
            title: 'Session Expired',
            text: 'Your session has expired. Please login again.',
            confirmButtonText: 'OK',
          }).then(() => {
            router.push('/login');
          });
        }, 2 * 60 * 60 * 1000);
      } else {
        throw new Error(data.message || 'Login failed');
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Username or Password is wrong!',
      });
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const clearLocalStorage = () => {
    localStorage.removeItem('userData');
    localStorage.removeItem('token');
    localStorage.removeItem('loginTimestamp');
  };

  return (
    <>
      <Head>
        <title>Login | Easy Way Digital</title>
      </Head>

      <div className="font-[sans-serif] bg-gradient-to-r from-green-900 via-green-700 to-green-500 text-[#333]">
        <div className="min-h-screen flex flex-col items-center justify-center lg:p-6 p-4">
          <div className="grid md:grid-cols-2 items-center gap-10 max-w-6xl w-full">
            <div className="max-md:text-center">
              <h2 className="text-4xl font-extrabold lg:leading-[50px] text-white">
                Seamless Login for Exclusive Access
              </h2>
              <p className="text-sm mt-6 text-white">
                Immerse yourself in a hassle-free login journey with our
                intuitively designed login form. Effortlessly access your
                account.
              </p>
            </div>

            <form
              className="bg-white rounded-xl px-6 py-8 space-y-6 max-w-md md:ml-auto max-md:mx-auto w-full"
              onSubmit={handleLogin}
            >
              <div className="mb-10">
                <h3 className="text-3xl font-extrabold">Sign in</h3>
              </div>

              <div>
                <label className="text-sm mb-2 block">Username</label>
                <div className="relative flex items-center">
                  <input
                    name="username"
                    type="text"
                    value={form.username}
                    onChange={handleChange}
                    required
                    className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                    placeholder="Enter Your Username"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-[18px] h-[18px] absolute right-4"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      cx="10"
                      cy="7"
                      r="6"
                      data-original="#000000"
                    ></circle>
                    <path
                      d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
              </div>

              <div className="mt-6">
                <label className="text-sm mb-2 block">Password</label>
                <div className="relative flex items-center">
                  <input
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    type={showPassword ? 'text' : 'password'}
                    required
                    className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                    placeholder="Enter password"
                  />
                  <button
                    type="button"
                    onClick={togglePassword}
                    className="absolute right-4"
                  >
                    {showPassword ? (
                      <svg
                        className="w-[18px] h-[18px]"
                        viewBox="0 0 64 64"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M13.673,10.345l-3.097,3.096l39.853,39.854l3.097,-3.097l-39.853,-39.853Z"></path>
                        <path d="M17.119,19.984l2.915,2.915c-3.191,2.717 -5.732,6.099 -7.374,9.058l-0.005,0.01c4.573,7.646 11.829,14.872 20.987,13.776c2.472,-0.296 4.778,-1.141 6.885,-2.35l2.951,2.95c-4.107,2.636 -8.815,4.032 -13.916,3.342c-9.198,-1.244 -16.719,-8.788 -21.46,-17.648c2.226,-4.479 5.271,-8.764 9.017,-12.053Zm6.63,-4.32c2.572,-1.146 5.355,-1.82 8.327,-1.868c0.165,-0.001 2.124,0.092 3.012,0.238c0.557,0.092 1.112,0.207 1.659,0.35c8.725,2.273 15.189,10.054 19.253,17.653c-1.705,3.443 -3.938,6.398 -6.601,9.277l-2.827,-2.827c1.967,-2.12 3.622,-4.161 4.885,-6.45c0,0 -1.285,-2.361 -2.248,-3.643c-0.619,-0.824 -1.27,-1.624 -1.954,-2.395c-0.54,-0.608 -2.637,-2.673 -3.136,-3.103c-3.348,-2.879 -7.279,-5.138 -11.994,-5.1c-1.826,0.029 -3.582,0.389 -5.249,0.995l-3.127,-3.127Z"></path>
                        <path d="M25.054,27.92l2.399,2.398c-0.157,0.477 -0.243,0.987 -0.243,1.516c0,2.672 2.169,4.841 4.841,4.841c0.529,0 1.039,-0.085 1.516,-0.243l2.399,2.399c-1.158,0.65 -2.494,1.02 -3.915,1.02c-4.425,0 -8.017,-3.592 -8.017,-8.017c0,-1.421 0.371,-2.756 1.02,-3.914Zm6.849,-4.101c0.049,-0.001 0.099,-0.002 0.148,-0.002c4.425,0 8.017,3.593 8.017,8.017c0,0.05 0,0.099 -0.001,0.148l-8.164,-8.163Z"></path>
                      </svg>
                    ) : (
                      <svg
                        className="w-[18px] h-[18px]"
                        viewBox="0 0 128 128"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"></path>
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <div className="mt-4 text-right">
                <a
                  href="#"
                  className="text-green-600 text-sm font-semibold hover:underline"
                >
                  Forgot your password?
                </a>
              </div>

              <div className="mt-10">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-green-500 hover:bg-green-600 focus:outline-none disabled:opacity-75"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      Loading
                      <svg
                        className="animate-spin ml-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    </span>
                  ) : (
                    'Log in'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
