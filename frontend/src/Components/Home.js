import React from 'react';
import './Home.css';
import Product from './Product';


function Home(props) {

    // const time= new Date().toLocaleString();

    return (
        <div id='home'>
            <img className='home-image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>

           <div className="home-row">
            <Product 
                key={1}
                id={1}
                title='The Lean Startup: How can I can, all u need tom know aout how to know things u dont know an know them properly well'
                price={11.96}
                rating={4}
                image="http://ecx.images-amazon.com/images/I/41B258JSAQL.jpg" />

            <Product 
                key={2}
                id={2}
                title='Alexa Speaker: The last-born in the family '
                price={268.99}
                rating={5}
                image="https://cdn.macrumors.com/article-new/2017/10/61yI7vWa83L._SL1000_-e1507027523440-800x818.jpg" />
            </div>

           <div className="home-row">
                <Product 
                key={3}
                id={3}
                title='Apple IPhone 12: Do not ask for charger, buy it!'
                price={997.66}
                rating={2}
                image="https://pngimg.com/uploads/iphone_11/iphone_11_PNG35.png" />

                <Product 
                key={4}
                id={4}
                title='Back to school: Back pack welcome back'
                price={20.50}
                rating={4}
                image="http://pngimg.com/uploads/backpack/backpack_PNG6353.png" />

                <Product 
                key={5}
                id={5}
                title='Apple macbook notebook: 2.4ghz SSD computer, If you have the money you should buy, if you no get relax'
                price={1700.80}
                rating={3}
                image="https://purepng.com/public/uploads/large/purepng.com-macbookmacbooknotebookcomputersapple-inmacbook-familyapple-laptops-17015283614248ry9g.png" />
           </div>

            <div className="home-row">
                <Product 
                key={3}
                id={3}
                title='Samsung Smart TV (40inches LED Display) does not break at all as strong as 3310. Believe my words '
                price={800.20}
                rating={5}
                image="https://jimhansen6.files.wordpress.com/2013/01/es6100_smarttv-_v148036898_.jpg" />

           </div>
        </div>
    );
}

export default Home;