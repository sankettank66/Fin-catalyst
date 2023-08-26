// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import NavigationBar from './NavigationBar';

// const RateComparison = () => {
//     const [exchangeRates, setExchangeRates] = useState({});
//     const [baseAmount, setBaseAmount] = useState('100');
//     const [selectedBase, setSelectedBase] = useState('USD');
//     const [selectedTarget, setSelectedTarget] = useState('EUR');

//     useEffect(() => {
//         const fetchExchangeRates = async () => {
//             try {
//                 const response = await axios.get('https://api.coincap.io/v2/rates');
//                 setExchangeRates(response.data.data);
//             } catch (error) {
//                 console.error('Error fetching exchange rates:', error);
//             }
//         };
//         fetchExchangeRates();
//     }, []);

//     const handleBaseChange = (e) => {
//         setSelectedBase(e.target.value);
//     };

//     const handleTargetChange = (e) => {
//         setSelectedTarget(e.target.value);
//     };

//     const baseCurrencyRate = exchangeRates[selectedBase] || 1;
//     const targetCurrencyRate = exchangeRates[selectedTarget] || 1;
//     const exchangeRate = targetCurrencyRate / baseCurrencyRate;

//     const convertedAmount = parseFloat(baseAmount) * exchangeRate;

//     return (
//         <>
//             <NavigationBar />
//             <div className="rate-comparison bg-gray-100 min-h-screen py-8">
//                 <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden p-6">
//                     <h2 className="text-2xl font-semibold mb-4">Exchange Rate Comparison</h2>
//                     <div className="mb-4">
//                         <label className="block mb-2 font-semibold">Base Amount:</label>
//                         <input
//                             type="number"
//                             value={baseAmount}
//                             onChange={(e) => setBaseAmount(e.target.value)}
//                             className="block w-full border rounded py-2 px-3"
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block mb-2 font-semibold">Select Base Currency:</label>
//                         <select
//                             value={selectedBase}
//                             onChange={handleBaseChange}
//                             className="block w-full border rounded py-2 px-3"
//                         >
//                             {Object.keys(exchangeRates).map((currency) => (
//                                 <option key={currency} value={currency}>
//                                     {currency}
//                                 </option>
//                             ))}
//                         </select>
//                     </div>
//                     <div className="mb-4">
//                         <label className="block mb-2 font-semibold">Select Target Currency:</label>
//                         <select
//                             value={selectedTarget}
//                             onChange={handleTargetChange}
//                             className="block w-full border rounded py-2 px-3"
//                         >
//                             {Object.keys(exchangeRates).map((currency) => (
//                                 <option key={currency} value={currency}>
//                                     {currency}
//                                 </option>
//                             ))}
//                         </select>
//                     </div>
//                     <p>
//                         Exchange Rate: {exchangeRate.toFixed(4)}
//                         <br />
//                         Converted Amount: {convertedAmount.toFixed(2)} {selectedTarget}
//                     </p>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default RateComparison;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import NavigationBar from './NavigationBar';

// const PriceComparison = () => {
//     const [exchangeRates, setExchangeRates] = useState({});

//     useEffect(() => {
//         const fetchExchangeRates = async () => {
//             try {
//                 const response = await axios.get(`https://api.coincap.io/v2/rates/`);
//                 setExchangeRates(response.data.data);
//             } catch (error) {
//                 console.error('Error fetching exchange rates:', error);
//             }
//         };
//         fetchExchangeRates();
//     }, []);

//     return (
//         <>
//             <NavigationBar />
//             <div className="exchange-rate-comparison bg-gray-100 min-h-screen py-8">
//                 <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden p-6">
//                     <h2 className="text-2xl font-semibold mb-4">Exchange Rate Comparison</h2>
//                     <table className="w-full border">
//                         <thead>
//                             <tr className="bg-gray-200">
//                                 <th className="py-2 px-4 text-center">ID</th>
//                                 <th className="py-2 px-4 text-center">Symbol</th>
//                                 <th className="py-2 px-4 text-center">Currency Symbol</th>
//                                 <th className="py-2 px-4 text-center">Exchange Rate (USD)</th>
//                                 <th className="py-2 px-4 text-center">Type</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {exchangeRates && Object.values(exchangeRates).map((rate) => (
//                                 <tr key={rate.id}>
//                                     <td className="py-2 px-4 text-center">{rate.id}</td>
//                                     <td className="py-2 px-4 text-center">{rate.symbol}</td>
//                                     <td className="py-2 px-4 text-center">{rate.currencySymbol}</td>
//                                     <td className="py-2 px-4 text-center">{rate.rateUsd}</td>
//                                     <td className="py-2 px-4 text-center">{rate.type}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default PriceComparison;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavigationBar from './NavigationBar';
import Footer from './Footer';

