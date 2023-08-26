// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import NavigationBar from './NavigationBar';
// import './PriceComparison.css'
// const Loading = () => (
//     <>
//         <div className="loader-container">
//             <div className="loader"></div>
//             Loading
//         </div>
//     </>
// );
// const PriceTracker = () => {
//     const [cryptoPrices, setCryptoPrices] = useState([]);
//     const [sortColumn, setSortColumn] = useState('rank');
//     const [sortOrder, setSortOrder] = useState('asc');
//     const [searchTerm, setSearchTerm] = useState('');
//     const [individualCryptoPrices, setIndividualCryptoPrices] = useState({});
//     const [loading, setLoading] = useState(true);
//     const [currentPage, setCurrentPage] = useState(1);
//     const itemsPerPage = 50; // Set the number of items per page
//     const lastItemIndex = currentPage * itemsPerPage;

//     const loadMore = () => {
//         setCurrentPage(currentPage + 1);
//     };
//     const fetchCryptoPrices = async (depth) => {
//         if (depth === 0) {
//             setLoading(false);
//             return;
//         }

//         try {
//             const response = await axios.get('https://api.coincap.io/v2/assets?limit=500');
//             const newPrices = response.data.data;
//             setCryptoPrices(newPrices);
//             newPrices.forEach((crypto) => {
//                 updateIndividualCryptoPrice(crypto.id, crypto.priceUsd);
//             });
//             setLoading(false);
//         } catch (error) {
//             console.error('Error fetching crypto prices:', error);
//         }

//         // Recursive call with reduced depth
//         await fetchCryptoPrices(depth - 1);
//     };

//     useEffect(() => {
//         const interval = setInterval(fetchCryptoPrices, 1000);
//         return () => clearInterval(interval);
//     }, [fetchCryptoPrices]);

//     useEffect(() => {
//         fetchCryptoPrices(maxDepth);
//     }, [fetchCryptoPrices]);

//     const maxDepth = 10; // Set the maximum depth of recursive calls
//     fetchCryptoPrices(maxDepth);


//     const handleSort = (column) => {
//         if (column === sortColumn) {
//             setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
//         } else {
//             setSortColumn(column);
//             setSortOrder('asc');
//         }
//     };
//     const updateIndividualCryptoPrice = (cryptoId, newPrice) => {
//         setIndividualCryptoPrices((prevState) => ({
//             ...prevState,
//             [cryptoId]: newPrice,
//         }));
//     };
//     const filteredCryptoPrices = cryptoPrices.filter((crypto) =>
//         crypto.name.toUpperCase().includes(searchTerm.toUpperCase())
//     );

//     const sortedCryptoPrices = [...filteredCryptoPrices].sort((a, b) => {
//         if (sortColumn === 'name' || sortColumn === 'symbol') {
//             return sortOrder === 'asc'
//                 ? a[sortColumn].localeCompare(b[sortColumn])
//                 : b[sortColumn].localeCompare(a[sortColumn]);
//         }
//         if (sortColumn === 'rank' || sortColumn === 'volumeUsd24Hr') {
//             return sortOrder === 'asc'
//                 ? parseFloat(a[sortColumn]) - parseFloat(b[sortColumn])
//                 : parseFloat(b[sortColumn]) - parseFloat(a[sortColumn]);
//         }
//         if (sortColumn === 'priceUsd') {
//             return sortOrder === 'asc'
//                 ? parseFloat(a[sortColumn]) - parseFloat(b[sortColumn])
//                 : parseFloat(b[sortColumn]) - parseFloat(a[sortColumn]);
//         }
//         if (sortColumn === 'changePercent24Hr') {
//             return sortOrder === 'asc'
//                 ? parseFloat(a[sortColumn]) - parseFloat(b[sortColumn])
//                 : parseFloat(b[sortColumn]) - parseFloat(a[sortColumn]);
//         }
//         return 0;
//     });
//     const currentCryptoPrices = sortedCryptoPrices.slice(0, lastItemIndex);

//     const totalPages = Math.ceil(sortedCryptoPrices.length / itemsPerPage);
//     return (
//         <>
//             <React.Fragment>

//                 <NavigationBar />
//                 <div className="bg-gray-100 min-h-screen py-8">
//                     <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
//                         <h2 className="text-2xl font-bold px-6 py-4 bg-gray-200 text-center">
//                             Real-time Cryptocurrency Prices
//                         </h2>
//                         <div className="px-6 py-4">
//                             <div className="mb-4">
//                                 <label className="block text-gray-700 text-sm font-bold mb-2">
//                                     Search by Name:
//                                 </label>
//                                 <input
//                                     type="text"
//                                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                     placeholder="Search..."
//                                     value={searchTerm}
//                                     onChange={(e) => setSearchTerm(e.target.value)}
//                                 />
//                             </div>
//                         </div>

