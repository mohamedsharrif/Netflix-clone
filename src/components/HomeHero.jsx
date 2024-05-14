import React from "react";
import { Link } from "react-router-dom";

const HomeHero = () => {
  return (
    <div
      className="flex min-h-screen flex-col items-center"
      style={{
        backgroundImage: `linear-gradient(rgb(0 0 0 /60%), 
    rgb(0 0 0/60%)),url(./images/misc/home.jpeg)`,
      }}
    >
      <header className="flex w-full justify-between">
        <div className="my-6 mx-4">
          <Link to="/home">
            <svg
              className="h-10 w-32"
              xmlns="http://www.w3.org/2000/svg"
              width="2500"
              height="677"
              viewBox="0.238 0.034 919.406 248.488"
            >
              <path
                fill="#e50914"
                d="m870.46 118.314 49.184 
            130.208c-14.495-2.07-28.982-4.663-43.733-6.999l-27.707-71.945-28.468 
            66.006c-13.973-2.336-27.698-3.114-41.672-4.928l49.955-113.89L782.71.034h41.937l25.362 
            65.22L877.194.034h42.442zM749.596.034h-38.052v225.71c12.425.779 25.362 1.292 38.052 
            2.841zm-70.927 223.118c-34.68-2.328-69.37-4.39-104.829-5.177V.035h38.823v181.188c22.264.514 
            44.52 2.32 66.006 3.355zM532.417 88.305v38.822h-53.06v88.263h-38.3V.034H549.77v38.822h-70.405v49.45h53.06zM375.82
            38.856v178.605c-12.946 0-26.14 0-38.83.514V38.856h-40.122V.034H416.19v38.822zM254.94 129.19c-17.08 0-37.274 0-51.769.787v57.715c22.778-1.557 
            45.556-3.363 68.59-4.141v37.273l-107.412 8.548V.034h107.405v38.822H203.17v52.29c15.017 0 38.052-.778 51.768-.778v38.83zM39.831 107.447V243.08c-13.965
            1.557-26.398 3.371-39.593 5.442V.034h37.017L87.724 141.11V.034h38.83V232.47c-13.717 
            2.336-27.698 3.114-42.45 5.177z"
              />
            </svg>
          </Link>
        </div>

        <div className="my-6 mx-6">
          <Link
            to="/login"
            className="rounded bg-[#e50a14] py-2 px-8 text-white"
          >
            Signin
          </Link>
        </div>
      </header>
      <main className="flex text-white flex-1 flex-col items-center justify-center text-center sm:px-20">
        <h1 className="max-w-lg text-5xl font-bold ">
          Unlimited Movies, Tv Shows, and More{" "}
        </h1>
        <h2 className="mt-4 mb-8  text-2xl">
          Watch any where, Cancel any time
        </h2>
        <p className="text-lg">
          Ready to watch? Enter your email to create or restart your membership
        </p>
        <div className="m-4 flex flex-col space-y-6 sm:flex-row sm:space-y-0">
          <input
            className="flex w-full min-w-[400px] py-3 px-4 bg-black bg-opacity-40 rounded text-white focus:outline-none focus:ring-2 focus:ring-red-500 border border-gray-400 sm:max-w-xs"
            type="email"
            placeholder="Enter your email address"
          />
          <button className="flex w-full items-center justify-center bg-[#e50914] text-xl sm:py-0 sm:px-8 font-bold py-2 m-2 rounded">
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </main>
    </div>
  );
};

export default HomeHero;
