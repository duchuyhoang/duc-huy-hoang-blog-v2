import Link from "next/link";
import Container from "../Container";
import Divider from "../Divider";
import Typography from "../Typography";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import "./style.css";
import { FACEBOOK, GITHUB, INSTAGRAM, LINKEDIN, X_TWITTER } from "@/constants";
const Footer = () => {
  return (
    <>
      {/* <Divider /> */}
      <footer className="py-[3rem] bg-white dark:bg-gray-lighter-dark">
        <Container>
          <section className="grid grid-cols-12">
            <div className="col-span-3 flex flex-col">Logo</div>
            <div className="col-span-3"></div>
            <div className="col-span-3"></div>
            <div className="col-span-3 flex flex-col">
              <div className="flex flex-col">
                <Typography component="h5" className="link-label">
                  EMAIL ME
                </Typography>
                <Typography
                  component="a"
                  className="footer-link"
                  href={"mailto:huyhoang10032000@gmail.com"}
                >
                  huyhoang10032000@gmail.com
                </Typography>
              </div>
              <div className="flex flex-col my-[1.5rem]">
                <Typography component="h5" className="link-label">
                  MAKE A CALL
                </Typography>
                <Typography
                  component="a"
                  className="footer-link"
                  href={"tel:+84328640767"}
                >
                  +84 32 864 0767
                </Typography>
              </div>
              <div className="flex flex-col">
                <Typography component="h5" className="link-label">
                  KEEP IN TOUCH WITH ME
                </Typography>
                <div className="flex gap-[16px] mt-2">
                  <Link href={LINKEDIN}>
                    <FaLinkedin className="footer-social-icon" />
                  </Link>
                  <Link href={FACEBOOK}>
                    <FaFacebook className="footer-social-icon" />
                  </Link>
                  <Link href={GITHUB}>
                    <FaGithub className="footer-social-icon" />
                  </Link>
                  <Link href={INSTAGRAM}>
                    <FaInstagram className="footer-social-icon" />
                  </Link>
                  <Link href={X_TWITTER}>
                    <FaXTwitter className="footer-social-icon" />
                  </Link>
                </div>
                {/* <Typography
                  component="a"
                  className="footer-link"
                  href={"tel:+84328640767"}
                >
                  +84 32 864 0767
                </Typography> */}
              </div>
            </div>
          </section>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