//                         {/* </div> */}
//                         {loading ? <Loading /> : (
//                             <table className="w-full">
//                                 <thead className="bg-gray-100 text-center">
//                                     <tr>
//                                         <th className="py-3 px-4 text-center">
//                                             <button
//                                                 onClick={() => handleSort('rank')}
//                                                 className="flex items-center text-center focus:outline-none"
//                                             >
//                                                 RANK{' '}
//                                                 {sortColumn === 'rank' && (
//                                                     <span className="ml-1">
//                                                         {sortOrder === 'asc' ? '▲' : '▼'}
//                                                     </span>
//                                                 )}
//                                             </button>
//                                         </th>
//                                         <th className="py-3 px-4 text-left">
//                                             <button
//                                                 onClick={() => handleSort('name')}
//                                                 className="flex items-center focus:outline-none"
//                                             >
//                                                 NAME{' '}
//                                                 {sortColumn === 'name' && (
//                                                     <span className="ml-1">
//                                                         {sortOrder === 'asc' ? '▲' : '▼'}
//                                                     </span>
//                                                 )}
//                                             </button>
//                                         </th>
//                                         <th className="py-3 px-4 text-center">
//                                             <button
//                                                 onClick={() => handleSort('symbol')}
//                                                 className="flex items-center justify-center focus:outline-none"
//                                             >
//                                                 SYMBOL{' '}
//                                                 {sortColumn === 'symbol' && (
//                                                     <span className="ml-1">
//                                                         {sortOrder === 'asc' ? '▲' : '▼'}
//                                                     </span>
//                                                 )}
//                                             </button>
//                                         </th>
//                                         <th className="py-3 px-4 text-center">
//                                             <button
//                                                 onClick={() => handleSort('priceUsd')}
//                                                 className="flex items-center focus:outline-none"
//                                             >
//                                                 PRICE (USD){' '}
//                                                 {sortColumn === 'priceUsd' && (
//                                                     <span className="ml-1">
//                                                         {sortOrder === 'asc' ? '▲' : '▼'}
//                                                     </span>
//                                                 )}
//                                             </button>
//                                         </th>
//                                         <th className="py-3 px-4 text-center">
//                                             <button
//                                                 onClick={() => handleSort('volumeUsd24Hr')}
//                                                 className="flex items-center focus:outline-none"
//                                             >
//                                                 VOLUME 24HR (USD){' '}
//                                                 {sortColumn === 'volumeUsd24Hr' && (
//                                                     <span className="ml-1">
//                                                         {sortOrder === 'asc' ? '▲' : '▼'}
//                                                     </span>
//                                                 )}
//                                             </button>
//                                         </th>
//                                         <th className="py-3 px-4 text-center">
//                                             <button
//                                                 onClick={() => handleSort('changePercent24Hr')}
//                                                 className="flex items-center focus:outline-none"
//                                             >
//                                                 CHANGE (24H){' '}
//                                                 {sortColumn === 'changePercent24Hr' && (
//                                                     <span className="ml-1">
//                                                         {sortOrder === 'asc' ? '▲' : '▼'}
//                                                     </span>
//                                                 )}
//                                             </button>
//                                         </th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {currentCryptoPrices.map((crypto) => (
//                                         <tr
//                                             key={crypto.id}
//                                         >
//                                             <td className="py-2 px-4 text-left border">{crypto.rank}</td>
//                                             <td className="py-2 px-4 text-left border">{crypto.name}</td>
//                                             <td className="py-2 px-4 text-left border">{crypto.symbol}</td>
//                                             <td className="py-2 px-4 text-left border">
//                                                 ${parseFloat(
//                                                     individualCryptoPrices[crypto.id] || crypto.priceUsd
//                                                 ) < 2
//                                                     ? parseFloat(
//                                                         individualCryptoPrices[crypto.id] || crypto.priceUsd
//                                                     ).toFixed(5)
//                                                     : parseFloat(
//                                                         individualCryptoPrices[crypto.id] || crypto.priceUsd
//                                                     ).toFixed(2)}
//                                             </td>
//                                             <td className="py-2 px-4 text-left border">
//                                                 {parseFloat(crypto.volumeUsd24Hr) >= 1000000000 ?
//                                                     `$${(parseFloat(crypto.volumeUsd24Hr) / 1000000000).toFixed(2)} Billion` :
//                                                     `$${(parseFloat(crypto.volumeUsd24Hr) / 1000000).toFixed(2)} Million`}
//                                             </td>
//                                             <td className="py-2 px-4 text-center border font-bold" style={{
//                                                 color: parseFloat(crypto.changePercent24Hr) < 0 ? 'red' : 'green',
//                                                 background: parseFloat(crypto.changePercent24Hr) < 0 ? 'lightcoral' : 'lightgreen'
//                                             }}
//                                             >
//                                                 {parseFloat(crypto.changePercent24Hr).toFixed(2)}%
//                                             </td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>)}
//                     </div>
//                     {currentPage < totalPages && (
//                         <div className="load-more-container mt-4 flex justify-center">
//                             <button
//                                 className="load-more-btn btn bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
//                                 onClick={loadMore}
//                             >
//                                 Load More
//                             </button>
//                         </div>
//                     )}
//                 </div>
//             </React.Fragment>
//         </>
//     );
// };

