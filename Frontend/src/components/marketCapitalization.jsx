// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import NavigationBar from './NavigationBar';

// function MarketCapitalization() {
//     const [marketCapData, setMarketCapData] = useState([]);

//     useEffect(() => {
//         fetchMarketCapData();
//     }, []);

//     const fetchMarketCapData = async () => {
//         try {
//             const response = await axios.get('https://api.coincap.io/v2/assets');
//             setMarketCapData(response.data.data);
//         } catch (error) {
//             console.error('Error fetching market cap data:', error);
//         }
//     };

//     return (<>
//     <NavigationBar/>
//         <div className="bg-gray-100 min-h-screen py-8">
//             <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden p-6">
//                 <h2 className="text-2xl font-semibold mb-4">Cryptocurrency Market Capitalization</h2>
//                 <table className="w-full border">
//                     <thead>
//                         <tr className="bg-gray-200">
//                             <th className="py-2 px-4 text-center">Name</th>
//                             <th className="py-2 px-4 text-center">Rank</th>
//                             <th className="py-2 px-4 text-center">Symbol</th>
//                             <th className="py-2 px-4 text-center">Market Cap (USD)</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {marketCapData.map(crypto => (
//                             <tr key={crypto.id} className="border-t">
//                                 <td className="py-2 px-4 text-center">{crypto.rank}</td>
//                                 <td className="py-2 px-4 text-center">{crypto.name}</td>
//                                 <td className="py-2 px-4 text-center">{crypto.symbol}</td>
//                                 <td className="py-2 px-4 text-center">${Number(crypto.marketCapUsd).toLocaleString()}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     </>
//     );
// }

// export default MarketCapitalization;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavigationBar from './NavigationBar';
import Footer from './Footer';

const MarketCapitalization = () => {
    const [marketCapData, setMarketCapData] = useState([]);
    const [sortColumn, setSortColumn] = useState('rank');
    const [sortOrder, setSortOrder] = useState('asc');
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 50; // Set the number of items per page
    const [filteredMarketCapData, setFilteredMarketCapData] = useState([]);

    const loadMore = () => {
        setCurrentPage(currentPage + 1);
    };

    const fetchMarketCapData = async (depth) => {
        if (depth === 0) {
            setLoading(false);
            return;
        }

        try {
            const response = await axios.get('https://api.coincap.io/v2/assets?limit=2000');
            const newMarketCapData = response.data.data;
            setMarketCapData(newMarketCapData);
            setFilteredMarketCapData(newMarketCapData);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching market cap data:', error);
            setLoading(false);
        }

        // Recursive call with reduced depth
        await fetchMarketCapData(depth - 1);
    };

    useEffect(() => {
        const interval = setInterval(fetchMarketCapData, 10000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setLoading(true);
        setCurrentPage(1);
        fetchMarketCapData(5);
    }, []);

    useEffect(() => {
        const filteredData = marketCapData.filter(crypto => crypto.name.toUpperCase().includes(searchTerm.toUpperCase()));
        setFilteredMarketCapData(filteredData);
    }, [searchTerm, marketCapData]);

    const handleSort = (column) => {
        if (column === sortColumn) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortColumn(column);
            setSortOrder('asc');
        }
    };

    const sortedMarketCapData = [...filteredMarketCapData].sort((a, b) => {
        if (sortColumn === 'name' || sortColumn === 'symbol') {
            return sortOrder === 'asc'
                ? a[sortColumn].localeCompare(b[sortColumn])
                : b[sortColumn].localeCompare(a[sortColumn]);
        }
        if (sortColumn === 'rank') {
            return sortOrder === 'asc'
                ? parseInt(a[sortColumn]) - parseInt(b[sortColumn])
                : parseInt(b[sortColumn]) - parseInt(a[sortColumn]);
        }
        return 0;
    });

    const currentMarketCapData = sortedMarketCapData.slice(0, currentPage * itemsPerPage);

    const totalPages = Math.ceil(sortedMarketCapData.length / itemsPerPage);

    return (
        <>
            <NavigationBar />
            <div className="bg-gray-100 min-h-screen py-8">
                <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden p-6">
                    <h2 className="text-2xl font-semibold mb-4 text-center">Cryptocurrency Market Capitalization</h2>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Search by Name:
                        </label>
                        <input
                            type="text"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <table className="w-full border">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th className="py-2 px-4 text-center">
                                        <button
                                            onClick={() => handleSort('rank')}
                                            className="flex items-center text-center focus:outline-none"
                                        >
                                            Rank{' '}
                                            {sortColumn === 'rank' && (
                                                <span className="ml-1">
                                                    {sortOrder === 'asc' ? '▲' : '▼'}
                                                </span>
                                            )}
                                        </button>
                                    </th>
                                    <th className="py-2 px-4 text-center">
                                        <button
                                            onClick={() => handleSort('name')}
                                            className="flex items-center focus:outline-none text-center"
                                        >
                                            Name{' '}
                                            {sortColumn === 'name' && (
                                                <span className="ml-1">
                                                    {sortOrder === 'asc' ? '▲' : '▼'}
                                                </span>
                                            )}
                                        </button>
                                    </th>
                                    <th className="py-2 px-4 text-center">
                                        <button
                                            onClick={() => handleSort('symbol')}
                                            className="flex items-center justify-center focus:outline-none"
                                        >
                                            Symbol{' '}
                                            {sortColumn === 'symbol' && (
                                                <span className="ml-1">
                                                    {sortOrder === 'asc' ? '▲' : '▼'}
                                                </span>
                                            )}
                                        </button>
                                    </th>
                                    <th className="py-2 px-4 text-center">
                                        Market Cap (USD)
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {currentMarketCapData.map(crypto => (
                                    <tr key={crypto.id} className="border-t">
                                        <td className="py-2 px-4 text-left border">{crypto.rank}</td>
                                        <td className="py-2 px-4 text-left border">{crypto.name}</td>
                                        <td className="py-2 px-4 text-left border">{crypto.symbol}</td>
                                        <td className="py-2 px-4 text-left border">
                                            {parseFloat(crypto.volumeUsd24Hr) ?
                                                (parseFloat(crypto.volumeUsd24Hr) >= 1000000000 ?
                                                    `$${(parseFloat(crypto.volumeUsd24Hr) / 1000000000).toFixed(2)} Billion` :
                                                    `$${(parseFloat(crypto.volumeUsd24Hr) / 1000000).toFixed(2)} Million`
                                                ) : '$0'}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                    {currentPage < totalPages && (
                        <div className="flex justify-center mt-4">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                                onClick={loadMore}
                            >
                                Load More
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default MarketCapitalization;
