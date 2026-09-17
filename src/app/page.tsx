import React from 'react';
import HeroBanner1 from './Components/HeroBanner/HeroBanner1';
import Feature1 from './Components/Feature/Feature1';
import About1 from './Components/About/About1';
import Category1 from './Components/Category/Category1';
import Destination1 from './Components/Destination/Destination1';
import Choose1 from './Components/Choose/Choose1';
import Team1 from './Components/Team/Team1';
import Brand1 from './Components/Brand/Brand1';
import Cta2 from './Components/Cta/Cta2';
import QuoteContact from './Components/Contact/QuoteContact';

const page = () => {
    return (
        <div>
            <HeroBanner1></HeroBanner1>
            <Feature1></Feature1>
            <About1></About1>
            <Category1></Category1>
            <Destination1></Destination1>
            <Choose1></Choose1>
            <Team1></Team1>
            <Brand1></Brand1>
            <Cta2></Cta2>
            <QuoteContact></QuoteContact>
        </div>
    );
};

export default page;
