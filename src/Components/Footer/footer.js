import React from "react";
import "./footer.css";
import flag from "../../images/United States of America (US).png"
import Amex from "../../images/Amex.png"
import Applepay from "../../images/Applepay.png"
import insta from "../../images/Insta.png"
import Star from "../../images/Star 1.png"
import Vector from "../../images/Vector.png"
import linkedin from "../../images/mdi_linkedin.png"
import gpay from "../../images/gpay.png"
import pay from "../../images/paY.png"
import paypal from "../../images/paypal.png"
import master from "../../images/master.png"


function Footer() {
  return (
    <>
    <div className="footer">
      <div className="con1">
        <div className="con1left">
          <h4>Be the first to know</h4>
          <p>Sign up for updates from mettā muse.</p>
          <div className="input">
            <input />

            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div className="con1right">
          <h5>CONTACT US</h5>

          <div className="contact">
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>

            <h4>CURRENCY</h4>
            <div className="currency">
              <img
                src={flag}
                alt="flag"
              />
              <img src={Star} width={10} height={10}   alt="star1" />
              <p>USD</p>
            </div>

            <p>
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>
      </div>

      <div className="line"></div>

      <div className="footerlast">
        <div className="footerlast1">
          <h3>mettā muse</h3>
          <p>About Us</p>
          <p>Stories</p>
          <p>Artisans</p>
          <p>Boutiques</p>
          <p>Contact Us</p>
          <p>EU Compliances Docs</p>
        </div>
        <div className="footerlast2">
          <h3>Quick Links</h3>
          <p>Orders & Shipping</p>
          <p>Join/Login as a Seller</p>
          <p>Payment & Pricing</p>
          <p>Return & Refunds</p>
          <p>FAQs</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
        <div className="footerlast3">
          <h3>Follow Us</h3>
          <div className="footerlast3img">
            <img src={insta} alt="insta" />
            <img src={linkedin} alt="linkedin" />
          </div>
          <h3>mettā muse Accepts</h3>

          <div className="footerlastimg">
            <img src={gpay} alt="gpay" />
            <img src={master} alt="master" />
            <img src={paypal} alt="paypal" />
            <img src={Amex} alt="Amex" />
            <img src={Applepay} alt="applepay" />
            <img src={pay} alt="PaY" />
          </div>
        </div>
      </div>
    </div>

    <div className="footer1">
        <div className="footer1con1">
        <h4>Be the first to know</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. this is simply dummy text.</p>
        <div className="input1">
            <input />

            <button>SUBSCRIBE</button>
          </div> 

          <div className="line1"></div>

          <h3>CALL US</h3>
<div className="callus">
<p style={{display:"inline"}}>+44 221 133 5360</p>
<p style={{display:"inline",marginLeft:"10px"}}>customercare@mettamuse.com</p>
</div>


<h3>CURRENCY</h3>
<div className="currency1">
              <img
                src={flag}
                alt="flag"
              />
              <img src="" alt="star1" />
              <p>USD</p>
            </div>
            <div className="line1"></div>
          
        </div>

        <label for="mettā"> mettā muse</label>
        <select id="metta">
  <option value="about-us">About Us</option>
  <option value="stories">Stories</option>
  <option value="artisans">Artisans</option>
  <option value="boutiques">Boutiques</option>
  <option value="contact-us">Contact Us</option>
  <option value="eu-compliances-docs">EU Compliances Docs</option>
</select>




<div className="payment">
    <p>mettā muse Accepts</p>
    <div className="footerlastimg">
            <img src="" alt="gpay" />
            <img src="" alt="master" />
            <img src="" alt="paypal" />
            <img src="" alt="Amex" />
            <img src="" alt="applepay" />
            <img src="" alt="PaY" />
          </div>
</div>



    </div>

    </>

  );
}

export default Footer;