// export default PriceTracker;

import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import NavigationBar from './NavigationBar';
import './PriceComparison.css';
import { Link } from 'react-router-dom'

const Loading = () => (
  <div className="loader-container">
    <div className="loader"></div>
    Loading
  </div>
);

const PriceTracker = () => {
  const [cryptoPrices, setCryptoPrices] = useState([]);
  const [sortColumn, setSortColumn] = useState('rank');
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [individualCryptoPrices, setIndividualCryptoPrices] = useState({});
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 50;
  const lastItemIndex = currentPage * itemsPerPage;
  const maxDepth = 10;

  const fetchCryptoPrices = async (depth) => {
    if (depth === 0) {
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get('https://api.coincap.io/v2/assets?limit=2000');
      const newPrices = response.data.data;
      setCryptoPrices(newPrices);

      const updatedCryptoPrices = {};
      newPrices.forEach((crypto) => {
        updatedCryptoPrices[crypto.id] = crypto.priceUsd;
      });
      setIndividualCryptoPrices((prevState) => ({
        ...prevState,
        ...updatedCryptoPrices,
      }));

      setLoading(false);
    } catch (error) {
      console.error('Error fetching crypto prices:', error);
    }

    // Recursive call with reduced depth
    await fetchCryptoPrices(depth - 1);
  };

  useEffect(() => {
    const interval = setInterval(fetchCryptoPrices, 5000); // Fetch every 5 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetchCryptoPrices(maxDepth);
  }, []);

  const loadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortColumn(column);
      setSortOrder('asc');
    }
  };

  const filteredCryptoPrices = useMemo(
    () => cryptoPrices.filter((crypto) => crypto.name.toUpperCase().includes(searchTerm.toUpperCase())),
    [cryptoPrices, searchTerm]
  );
  const partition = (array, low, high, sortColumn, sortOrder) => {
    const pivot = array[high][sortColumn];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      if (
        (sortOrder === 'asc' && array[j][sortColumn] <= pivot) ||
        (sortOrder === 'desc' && array[j][sortColumn] >= pivot)
      ) {
        i++;
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    return i + 1;
  };

  const quickSort = (array, low, high, sortColumn, sortOrder) => {
    if (low < high) {
      const partitionIndex = partition(array, low, high, sortColumn, sortOrder);
      quickSort(array, low, partitionIndex - 1, sortColumn, sortOrder);
      quickSort(array, partitionIndex + 1, high, sortColumn, sortOrder);
    }
  };

  const sortedCryptoPrices = useMemo(() => {
    const clonedArray = [...filteredCryptoPrices];
    quickSort(clonedArray, 0, clonedArray.length - 1, sortColumn, sortOrder);
    return clonedArray;
  }, [filteredCryptoPrices, sortColumn, sortOrder]);



  const currentCryptoPrices = sortedCryptoPrices.slice(0, lastItemIndex);

  const totalPages = Math.ceil(sortedCryptoPrices.length / itemsPerPage);

  return (
    <>
      <NavigationBar />
      <div className="bg-gray-100 min-h-screen py-8">
        <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <h2 className="text-2xl font-bold px-6 pt-4 p bg-gray-200 text-center">
            Real-time Cryptocurrency Prices
          </h2>
          <p className='text-red-500 text-small pb-2 bg-gray-200 text-center'> <sub>*</sub>Prices Updated every 5 seconds</p>
          <div className="px-6 py-4">
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
          </div>
          {/* </div> */}
          {loading ? <Loading /> : (
            <table className="w-full">
              <thead className="bg-gray-100 text-center">
                <tr>
                  <th className="py-3 px-4 text-center">
                    <button
                      onClick={() => handleSort('rank')}
                      className="flex items-center text-center focus:outline-none"
                    >
                      RANK{' '}
                      {sortColumn === 'rank' && (
                        <span className="ml-1">
                          {sortOrder === 'asc' ? '▲' : '▼'}
                        </span>
                      )}
                    </button>
                  </th>
                  <th className="py-3 px-4 text-left">
                    <button
                      onClick={() => handleSort('name')}
                      className="flex items-center focus:outline-none"
                    >

                      NAME{' '}

                      {sortColumn === 'name' && (
                        <span className="ml-1">
                          {sortOrder === 'asc' ? '▲' : '▼'}
                        </span>
                      )}
                    </button>
                  </th>
                  <th className="py-3 px-4 text-center">
                    <button
                      onClick={() => handleSort('symbol')}
                      className="flex items-center justify-center focus:outline-none"
                    >
                      SYMBOL{' '}
                      {sortColumn === 'symbol' && (
                        <span className="ml-1">
                          {sortOrder === 'asc' ? '▲' : '▼'}
                        </span>
                      )}
                    </button>
                  </th>
                  <th className="py-3 px-4 text-center">
                    <button
                      onClick={() => handleSort('priceUsd')}
                      className="flex items-center focus:outline-none"
                    >
                      PRICE (USD){' '}
                      {sortColumn === 'priceUsd' && (
                        <span className="ml-1">
                          {sortOrder === 'asc' ? '▲' : '▼'}
                        </span>
                      )}
                    </button>
                  </th>
                  <th className="py-3 px-4 text-center">
                    <button
                      onClick={() => handleSort('volumeUsd24Hr')}
                      className="flex items-center focus:outline-none"
                    >
                      VOLUME 24HR (USD){' '}
                      {sortColumn === 'volumeUsd24Hr' && (
                        <span className="ml-1">
                          {sortOrder === 'asc' ? '▲' : '▼'}
                        </span>
                      )}
                    </button>
                  </th>
                  <th className="py-3 px-4 text-center">
                    <button
                      onClick={() => handleSort('changePercent24Hr')}
                      className="flex items-center focus:outline-none"
                    >
                      CHANGE (24H){' '}
                      {sortColumn === 'changePercent24Hr' && (
                        <span className="ml-1">
                          {sortOrder === 'asc' ? '▲' : '▼'}
                        </span>
                      )}
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentCryptoPrices.map((crypto) => (
                  <tr
                    key={crypto.id}
                  >
                    <td className="py-2 px-4 text-left border">{crypto.rank}</td>
                    <td className="py-2 px-4 text-left border">
                      {crypto.name}
                    </td>
                    <td className="py-2 px-4 text-left border">{crypto.symbol}</td>
                    <td className="py-2 px-4 text-left border">
                      ${parseFloat(
                        individualCryptoPrices[crypto.id] || crypto.priceUsd
                      ) < 2
                        ? parseFloat(
                          individualCryptoPrices[crypto.id] || crypto.priceUsd
                        ).toFixed(5)
                        : parseFloat(
                          individualCryptoPrices[crypto.id] || crypto.priceUsd
                        ).toFixed(2)}
                    </td>
                    <td className="py-2 px-4 text-left border">
                      {parseFloat(crypto.volumeUsd24Hr) >= 1000000000 ?
                        `$${(parseFloat(crypto.volumeUsd24Hr) / 1000000000).toFixed(2)} Billion` :
                        `$${(parseFloat(crypto.volumeUsd24Hr) / 1000000).toFixed(2)} Million`}
                    </td>
                    <td className="py-2 px-4 text-center border font-bold" style={{
                      color: parseFloat(crypto.changePercent24Hr) < 0 ? 'red' : 'green',
                      background: parseFloat(crypto.changePercent24Hr) < 0 ? 'lightcoral' : 'lightgreen'
                    }}
                    >
                      {parseFloat(crypto.changePercent24Hr).toFixed(2)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>)}
        </div>
        {currentPage < totalPages && (
          <div className="load-more-container mt-4 flex justify-center">
            <button
              className="load-more-btn btn bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
              onClick={loadMore}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default PriceTracker;
