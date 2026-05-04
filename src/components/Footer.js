import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
    return (
        <footer>
            <p>
                <a href="https://instagram.com/erbeniopsi" target="_blank" rel="noopener noreferrer">
                    <FaInstagram /> Erbeniopsi
                </a>
                {" | "}
                <a href="https://linkedin.com/in/erbenio" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn /> Erbenio
                </a>
            </p>

        </footer>
    )
}

export default Footer;