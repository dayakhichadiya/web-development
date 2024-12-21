import React from 'react'
import { useState, useEffect } from 'react'

const Timer = () => {

    const [time, setTime] = useState(0)

    const [isRun, setIsRun] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (isRun && time > 0) {
            setIsDarkMode(true);
            let timeId = setInterval(() => {
                setTime((prev) => prev - 1)
            }, 1000)
            return () => clearInterval(timeId)
        }
        else if (time === 0) {
            setIsDarkMode(false);
            setIsRun(false)
        }
    }, [time, isRun])

    const handleInputChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value) && value >= 0) {
            setTime(value * 60);
        }
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;  
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
    }
    return (
        <>
            <h1 className='heading'> React Counter App</h1>
            <div className='max-w-xl m-auto p-20 px-30'>
                <div className={`mt-16 bg-purple-400 ${isDarkMode ? ' bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
                    <input className="border-2 border-slate-600 rounded-md px-4 py-2 mb-4 w-full" type="number" placeholder='setTime in Minutes' onChange={handleInputChange} disabled={isRun} />
                    <div className='px-4 mx-14'>
                        <button className='btn' onClick={() => setIsRun(true)} disabled={isRun}>Start</button>
                        <button className='btn' onClick={() => setIsRun(false)}>Pause</button>
                        <button className='btn' onClick={() => setTime(0)}>Reset</button>
                    </div>
                    <h2 className='btn'>{time > 0 ? formatTime(time) : 'Time is up'}</h2>
                </div>
            </div >
        </>
    )
}

export default Timer
