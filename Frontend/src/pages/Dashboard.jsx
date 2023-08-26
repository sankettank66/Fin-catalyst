import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PriceTracker from '../components/PriceTracker';
import PriceComparison from '../components/PriceComparison';
import RateComparison from '../components/RateComparison'
import ExchangesList from '../components/ExchangeList';
import CandleData from '../components/CandleData';
import MarketCapitalization from '../components/marketCapitalization';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <header>
                {/* <NavigationBar/> */}
            </header>
            <section className="price-tracker">
                {/* <PriceTracker/> */}
            </section>
            <section className="price-comparison">
                {/* <PriceComparison/> */}
            </section>
            <section className="rate-comparison">
                {/* <RateComparison/> */}
            </section>
            <section className="Exchange-list">
                {/* <ExchangesList/> */}
            </section>
            <section className="btc">
                {/* <CandleData cryptocurrencyId="bitcoin" /> */}
            </section>
            <section className="market-cap">
                {/* <h2>Visualize Market Capitalization</h2> */}
                <MarketCapitalization/>
            </section>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default Dashboard;
