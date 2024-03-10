import React, { useEffect, useState } from 'react'
import Menu from '../component/Menu';
import EventCard from '../component/EventCard';


function Home() {
    const header = (
        <>
            <Menu></Menu>    
        </>
    );
    return (
        <div >
            {header}
            <EventCard></EventCard>
            <EventCard></EventCard>
            <EventCard></EventCard>
        </div>
    )
}

export default Home