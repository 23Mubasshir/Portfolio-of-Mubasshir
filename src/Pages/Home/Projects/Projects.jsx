import img1 from "../../../assets/1.png";
import img2 from "../../../assets/2.png";
import img3 from "../../../assets/3.png";
import "./projects.css";

const Projects = () => {
  return (
    <div id="projects" className="pt-44 lg:pt-96">
      <h1 className="mb-8 leading-[50px] text-left uppercase header-text text-[40px] xs:text-[50px] md:text-[60px] lg:text-[120px]">
        <span className="text-[20px] xs:text-[30px]  mr-2 mx:mr-8">Some of my </span>
        Projects{" "}
      </h1>

      <div className="image my-8 lg:my-32">
        <img className="image__img" src={img2} alt="" />
        <div className="image__overlay image__overlay--primary">
          <div className="p-4 md:p-8 lg:p-36 lg:mt-12">
            <h1
              className="text-[15px] 
            xs:text-[20px] xs:pb-1 lg:text-[80px]"
            >
              Chit-Chat Academy
            </h1>
            <p className="text-[10px] xs:text-[15px] pb-2 lg:text-[20px]">
              This Website is mainly a language learning platform, where users
              can take different classes of instructors.
            </p>
            <p className="hidden sm:block sm:text-[9px] md:text-[10px] lg:text-[15px] lg:pt-8">
              This website is built with react js and firebase is used as
              authentication. Node.js and mongoDB are used to load all the data
              for the website. This project is mainly focused on different
              authorization. There are three types of users. Instructors and
              admin are among them. In the Admin Dashboard admin can manage
              users and delete or make a user instructor. Also there are managed
              classes where the admin can approve or deny or send feedback to
              the instructor if the classes need improvement. Usually after
              login the user is set as a normal user. Only an admin can make a
              user instructor. In the Instructor Dashboard the instructor can
              add. Update and see their classes status and in the user dashboard
              users can see their selected classes.
            </p>

            <a
              href="https://assignment-12-19d97.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="xs:my-2 lg:my-6 btn btn-sm md:btn-md lg:btn-lg bg-transparent text-[8px] lg:text-[18px] text-white hover:text-black">
                Live link
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="image my-8 lg:my-32">
        <img className="image__img" src={img3} alt="" />
        <div className="image__overlay image__overlay--primary">
          <div className="p-4 md:p-8 lg:p-36 lg:mt-12">
            <h1
              className="text-[15px] 
            xs:text-[20px] xs:pb-1 lg:text-[80px]"
            >
              Tokyo Kitchen
            </h1>
            <p className="text-[10px] xs:text-[15px] pb-2 lg:text-[20px]">
              This project is mainly a Japanese Recipe site named Tokyo Kitchen
              where chefs posts there recipes and blogs. There are some best
              features of my project:
            </p>
            <p className="hidden sm:block sm:text-[9px] md:text-[10px] lg:text-[15px] lg:pt-8">
              On the home page there initially there are Chefs information also
              there is a view recipe button it takes user to that chef&apos;s
              recipe page . There is a sign in and Sign up button on the header
              user can sign up using github and google account also can sign up
              with name, photoURL, email and password. On the Home page there is
              a section called our services which tells the purpose of the
              website. Chef&apos;s recipes are private protected to visit the
              recipe page user have to log into the site. This website is build
              on react and the home page is responsive also firebase is used as
              a backend. A server is used to load all the data for the website.
            </p>

            <a
              href="https://assignment-10-client-ee72a.web.app"
              target="_blank"
              rel="noreferrer"
            >
              <button className="xs:my-2 lg:my-6 btn btn-sm md:btn-md lg:btn-lg bg-transparent text-[8px] lg:text-[18px] text-white hover:text-black">
                Live link
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="image my-8 lg:my-32">
        <img className="image__img" src={img1} alt="" />
        <div className="image__overlay image__overlay--primary">
          <div className="p-4 md:p-8 lg:p-36 lg:mt-12">
            <h1
              className="text-[15px] 
            xs:text-[20px] xs:pb-1 lg:text-[80px]"
            >
              Anime ToyWorld
            </h1>
            <p className="text-[10px] xs:text-[15px] pb-2 lg:text-[20px]">
            This project is mainly an action figure selling site named Anime
              ToyWorld, where sellers post their items to sell.
            </p>
            <p className="hidden sm:block sm:text-[9px] md:text-[10px] lg:text-[15px] lg:pt-8">
            There is an add toys page where a seller can post the product.
              Also, the seller can update or delete that product. On the All
              Toys page, any user can see all the products and search for the
              products. There is a sign-in and sign-up button on the header.
              Users can sign up using their Google account or with their name,
              photo URL, email, and password. On the home page, there is a
              banner, status, gallery, best seller, and why we are the best
              section. Also, a logo has been used to make the website more
              attractive. There are some pages like my toys, add toys, and view
              details which are protected routes. Users have to login to access
              those pages. This website is built on React, and the home page is
              responsive. Firebase is also used for authentication. MongoDB is
              used to load all the data for the website.
            </p>

            <a
              href="https://assignment-11-client-1a903.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="xs:my-2 lg:my-6 btn btn-sm md:btn-md lg:btn-lg bg-transparent text-[8px] lg:text-[18px] text-white hover:text-black">
                Live link
              </button>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Projects;
