
import './App.css'
import CandleData from './components/CandleData'
import ExchangesList from './components/ExchangeList'
import PriceTracker from './components/PriceTracker'
import MarketCapitalization from './components/marketCapitalization'
import PriceComparison from './components/priceComparison'
import Dashboard from './pages/Dashboard'
import Page from './pages/Page'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { Route, Routes} from 'react-router-dom'
function App() {
  return (
   <>
    <Routes>
      <Route path="/" element={<Page/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path='/signup' element={<SignUp />} /> 
        <Route path='/login' element={<Login />} /> 
        <Route path="/pricetracker" element={<PriceTracker/>}/>
        <Route path="/pricecomparison" element={<PriceComparison/>}/>
        <Route path="/marketcap" element={<MarketCapitalization/>}/>
        <Route path="/exchangelist" element={<ExchangesList/>}/>
        <Route path="/candledata" element={<CandleData/>}/>
        
    </Routes>
   </>
  )
}

export default App
