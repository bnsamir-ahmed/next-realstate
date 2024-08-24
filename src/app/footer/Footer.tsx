import Image from "next/image";
import Logo from "../../../public/assets/logo/elakar_logo.svg";
import FaceBook from "../../../public/assets/logo/facebook-fill.svg";
import Instagram from "../../../public/assets/logo/instgram.svg";
import LinkedIn from "../../../public/assets/logo/linkedin-box-fill.svg";
import AppStore from "../../../public/assets/app_store.jpg";
import GooglePlay from "../../../public/assets/google_play.jpg";
import Link from "next/link";
import Style from "./footer.module.css";
import Paragraph from "../UI/Paragraph";
import Class from "../UI/paragraph.module.css";

const Footer = () => {
  return (
    <>
      <footer className={Style.bgWhite}>
        <div className=" md:container mx-auto px-160 pt-32 position-relative">
          <div className="grid grid-cols-5 gap-3">
            <div className="">
              <div className="">
                <Image src={Logo} alt="alaaqar" />
                <p className={`${Style.text_footer} my-5`}>
                  The first platform that offer best matched dream house
                </p>
                <ul className="flex text-align-center p-0">
                  <li className="me-5">
                    <Link href="">
                      <Image src={FaceBook} alt="facebook_alaaqar" />
                    </Link>
                  </li>
                  <li className="me-5">
                    <Link href="">
                      <Image src={Instagram} alt="instagram_alaaqar" />
                    </Link>
                  </li>
                  <li className="me-5">
                    <Link href="">
                      <Image src={LinkedIn} alt="linkedin-_alaaqar" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="">
                <Paragraph
                  title="important links"
                  className={Class.textBoldPrim}
                />
                <ul className="p-0 mt-5">
                  <li className="mb-3">
                    <Link href="" className={Style.footer_link}>
                      How it works?
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link href="" className={Style.footer_link}>
                      About us
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link href="" className={Style.footer_link}>
                      Terms & Conditions
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link href="" className={Style.footer_link}>
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="">
                <Paragraph title="Services" className={Class.textBoldPrim} />
                <ul className="p-0 mt-5">
                  <li className="mb-3">
                    <Link href="" className={Style.footer_link}>
                      Buy
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link href="" className={Style.footer_link}>
                      Rent
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link href="" className={Style.footer_link}>
                      Sell
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link href="" className={Style.footer_link}>
                      Rental
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="">
                <Paragraph title="Contacts" className={Class.textBoldPrim} />
                <ul className="p-0 mt-5">
                  <li className="mb-3">
                    <Link href="" className={Style.footer_link}>
                      Contact us
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link href="" className={Style.footer_link}>
                      Complaints and suggestions
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link href="" className={Style.footer_link}>
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link href="" className={Style.footer_link}>
                      Property Rights Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="">
                <Paragraph
                  title="Download alaaqar App"
                  className={Class.textBoldPrim}
                />
                <ul className="p-0 mt-5">
                  <li className="my-3">
                    <Image src={AppStore} alt="appStore_alaaqar" />
                  </li>
                  <li className="my-3">
                    <Image src={GooglePlay} alt="googlePlay_alaaqar" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="line-footer my-32"></div>
        </div>
        <div className="text-center pb-32">
          <p className={Style.sub_footer}>
            © 2024 alaaqar. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
