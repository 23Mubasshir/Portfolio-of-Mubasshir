import img from "../../../assets/Profile Pic.jpg";
import "./AboutMe.css"

const AboutMe = () => {
  return (
    <div id="about-me" className="md:mx-24 lg:mx-0 pt-40 lg:pt-64">
      <div className="lg:grid lg:grid-cols-3 gap-10 mb-32">
        <div className="" >
          <img src={img} className="w-1/2 lg:w-full mx-auto rounded-full border-[10px] border-white image-hover"alt=""  />
        </div>
        <div className="col-span-2 p-4">
          <h1 className="w-5/6 md:w-full text-[50px] md:text-[60px] font-bold text-style-profile mt-8 lg:mt-20 ">
            I&apos;m a Full Stack web developer.
          </h1>
          <h2 className="w-5/6 md:w-full  text-[25px] md:text-[30px] font-bold text-style-paragraph mt-6" >Hey there! I&apos;m Mubasshir, a passionate web developer who loves creating unique and attractive web applications. I&apos;ve build many full-stack websites from designing to deploying. </h2>
          <h2 className=" w-5/6 md:w-full  text-[25px] md:text-[30px] font-bold text-style-paragraph mt-6">I am currently working with MERN stack technologies. But as a tech enthusiast I love to learn and explore new technologies.</h2>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
