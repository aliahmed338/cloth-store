import { TbMoneybag } from "react-icons/tb";
import { BsFillHandbagFill } from "react-icons/bs";
import {
  AiOutlineDollarCircle,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { BiShieldAlt2 } from "react-icons/bi";
import { BsHeadset } from "react-icons/bs";
import { GrGamepad } from "react-icons/gr";
import { BsHeadphones } from "react-icons/bs";
import { AiOutlineCamera } from "react-icons/ai";
import { BsSmartwatch } from "react-icons/bs";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsPhone } from "react-icons/bs";
import {
  IcategoryBox,
  IcircleInfo,
  IEmployeeInfo,
  InavItems,
} from "../interfaces";
import { TbTruckDelivery } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";
import person1 from "../../assets/About/Frame 874.png";
import person2 from "../../assets/About/Frame 876.png";

export const NAV_ITEMS: InavItems[] = [
  {
    text: "Home",
    to: "/",
  },
  {
    text: "Contact",
    to: "/contact",
  },
  {
    text: "About",
    to: "/about",
  },
  {
    text: "Carts",
    to: "/carts",
  },
  {
    text: "WishList",
    to: "/wishlist",
  },
];

export const CATEGORY_BOX: IcategoryBox[] = [
  {
    text: "phones",
    icon: <BsPhone className="text-center text-5xl" />,
  },
  {
    text: "Computers",
    icon: <HiOutlineDesktopComputer className="text-center text-5xl" />,
  },
  {
    text: "SmartWatch",
    icon: <BsSmartwatch className="text-center text-5xl" />,
  },
  {
    text: "Camera",
    icon: <AiOutlineCamera className="text-center text-5xl" />,
  },
  {
    text: "HeadPhones",
    icon: <BsHeadphones className="text-center text-5xl" />,
  },
  {
    text: "Gaming",
    icon: <GrGamepad className="text-center text-5xl" />,
  },
];

export const CIRCLE_INFO: IcircleInfo[] = [
  {
    icon: <TbTruckDelivery size={30} />,
    mainTitle: "FREE AND FAST DELIVERY",
    secondTitle: "Free delivery for all orders over $140",
  },
  {
    icon: <BsHeadset size={30} />,
    mainTitle: "24/7 CUSTOMER SERVICE",
    secondTitle: "Friendly 24/7 customer support",
  },
  {
    icon: <BiShieldAlt2 size={30} />,
    mainTitle: "MONEY BACK GUARANTEE",
    secondTitle: "We reurn money within 30 days",
  },
];

export const CIRCLE_ABOUT_INFO: IcircleInfo[] = [
  {
    icon: <BsFillHouseDoorFill size={30} />,
    mainTitle: "10.5k",
    secondTitle: "Sallers active our site",
  },
  {
    icon: <AiOutlineDollarCircle size={30} />,
    mainTitle: "33k",
    secondTitle: "Mopnthly Produduct Sale",
  },
  {
    icon: <BsFillHandbagFill size={30} />,
    mainTitle: "45.5k",
    secondTitle: "Customer active in our site",
  },
  {
    icon: <TbMoneybag size={30} />,
    mainTitle: "25k",
    secondTitle: "Anual gross sale in our site",
  },
];

export const EMPLOYEE_INFO: IEmployeeInfo[] = [
  {
    image: person1,
    name: "Tom Cruise",
    job: "Founder & Chairman",
    icons: (
      <div className="flex gap-x-2">
        <AiOutlineTwitter />
        <AiOutlineInstagram />
        <FaLinkedinIn />
      </div>
    ),
  },
  {
    image: person2,
    name: "Will Smith",
    job: "Product Designer",
    icons: (
      <div className="flex gap-x-2">
        <AiOutlineTwitter />
        <AiOutlineInstagram />
        <FaLinkedinIn />
      </div>
    ),
  },
  {
    image: person1,
    name: "Emma Watson",
    job: "Managing Director",
    icons: (
      <div className="flex gap-x-2">
        <AiOutlineTwitter />
        <AiOutlineInstagram />
        <FaLinkedinIn />
      </div>
    ),
  },
];
