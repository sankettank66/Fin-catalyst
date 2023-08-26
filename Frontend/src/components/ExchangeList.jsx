// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import NavigationBar from './NavigationBar';

// const ExchangesList = () => {
//     const [exchanges, setExchanges] = useState([]);

//     useEffect(() => {
//         fetchExchanges();
//     }, []);

//     const fetchExchanges = async () => {
//         try {
//             const response = await axios.get('https://api.coincap.io/v2/exchanges');
//             setExchanges(response.data.data);
//         } catch (error) {
//             console.error('Error fetching exchanges:', error);
//         }
//     };

//     return (
//         <>
//             <NavigationBar />
//             <div className="bg-gray-100 min-h-screen py-8">
//                 <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg overflow-hidden p-6">
//                     <h2 className="text-2xl font-semibold mb-4 text-center">Cryptocurrency Exchanges</h2>
//                     <table className="w-full border">
//                         <thead className="bg-gray-200">
//                             <tr>
//                                 <th className="py-2 px-4 text-left">Rank</th>
//                                 <th className="py-2 px-4 text-left">Name</th>
//                                 <th className="py-2 px-4 text-left">ID</th>
//                                 <th className="py-2 px-4 text-left">Percent Total Volume</th>
//                                 <th className="py-2 px-4 text-left">Volume (USD)</th>
//                                 <th className="py-2 px-4 text-left">Trading Pairs</th>
//                                 <th className="py-2 px-4 text-left">Socket</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {exchanges.map(exchange => (
//                                 <tr key={exchange.rank} className="border-b">
//                                     <td className="py-2 px-4">{exchange.rank}</td>
//                                     <a href={exchange.exchangeUrl} className="text-blue-500 hover:underline">
//                                         {exchange.name}
//                                     </a>
//                                     <td className="py-2 px-4">{exchange.exchangeId.toUpperCase()}</td>
//                                     <td className="py-2 px-4">{Number(exchange.percentTotalVolume).toFixed(3)}</td>
//                                     <td className="py-2 px-4">{Number(exchange.volumeUsd).toFixed(3)}</td>
//                                     <td className="py-2 px-4">{exchange.tradingPairs}</td>
//                                     <td className="py-2 px-4">{exchange.socket ? 'Yes' : 'No'}</td>
//                                                                     </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default ExchangesList;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavigationBar from './NavigationBar';
import Footer from './Footer';

const ExchangesList = () => {
    const [exchanges, setExchanges] = useState([]);
    const [sortColumn, setSortColumn] = useState('rank');
    const [sortOrder, setSortOrder] = useState('asc');

    useEffect(() => {
        fetchExchanges();
    }, []);

    const fetchExchanges = async () => {
        try {
            const response = await axios.get('https://api.coincap.io/v2/exchanges');
            setExchanges(response.data.data);
        } catch (error) {
            console.error('Error fetching exchanges:', error);
        }
    };

    const handleSort = (column) => {
        if (column === sortColumn) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortColumn(column);
            setSortOrder('asc');
        }
    };

    const sortedExchanges = [...exchanges].sort((a, b) => {
        if (sortColumn === 'rank' || sortColumn === 'percentTotalVolume') {
            return sortOrder === 'asc'
                ? parseFloat(a[sortColumn]) - parseFloat(b[sortColumn])
                : parseFloat(b[sortColumn]) - parseFloat(a[sortColumn]);
        }
        if (sortColumn === 'name') {
            return sortOrder === 'asc'
                ? a[sortColumn].localeCompare(b[sortColumn])
                : b[sortColumn].localeCompare(a[sortColumn]);
        }
        return 0;
    });

    return (
        <>
            <NavigationBar />
            <div className="bg-gray-100 min-h-screen py-8">
                <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg overflow-hidden p-6">
                    <h2 className="text-2xl font-semibold mb-4 text-center">Cryptocurrency Exchanges</h2>
                    <table className="w-full border">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="py-2 px-4 text-left">
                                    <button onClick={() => handleSort('rank')}>
                                        Rank{' '}
                                        {sortColumn === 'rank' && (
                                            <span className="ml-1">
                                                {sortOrder === 'asc' ? '▲' : '▼'}
                                            </span>
                                        )}
                                    </button>
                                </th>
                                <th className="py-2 px-4 text-left">
                                    <button onClick={() => handleSort('name')}>
                                        Name{' '}
                                        {sortColumn === 'name' && (
                                            <span className="ml-1">
                                                {sortOrder === 'asc' ? '▲' : '▼'}
                                            </span>
                                        )}
                                    </button>
                                </th>
                                <th className="py-2 px-4 text-left">ID</th>
                                <th className="py-2 px-4 text-left">
                                    <button onClick={() => handleSort('percentTotalVolume')}>
                                        Percent Total Volume{' '}
                                        {sortColumn === 'percentTotalVolume' && (
                                            <span className="ml-1">
                                                {sortOrder === 'asc' ? '▲' : '▼'}
                                            </span>
                                        )}
                                    </button>
                                </th>
                                <th className="py-2 px-4 text-left">Volume (USD)</th>
                                <th className="py-2 px-4 text-left">Trading Pairs</th>
                                <th className="py-2 px-4 text-left">Socket</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedExchanges.map(exchange => (
                                <tr key={exchange.rank} className="border-b">
                                    <td className="py-2 px-4">{exchange.rank}</td>
                                    <td className="py-2 px-4">
                                        <a href={exchange.exchangeUrl} className="text-blue-500 hover:underline">
                                            {exchange.name}
                                        </a>
                                    </td>
                                    <td className="py-2 px-4">{exchange.exchangeId.toUpperCase()}</td>
                                    <td className="py-2 px-4">{Number(exchange.percentTotalVolume) < 0.0? 0 : Number(exchange.percentTotalVolume).toFixed(3)}%</td>
                                    <td className="py-2 px-4">
                                        {exchange.volumeUsd != null ? (
                                            parseFloat(exchange.volumeUsd) >= 1000000000 ? (
                                                `$${(parseFloat(exchange.volumeUsd) / 1000000000).toFixed(2)} Billion`
                                            ) : (
                                                `$${(parseFloat(exchange.volumeUsd) / 1000000).toFixed(2)} Million`
                                            )
                                        ) : (
                                            "0"
                                        )}
                                    </td>
                                    <td className="py-2 px-4">{exchange.tradingPairs}</td>
                                    <td className="py-2 px-4">{exchange.socket ? 'Yes' : 'No'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default ExchangesList;
