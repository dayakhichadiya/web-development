import React from "react";
import heroImage1 from '../assets/hero1.webp'
import heroImage2 from '../assets/hero2.webp'

const Dashboard = () => {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-green-400 text-white p-10">
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl font-bold mb-4">Take Control of Your Expenses</h1>
              <p className="text-lg mb-6">
                Track your spending, set budgets, and achieve your financial goals effortlessly.
              </p>
              <button className="bg-white text-blue-500 px-6 py-3 rounded-lg shadow-md hover:bg-gray-100">
                Get Started
              </button>
            </div>
            <div className="md:w-1/2">
              <img src={heroImage2} alt="Expense Tracker Illustration" />
            </div>
          </div>
        </div>
      );
    };
  
  export default Dashboard;
  