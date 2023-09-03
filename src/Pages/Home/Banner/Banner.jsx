import "./Banner.css";
import { FaDownload } from 'react-icons/fa';
import { BiSolidMessageDots } from 'react-icons/bi';

const Banner = () => {
  return (
    <div>
      <div className="hero mt-52 md:mt-64 mb-44 bg-transparent">
        <div className="hero-content text-center p-0">
          <div className="max-w-full">
            <h1 className="text-style  text-[50px] md:text-[80px]  lg:text-[120px] font-thin text-black text-opacity-80 leading-10 tracking-[-0.1em]">
              Hi!&nbsp; I&apos;m
            </h1>

            <h1 className="text-style text-black text-[60px] md:text-[75px]  lg:text-[130px] font-bold tracking-[-0.07em]">
              Mubasshir
            </h1>

            <h1 className="text-style text-[50px] md:text-[80px] lg:text-[120px] space-x-[-15] text-black text-opacity-80 mb-12 md:mb-24 leading-[60px]  md:leading-[80px] tracking-[-0.08em]">
              A Web Developer
            </h1>

            <a
              href="https://drive.google.com/u/0/uc?id=1_Ht1qtH5XMoZvBVIRuhRPzpFpNuQxNMW&export=download"
              download target="_blank"
              rel="noreferrer"
            >
              <button className="button-90 w-1/2 md:w-2/5 mx-5 btn rounded-full li-style css-background-2 shadow-2xl">
              <FaDownload /> Resume
              </button>
            </a>

            <a href="#contact">
            <button className="button-90  w-1/2 md:w-2/5 mx-5 my-4 btn rounded-full li-style css-background-2 shadow-2xl ">
             <BiSolidMessageDots className="w-[16px] h-[16px]"/> Let&apos;s Talk
            </button>
            </a>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
