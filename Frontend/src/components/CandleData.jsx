import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function CandleData({ cryptocurrencyId }) {
    const [candles, setCandles] = useState([]);

    useEffect(() => {
        fetchCandleData();
    }, []);

    const fetchCandleData = async () => {
        const config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://api.coincap.io/v2/candles?exchange=poloniex&interval=h8&baseId=${cryptocurrencyId}&quoteId=bitcoin`,
            headers: {}
        };

        try {
            const response = await axios(config);
            setCandles(response.data.data);
        } catch (error) {
            console.error('Error fetching candle data:', error);
        }
    };

    return (
        <div className="candle-data">
            <h2>Candle Data for {cryptocurrencyId}</h2>
            <table>
                <thead>
                    <tr>
                        <th>Timestamp</th>
                        <th>Open</th>
                        <th>High</th>
                        <th>Low</th>
                        <th>Close</th>
                        <th>Volume</th>
                    </tr>
                </thead>
                <tbody>
                    {candles.map(candle => (
                        <tr key={candle.period}>
                            <td>{new Date(candle.period).toLocaleString()}</td>
                            <td>{candle.open}</td>
                            <td>{candle.high}</td>
                            <td>{candle.low}</td>
                            <td>{candle.close}</td>
                            <td>{candle.volume}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

CandleData.propTypes = {
    cryptocurrencyId: PropTypes.string.isRequired,
};

export default CandleData;
