import { useRef } from "react";
import "./Contact.css";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l0wcpzp', 'template_u3ripde', form.current, 'LbXOQJZuGgtsXab-i')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Contacting you soon',
        background: 'url(/src/assets/bg.png)',
        showConfirmButton: false,
        timer: 1500
      })
  };

  return (
    <div id="contact" className="pt-60">
      <div className="bg-white py-24 px-4 md:px-12 rounded-[40px] shadow-2xl grid lg:grid-cols-2 gap-10  text-[30px] ">
      <div className="text-center contact-text">
        <h1 className="mt-2 text-[40px] mb-12">Contact Info</h1>
        <h1 className="mt-4 leading-[50px]">Email : 23mubasshir@gmail.com</h1>
        <h1 className="mt-[32px] leading-[50px]">
          Whatsapp/Phone : +08801744766766
        </h1>
        <a 
              href="https://drive.google.com/u/0/uc?id=1_Ht1qtH5XMoZvBVIRuhRPzpFpNuQxNMW&export=download"
              download target="_blank"
              rel="noreferrer"
            >
              <button className="mt-[85px] button-90 w-2/5 mx-5 btn rounded-full li-style css-background shadow-2xl ">
                Download Resume
              </button>
            </a>
      </div>
      <form  ref={form} onSubmit={sendEmail}>
        <div className="form-control mt-[92px] md:mt-0">
          <label className="label">
            <span className="contact-text label-text text-[40px] mb-8 ">
              Let&apos;s Talk
            </span>
          </label>

          <div className="grid lg:flex">
            <label className="label">
              <span className="contact-text label-text text-[30px] ">
                Email:{" "}
              </span>
            </label>
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              className="input input-bordered shadow-sm rounded-3xl md:ms-2 h-10 mt-1 lg:w-[300px] css-background"
              required
            />
          </div>
        </div>

        <div className="form-control my-4">
          <div className="grid lg:flex">
            <label className="label">
              <span className="contact-text label-text text-[30px]">
                Name:{" "}
              </span>
            </label>
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              className="input input-bordered shadow-sm rounded-3xl md:ms-2 h-10 mt-2 lg:w-[400px] css-background"
              required
            />
          </div>
        </div>

        <div className="form-control my-4">
          <div className="grid lg:flex">
            <label className="label">
              <span className="contact-text label-text text-[30px]">
                Massage:{" "}
              </span>
            </label>
            <input
              type="text"
              name="message"
              placeholder="Your Thoughts"
              className="input input-bordered shadow-sm rounded-3xl md:ms-2 h-10 mt-2  lg:w-[450px] css-background"
              required
            />
          </div>
        </div>
        <div className="form-control">
        <button className="mt-6 button-90 w-2/5 btn rounded-full li-style css-background shadow-2xl mx-auto ">
          Submit{" "}
        </button>
        </div>
        
      </form>
    </div>
    </div>
  );
};

export default Contact;
