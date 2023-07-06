import React from "react";
import './Footer.css';
function Footer(){
    return(
        <>
        <footer id="footer-start">

        <div class="footer1">
                <div class="left">
                    <div class="mail-icon">
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" style={{width: "22" , height:"16"}} viewBox="0 0 22 16"><title>Envelope icon</title><path fill="#FFF" fill-rule="nonzero" d="M0 0v1.294C2.952 3.87 9.034 9.18 9.532 9.618c.62.545 1.233.604 1.468.604.235 0 .848-.058 1.468-.603.48-.422 6.357-5.604 9.532-8.405V0H0zm22 2.222c-3.261 2.912-8.504 7.593-8.956 7.995-.843.75-1.71.832-2.044.832-.334 0-1.201-.081-2.044-.833C8.488 9.8 3.099 5.037 0 2.298V16h22V2.222z"> </path>
                           </svg>
                        </i>
                        Get special discount on your inbox.
                    </div>
                    <form class="footerMail">
                        <input type="email" class="input" placeholder="Your Email" value=""></input>
                        <button type="submit" class="submit-button">Send</button>
                    </form>
                </div>
        </div>
        

        <div class="footer3">
            <div class="footer-3a">
                <div class="footer3-left">
                    <div class="left-icon">
                        <img src="https://adn-static2.nykaa.com/media/wysiwyg/2021/Free-shipping.svg" alt="Free Shipping"></img>
                        <div class="leftContent">
                            <div class="head">Free Shipping</div>
                            <div class="subHead">On Orders Above ₹ 299</div>                          
                        </div>
                    </div>
                </div>
            </div>
        </div>

         <div class="footer4"> 
            <div class="footer4b">
                <p class="para"><span>©</span> 2023 Nykaa. By Nikita.</p>
            </div>
        </div>
    </footer>
        </>
    )
}
export default Footer;