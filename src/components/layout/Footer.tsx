import { Link } from "gatsby";
import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faSlack,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "./Logo"
import Social from "./Social";

interface Props {
  hideNewsletter?: boolean;
}

const Footer = ({ hideNewsletter }: Props) => {
  return (
    <>
      <footer className="footer has-background-white">
        <div className="content has-text-left">
          <div className="container more">
            <div className="columns">
              <div className="column">
                <p><Logo /></p>
                <p className="has-text-grey6">
                  © {new Date().getFullYear()} VMware, Inc. or its affiliates.{" "}
                  <a
                    href="https://www.vmware.com/help/legal.html"
                    className="footer-link"
                  >
                    Terms of Use
                  </a>{" "}
                  •{" "}
                  <a
                    href="https://www.vmware.com/help/privacy.html"
                    className="footer-link"
                  >
                    Privacy
                  </a>
                  •{" "}
                  <Link className="footer-link" to={"/trademarks"}>
                    Trademark Guidelines
                  </Link>{" "}
                  •{" "}
                  <a
                    className="footer-link"
                    href="https://www.vmware.com/help/privacy/california-privacy-rights.html"
                  >
                    Your California Privacy Rights
                  </a>{" "}
                  •{" "}
                  <a className="ot-sdk-show-settings footer-link">
                    Cookie Settings
                  </a>
                </p>
              </div>
              <div className="social-links column is-2">
                <Social />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;