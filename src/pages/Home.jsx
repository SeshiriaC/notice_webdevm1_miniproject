import React, { useEffect, useState } from 'react'
import Menu from '../component/Menu';
import EventCard from '../component/EventCard';


function Home() {
    const footer = (
        <>
            <Menu></Menu>    
        </>
    );
    return (
        <div >
            {footer}
            <EventCard></EventCard>
        </div>
    )
}

export default Home