import React from "react";
import { AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { BsFacebook, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="bottom">
        <div className="subscribe">
          <h4 className="heading">Subscribe to our news letter</h4>
          <p className="para">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            consequ.
          </p>

          <input
            type="text"
            placeholder="Enter your Email address"
            className="input"
          />
          <button className="btn-s">SUBSCRIBE</button>
        </div>
        <div className="main">
          <h4 className="heading">About Us</h4>

          <p className="para">Our Story</p>
          <p className="para">Blogs</p>
          <p className="para">Careers</p>
          <p className="para">Contact Us</p>
          <p className="para">Help and Support</p>
        </div>
        <div className="main">
          <h4 className="heading">Our Services</h4>
          <p className="para">Book Maali</p>
          <p className="para">Plant Day Care</p>
          <p className="para">Rent Plants</p>
          <p className="para">Plant & Pots</p>
          <p className="para">Gardening tools</p>
        </div>
        <div className="main">
          <h4 className="heading">Useful Links</h4>

          <p className="para">My Account</p>
          <p className="para">Orders & Returns</p>
          <p className="para">Track Orders</p>
          <p className="para">Terms & Condition</p>
          <p className="para">Privacy policy</p>
          <p className="para">Return, refund & replacement policy</p>
        </div>

        <div className="main">
          <h4 className="heading">Get in Touch</h4>

          <p className="para">
            Address: 26317 hegwsb jbjs sjhjwhj ssbwbswhs jwhsjwhsvwt
          </p>
          <p className="para">Contact: +912632317</p>
          <p className="para">Email: hdg@gmail.com</p>
        </div>
      </div>
      <div className="footer">
        <h3 className="head">CHAPERONE</h3>
        <p className="para head">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum
          magnam sint pariatur architecto aspernatur aperiam, quibusdam ullam
          quae optio voluptatum aliquid impedit provident cumque ducimus
          reiciendis vitae doloremque quis omnis fugit ipsam itaque dolorum.
          Numquam, mollitia. Possimus, aspernatur at! Lorem, ipsum dolor sit
          amet consectetur adipisicing elit. Repellendus veniam cumque
          accusantium assumenda esse in praesentium. Voluptatum sequi alias
          molestias, inventore vitae sed recusandae reiciendis doloribus magnam
          exercitationem optio, ut nisi consequatur. Error, eveniet quae
          blanditiis amet reprehenderit earum fugiat.
        </p>
        <h3 className="head">Follow us on</h3>
        <div className="icons">
          <AiOutlineInstagram className="icon" />
          <BsFacebook className="icon" />
          <BiLogoGmail className="icon" />
          <BsYoutube className="icon" />
          <AiFillLinkedin className="icon" />
        </div>
        <hr />
        <p className="para head">© 2023, Chaperone.com All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
