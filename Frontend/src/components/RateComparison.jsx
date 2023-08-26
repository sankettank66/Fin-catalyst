import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RateComparison = () => {
    const [exchangeRates, setExchangeRates] = useState([]);

    useEffect(() => {
        fetchExchangeRates();
    }, []);

    const fetchExchangeRates = async () => {
        try {
            const response = await axios.get('https://api.coincap.io/v2/rates');
            setExchangeRates(response.data.data);
        } catch (error) {
            console.error('Error fetching exchange rates:', error);
        }
    };

    return (
        <div className="rate-comparison">
            <h2>Cryptocurrency Exchange Rates</h2>
            <table>
                <thead>
                    <tr>
                        <th>Cryptocurrency</th>
                        <th>Symbol</th>
                        <th>Currency Symbol</th>
                        <th>Type</th>
                        <th>Exchange Rate (USD)</th>
                    </tr>
                </thead>
                <tbody>
                    {exchangeRates.map(rate => (
                        <tr key={rate.symbol}>
                            <td>{rate.id}</td>
                            <td>{rate.symbol}</td>
                            <td>{rate.currencySymbol || 'None'}</td>
                            <td>{rate.type}</td>
                            <td>${parseFloat(rate.rateUsd).toFixed(8)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RateComparison;
