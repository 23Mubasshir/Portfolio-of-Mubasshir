import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Pages/Home/Navbar/Navbar";
import Footer from "./Pages/Home/Footer/Footer";
// import video from "../src/assets/liquid.mp4";

function App() {
  return (
    <>
      <div className="gradient-background">
        <div className="p-5 mx-auto md:w-4/5 flex-col justify-center items-center">
          <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
