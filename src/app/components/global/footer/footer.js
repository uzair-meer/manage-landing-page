import Image from "next/image";
import logo from "../../../../../public/assets/logo-white.svg";
import {
  footerLinksOne,
  footerLinksTwo,
  footerSocialLinks,
} from "../../constants/constants";
import "./footer.style.css";
export default function Footer() {
  return (
    <div className=" px-2 foot">
      <div className="footer w-80">
        <div className="flex-col footer-logo">
          <div className="mobile">
            <p>Copyright © 2024, All Rights Reserved</p>
          </div>
          <Image src={logo} alt="logo" width={195} />
          <div className="flex footer-social-links mt-4">
            {footerSocialLinks.map((link, index) => (
              <Image
                src={link.icon}
                key={link}
                alt="social link"
                height={32}
                width={32}
              />
            ))}
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-link-items">
            {footerLinksOne.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </div>
          <div className="footer-link-items">
            {footerLinksTwo.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </div>
        </div>
        <div className="flex-col">
          <div style={{ display: "flex" }}>
            <input type="text" placeholder="Updated in your Inbox" />
            <button className="footer-button">Go</button>
          </div>
          <div className="mt-4 desktop">
            <p>Copyright © 2024, All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}
