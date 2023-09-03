import { SiGithub, SiLinkedin, SiFacebook } from "react-icons/si";

const Footer = () => {
  return (
    <div className="pt-60">
      <footer
        className="footer footer-center p-10 bg-white text-base-content rounded-[40px] shadow-2xl my-20"
        style={{ fontFamily: "Varela Round" }}
      >
        <div className="grid xs:grid-flow-col gap-4">
          <a href="#about-me" className="link link-hover">About me</a>
          <a href="#contact" className="link link-hover">Contact</a>
          <a href="#skills" className="link link-hover">Skills</a>
          <a href="#projects" className="link link-hover">Projects</a>
        </div>
        <div>
          <h1 className="text-center text-2xl font-bold my-4">Find me on</h1>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://github.com/23Mubasshir"
              target="_blank"
              rel="noreferrer"
            >
              <SiGithub className="w-8 h-8 xs:w-12 xs:h-12 xs:mx-2" />
            </a>
            <a
              href="https://www.linkedin.com/in/mubasshir-rahaman-siddique-swachcha-10451325b/"
              target="_blank"
              rel="noreferrer"
            >
              <SiLinkedin className="w-8 h-8 xs:w-12 xs:h-12 xs:mx-2" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100009102663346"
              target="_blank"
              rel="noreferrer"
            >
              <SiFacebook className="w-8 h-8 xs:w-12 xs:h-12 xs:mx-2" />
            </a>
          </div>
        </div>
        <div>
          <p>
            Copyright © 2023 - All right reserved by Mubasshir Rahaman Siddique
            Swachcha
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
