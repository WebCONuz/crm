import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo/logo.png";
import Accordion from "../ui/Accordion";
import { TbSmartHome } from "react-icons/tb";
import { FaArrowsAlt } from "react-icons/fa";
import { FaTruckArrowRight } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { MdVoiceChat } from "react-icons/md";
import { FaRobot } from "react-icons/fa";

const contentList = [
  { id: 1, color: "blue", title: "AI" },
  { id: 2, color: "aqua", title: "CRM" },
  { id: 3, color: "green", title: "eCommerse" },
  { id: 4, color: "orange", title: "Criptocurrency" },
  { id: 5, color: "yellow", title: "Investment" },
];

const Sidebar = () => {
  return (
    <aside className="w-1/5 h-full border-r border-gray-200 overflow-y-auto">
      <Link
        to="/user/home"
        className="h-[70px] flex items-center px-4 border-b border-gray-200"
      >
        <img src={Logo} alt="logo" className="w-[65%]" />
      </Link>
      <div className="p-4">
        <Accordion
          icon={<TbSmartHome className="text-xl" />}
          title="Dashboard"
          data={contentList}
        />
        <Accordion
          icon={<FaArrowsAlt className="text-xl" />}
          title="Invoice"
          data={contentList}
        />
        <Accordion
          icon={<FaTruckArrowRight className="text-xl" />}
          title="AI application"
          data={contentList}
        />
        <Accordion
          icon={<MdAttachEmail className="text-xl" />}
          title="Components"
          data={contentList}
        />
        <Accordion
          icon={<MdVoiceChat className="text-xl" />}
          title="Form"
          data={contentList}
        />
        <Accordion
          icon={<FaRobot className="text-xl" />}
          title="Table"
          data={contentList}
        />
      </div>
    </aside>
  );
};

export default Sidebar;
