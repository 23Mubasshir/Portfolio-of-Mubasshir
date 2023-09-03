import { SiHtml5, SiCss3, SiTypescript, SiJavascript, SiReact, SiTailwindcss, SiBootstrap, SiNodedotjs, SiMongodb, SiExpress, SiNextdotjs, SiFirebase, SiGithub, SiFigma, SiAdobephotoshop, SiAdobeillustrator, SiWordpress } from 'react-icons/si';
import './Skills.css'


const Skills = () => {

    return (
        <div id="skills" className=' pt-52 lg:pt-80'>
            <h1 className='mb-8 sm:leading-[50px] text-left uppercase header-text text-[40px] xs:text-[40px] md:text-[60px] lg:text-[120px]'>Technologies <span className=' sm:ps-2 text-[20px] lg:text-[40px]' >That I use</span></h1>
            <div className=' '>
            <div className='grid grid-cols-4 md:grid-cols-6 lg:grid-cols-10  text-[#353535d5]'>
            <SiHtml5 className="w-12 xs:w-20 h-12 xs:h-20 xs:mx-4 my-4" />
            <SiCss3 className="w-12 xs:w-20 h-12 xs:h-20  mx-2 xs:mx-4 my-4" />
            <SiJavascript className="w-12 xs:w-20 h-12 xs:h-20  mx-2 xs:mx-4 my-4" />
            <SiTypescript className="w-12 xs:w-20 h-12 xs:h-20  mx-2 xs:mx-4 my-4" />
            <SiReact className="w-12 xs:w-20 h-12 xs:h-20  mx-2 xs:mx-4 my-4" />
            <SiTailwindcss className="w-12 xs:w-20 h-12 xs:h-20  mx-2 xs:mx-4 my-4" />
            <SiBootstrap className="w-12 xs:w-20 h-12 xs:h-20  mx-2 xs:mx-4 my-4" />
            <SiNodedotjs className="w-12 xs:w-20 h-12 xs:h-20  mx-2 xs:mx-4 my-4" />
            <SiMongodb className="w-12 xs:w-20 h-12 xs:h-20  mx-2 xs:mx-4 my-4" />
            <SiExpress className="w-12 xs:w-20 h-12 xs:h-20  mx-2 xs:mx-4 my-4" />
            <div className='hidden lg:block'></div>
            <SiNextdotjs className="w-12 xs:w-20 h-12 xs:h-20  mx-2 xs:mx-4 my-4" />
            <SiGithub className="w-12 xs:w-20 h-12 xs:h-20  mx-2 xs:mx-4 my-4" />
            <SiFigma className="w-12 xs:w-20 h-12 xs:h-20  mx-2 xs:mx-4 my-4" />
            <SiExpress className="w-12 xs:w-20 h-12 xs:h-20  mx-2 xs:mx-4 my-4" />
            <SiFirebase className="w-12 xs:w-20 h-12 xs:h-20  mx-2 xs:mx-4 my-4" />
            <SiAdobephotoshop className="w-12 xs:w-20 h-12 xs:h-20  mx-2 xs:mx-4 my-4" />
            <div className='md:hidden block'></div>
            <SiAdobeillustrator className="w-12 xs:w-20 h-12 xs:h-20  mx-2 xs:mx-4 my-4" />
            <SiWordpress className="w-12 xs:w-20 h-12 xs:h-20  mx-2 xs:mx-4 my-4" />
            </div>
            </div>
            
        </div>
    );
};

export default Skills;