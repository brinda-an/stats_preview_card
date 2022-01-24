import React from 'react';
import StatsCard from './StatsCard';
import desktop from '../Images/desktop.jpg';

const MainCard = () => {
    return (
        <div className='mainCardHolder'>
            <card className='cardParts'>
                <div >
                    <h3 className='title'>Get <span style={{ color: 'hsl(277, 64%, 61%)' }}>insights</span> that help your business grow.</h3>
                    <p className='para'>Discover the benefits of data analytics and make better decisions
                        regarding revenue, customer experience, and overall efficiency.
                    </p>
                    <StatsCard />
                </div>
                <div>
                    <img src={desktop} alt="Image" className='img' />
                </div>
            </card>
        </div >
    )
}

export default MainCard;
