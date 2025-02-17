import React from "react";
import { Link } from "react-router-dom"; 
import heroImage2 from "../assets/hero2.webp";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-t from-purple-500 via-indigo-500 to-blue-500 text-white flex items-center">
      <div className="container mx-auto px-6 lg:px-20 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
            Take Control of Your <br />
            <span className="">Expenses</span>
          </h1>
          <p className="text-lg lg:text-xl font-light text-gray-100">
            Track your spending, set budgets, and achieve your financial goals
            effortlessly with our intuitive expense tracker.
          </p>
          <Link to="/add-expense">
            <button className="mt-6 bg-yellow-500 text-purple-900 text-lg font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-yellow-300 hover:shadow-xl transition duration-300">
              Get Started
            </button>
          </Link>
        </div>

        <div className="relative">
          <div className="absolute -top-6 -left-6 w-80 h-80 bg-yellow-300 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute -bottom-6 -right-6 w-80 h-80 bg-indigo-600 rounded-full blur-3xl opacity-30"></div>
          <img
            src={heroImage2}
            alt="Expense Tracker Illustration"
            className="relative z-10 w-full max-w-sm mx-auto lg:mx-0 lg:max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
