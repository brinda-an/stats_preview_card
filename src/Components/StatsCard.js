import React from 'react'

const StatsCard = () => {
    return (
        <div className='statscard'>
            <div className='statComponent'>
                <h1 style={{ color: 'hsl(0, 0%, 100%)' }}>10k+</h1>
                <p style={{ color: 'hsla(0, 0%, 100%, 0.6)' }}>COMPANIES</p>
            </div>
            <div className='statComponent'>
                <h1 style={{ color: 'hsl(0, 0%, 100%)' }}>314</h1>
                <p style={{ color: 'hsla(0, 0%, 100%, 0.6)' }}>TEMPLATES</p>
            </div>
            <div className='statComponent'>
                <h1 style={{ color: 'hsl(0, 0%, 100%)' }}>12M+</h1>
                <p style={{ color: 'hsla(0, 0%, 100%, 0.6)' }}>QUERIES</p>
            </div>
        </div>
    )
}

export default StatsCard
