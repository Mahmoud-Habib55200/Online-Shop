import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PrintIcon from '@mui/icons-material/Print';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
  return (
    <div className="  bg-slate-700 w-full text-white">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 pt-10 gap-10   ">
          <div>
            <h1 className="uppercase  font-bold mb-7">Company name</h1>
            <p className="text-gray-300 max-w-[230px]">
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>

          <div>
            <h1 className="  uppercase font-semibold mb-7">Products</h1>
            <ul className="flex flex-col gap-3">
              <Link to='/'>
                <li>Home</li>
              </Link>{" "}
              <Link to='/mekaup'>
                <li>Wommen</li>
              </Link>{" "}
              <Link to='/jackit'>
                <li>Mens</li>
              </Link>{" "}
              <Link to='/compony'>
                <li>Compony</li>
              </Link>
            </ul>
          </div>

          <div>
            <h1 className="  uppercase mb-7">Useful links</h1>

            <ul className="flex flex-col gap-3">
              <Link>
                <li>Your Account</li>
              </Link>
              <Link>
                <li>Become an Affiliate</li>
              </Link>
              <Link>
                <li>Shipping Rates</li>
              </Link>
              <Link>
                <li>Help</li>
              </Link>
            </ul>
          </div>
          <div>
            <h1 className=" uppercase mb-7">Contact</h1>
            <ul className="flex flex-col gap-3">
              <Link>
                <li> <span className="mr-5"> <HomeIcon /></span>Egypt , Cairo</li>
              </Link>
              <Link>
                <li> <span className="mr-5"><EmailIcon/></span>mahmoudhabib55200@gmail.com</li>
              </Link>
              <Link>
                <li><span className="mr-5"><LocalPhoneIcon/></span>+20 10 64 50 16 82</li>
              </Link>
              <Link>
                <li><span className="mr-5"><PrintIcon /></span>+20 10 64 50 16 82</li>
              </Link>
            </ul>
          </div>
        </div>

        <hr className="my-10" />
 
        <div className="flex justify-around pb-5 ">
          <div><p>© 2024 Copyright: MDBootstrap.com</p></div>
          <div className="flex gap-3 ">
            <p><FacebookIcon /></p>
            <p><TwitterIcon /></p>
            <p><GoogleIcon /></p>
            <p><InstagramIcon /></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