const PriceComparison = () => {
    const [exchangeRates, setExchangeRates] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [sortColumn, setSortColumn] = useState('id');
    const [sortOrder, setSortOrder] = useState('asc');
    const itemsPerPage = 20; // Set the number of items per page

    useEffect(() => {
        const fetchExchangeRates = async () => {
            try {
                const response = await axios.get('https://api.coincap.io/v2/rates/');
                setExchangeRates(response.data.data);
            } catch (error) {
                console.error('Error fetching exchange rates:', error);
            }
        };
        fetchExchangeRates();
    }, []);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1); // Reset to the first page when searching
    };

    const handleLoadMore = () => {
        setCurrentPage(currentPage + 1);
    };

    const handleSort = (column) => {
        if (column === sortColumn) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortColumn(column);
            setSortOrder('asc');
        }
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const filteredExchangeRates = exchangeRates.filter((rate) =>
        rate.id.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedExchangeRates = [...filteredExchangeRates].sort((a, b) => {
        const aValue = a[sortColumn];
        const bValue = b[sortColumn];

        if (sortColumn === 'rateUsd') {
            return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
        } else {
            return sortOrder === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
        }
    });

    const exchangeRatesToDisplay = sortedExchangeRates.slice(startIndex, endIndex);

    return (
        <>
            <NavigationBar />
            <div className="exchange-rate-comparison bg-gray-100 min-h-screen py-8">
                <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden p-6">
                    <h2 className="text-2xl font-semibold mb-4">Exchange Rate Comparison</h2>
                    <div className="mb-4">
                        <label className="block mb-2 font-semibold">Search ID:</label>
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className="block w-full border rounded py-2 px-3"
                            placeholder="Search ID..."
                        />
                    </div>
                    <table className="w-full border">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="py-2 px-4 text-center">
                                    <button onClick={() => handleSort('id')} className="cursor-pointer">
                                        ID {sortColumn === 'id' && (sortOrder === 'asc' ? '▲' : '▼')}
                                    </button>
                                </th>
                                <th className="py-2 px-4 text-center">
                                    <button onClick={() => handleSort('symbol')} className="cursor-pointer">
                                        Symbol {sortColumn === 'symbol' && (sortOrder === 'asc' ? '▲' : '▼')}
                                    </button>
                                </th>
                                <th className="py-2 px-4 text-center">
                                    
                                        Currency Symbol 
                                    
                                </th>
                                <th className="py-2 px-4 text-center">
                                    <button onClick={() => handleSort('rateUsd')} className="cursor-pointer">
                                        Exchange Rate (USD) {sortColumn === 'rateUsd' && (sortOrder === 'asc' ? '▲' : '▼')}
                                    </button>
                                </th>
                                <th className="py-2 px-4 text-center">
                                    <button onClick={() => handleSort('type')} className="cursor-pointer">
                                        Type {sortColumn === 'type' && (sortOrder === 'asc' ? '▲' : '▼')}
                                    </button>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {exchangeRatesToDisplay.map((rate) => (
                                <tr key={rate.id}>
                                    <td className="py-2 px-4 text-center border">{rate.id}</td>
                                    <td className="py-2 px-4 text-center border">{String(rate.symbol)}</td>
                                    <td className="py-2 px-4 text-center border">{rate.currencySymbol}</td>
                                    <td className="py-2 px-4 text-center border">{rate.rateUsd}</td>
                                    <td className="py-2 px-4 text-center border">{rate.type}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {sortedExchangeRates.length > endIndex && (
                        <div className="load-more-container mt-4 flex justify-center">
                            <button
                                className="load-more-btn btn bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                                onClick={handleLoadMore}
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

export default PriceComparison;
