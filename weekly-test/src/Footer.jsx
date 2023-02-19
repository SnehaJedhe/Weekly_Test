 import React from "react";
 import "./Footer.css";
 import FooterContain from "./FooterContain";

 function Footer() {
    return(
      
        <>
            <div className="footer-main">
            <FooterContain
            h2="About Us"
            p="Support center"
            p1="Customer Suppport"
            p2="About Us"
            p3="Copyright"
            img="https://media.glassdoor.com/sqll/31139/urban-science-squarelogo.png"
            />

          <FooterContain
           h2="Our Information"
           p="Return Policy"
           p1="Privacy policy"
           p2="Terms and Conditions"
           p3="site Map"
           img="https://media.glassdoor.com/sqll/31139/urban-science-squarelogo.png"
             />

            <FooterContain
             h2="My Account"
             p="Press Inquries"
             p1="Social Media"
             p2="Directions"
             p3="Images & B-roll"
             img="https://media.glassdoor.com/sqll/31139/urban-science-squarelogo.png"
            />
            </div>
      </>
    );
 }

 export default Footer;