import Axios from "./axios/Axios"
import Chart1 from "./chart/Chart1"
import Daisynav from "./daisyNav/Daisynav"
import Navber from "./Owannav/Navber"
import Pricing from "./priceing/Pricing"



function App() {
  
  return (
    <>
    <Daisynav/>
    <Navber/>
      <h1 className='font-semibold text-blue-600'>tailwind setup</h1>
      <h1 className="text-6xl text-center mb-5">Best Deal For You</h1>
      <Pricing/>
      <Chart1/>
      <Axios/>
    </>
  )
}

export default App
