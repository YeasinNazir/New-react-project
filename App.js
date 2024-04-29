import Navbar from "./Component/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import BrandImage from "./Component/Navbar/BrandImage";
import Logobar from "./Component/Navbar/Logobar";
import Arrow from "./Component/Navbar/Arrow";
import Latestwork from "./Component/Navbar/Latestwork";
import Testimonial from "./Component/Navbar/Testimonial";
import LetsWorkTogether from "./Component/Navbar/LetsWorkTogether";





function App() {
  return (
    <div >
      <Navbar/>
      <BrandImage/>
      <Logobar/>
      <Arrow/>
      <Latestwork/>
      <Testimonial/>
      <LetsWorkTogether/>
    </div>
  );
}

export default App;
