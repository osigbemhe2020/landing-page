import React, { useState } from "react";
import "./Footer.css";
import { MdPhone } from "react-icons/md";
import { IoMdMailOpen } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { RiFacebookFill, RiInstagramFill, RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { MdPolicy } from "react-icons/md";
//import emailjs from "emailjs-com";

const Button = ({text}) => {
  return (
    <button 
   className="bg-blue-900 hover:bg-blue-700 text-white px-8 py-3  text-lg font-semibold" >
        {text}  
    </button>
    )
}

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null); // For error messages

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Validate the email
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    const templateParams = {
      user_email: email, // The email entered by the user
    };

    // Access the EmailJS credentials from the Vite environment variables
    const serviceId = import.meta.env.VITE_NEWSLETTER_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_NEWSLETTER_EMAILJS_TEMPLATE_ID;
    const userId = import.meta.env.VITE_NEWSLETTER_EMAILJS_USER_ID;

    // Send the email using EmailJS
    /*emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          setIsSubmitted(true); // Show success message
          setError(null); // Clear any previous errors
        },
        (error) => {
          console.error("Error sending email:", error);
          setError("Failed to send email. Please try again later.");
        }
      );*/
  };

  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="container">
          <div className="footer-left">
            <h1>Contact Us</h1>
            <ul>
              <li
                onClick={() =>
                  (window.location = "mailto:marketing@belsoftsystems.com")
                }
              >
                <span className="footer-icon">
                  <IoMdMailOpen />
                </span>
                <p>marketing@belsoftsystems.com</p>
              </li>
              <li>
                <span className="footer-icon">
                  <MdPhone />
                </span>
                <a href="tel:+2348037537986">
                  <p>+234 907 562 8581
,</p>
                </a>
                <a href="tel:+2348093237159">
                  <p>+234 812 959 8167</p>
                </a>
              </li>
              <li>
                <span className="footer-icon">
                  <FaLocationDot />
                </span>
                <p>
                  Ridds Plaza Plot 740, Aguwan Anaekwe Street, Wuye Suite
                  046/47, Abuja-Nigeria
                </p>
              </li>
              <li>
                <span className="footer-icon">
                  <MdPolicy />
                </span>
                <a href="/privacy-policy">Privacy Policy and TOS</a>
              </li>
              <li>
                <Button text="Join Us" />
              </li>
            </ul>
          </div>
          <div className="footer-right">
            <div className="social-icons">
              <a href="https://web.facebook.com/profile.php?id=61554162863933&_rdc=1&_rdr" target="_blank">
                <span className="social-icon">
                  <RiFacebookFill />
                </span>
              </a>
              <a href="https://www.instagram.com/belsoft_systems/" target="_blank">
                <span className="social-icon">
                  <RiInstagramFill />
                </span>
              </a>
              <a href="https://x.com/BELSOFT_SYSTEMS" target="_blank">
                <span className="social-icon">
                  <RiTwitterXFill />
                </span>
              </a>
              <a href="https://www.linkedin.com/company/belsoft-systems-ltd-abuja/" target="_blank">
                <span className="social-icon">
                  <FaLinkedinIn />
                </span>
              </a>
              <a href="https://wa.me/2348068817499" target="_blank">
                <span className="social-icon">
                  <FaWhatsapp />
                </span>
              </a>
            </div>

            {/* Subscription Form */}
            <div className="reach-out">
              <h5>Subscribe to our Newsletter</h5>
              <form onSubmit={handleSubmit}>
                <div className="reach-out-box">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email address"
                    //value={email}
                    onChange={handleEmailChange}
                    className="border border-[2px] border-grey h-[50px]"
                    required
                  />
                  <Button text="Subscribe"/>
                </div>
              </form>

              {isSubmitted && <p>Thank you for subscribing!</p>}
              {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-container">
        <div className="f-copyright">
          <p>Copyright &copy; {new Date().getFullYear()} Belsoft Systems Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;