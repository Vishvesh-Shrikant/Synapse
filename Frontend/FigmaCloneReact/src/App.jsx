import './App.css'
import Footer from './Components/Footer.jsx/Footer'
import Header from './Components/Header/Header'
import Container from './Components/PriceAndFeatures/Container'
import ProductContainer from './Components/Products/ProductContainer'
import SingleProdDeatil from './Components/SingelProd/SingleProdDeatil'

function App() {

  return (
    <>
    <div className='w-full bg-[#FAFAFA]'>
      <Header/>
      <ProductContainer/>
      <SingleProdDeatil/>
      <Container/>
      <Footer/>
    </div>
    </>
  )
}

export default App
