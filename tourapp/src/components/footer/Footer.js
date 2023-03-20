import React from 'react'
import './Footer.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Footer() {
    return (
        // <>
        // <p>Mohamad Shareef</p>
        // <a href ="https://web.facebook.com"><img src = "./../../facebook.png" alt ="Facebook"></img></a>
        // <a href ="https://www.linkedin.com/"><img src = "./../../linkedin.png" alt ="Linkedin"></img></a>
        // </>        
        <footer class="dark-theme">
            <div class="footer-content">
                <a href="https://web.facebook.com"><img src="./../../facebook.png" alt="Facebook"></img></a>
                <a href="https://www.linkedin.com/"><img src="./../../linkedin.png" alt="Linkedin"></img></a>
                <p>Mohamad Shareef</p>
         </div>
        </footer>

    )
}
export default Footer;