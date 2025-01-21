import React from 'react'

const AddExpense = () => {
  return (
    <nav className='bg-gradient-to-r from-blue-500 to-green-400 text-white p-4' >
        <div className='container mx-auto flex justify-between items-center'>
            <h1 className='text-2xl font-bold'> Expense Tracker App</h1>
            <button className='bg-white hover:bg-blue-200 text-black px-4 p-2 rounded'>Add Expense</button>
        </div>
    </nav>
  )
}

export default AddExpense;