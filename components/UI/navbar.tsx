import IconPrimary from "./buttons/IconPrimary";
import { FaEnvelopeOpen, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="flex items-center justify-evenly bg-fossilDarkerBlue">
      <div></div>
      <div>
        <IconPrimary
          filled={true}
          twBgColor="bg-red-500"
          twOutlineColor="border-red-300"
          twHoverColor="hover:bg-red-200"
          label="Email"
        >
          <FaEnvelopeOpen />
        </IconPrimary>
        <IconPrimary
          filled={false}
          twOutlineColor="border-blue-200"
          label="Connect"
        >
          <FaLinkedin />
        </IconPrimary>
      </div>
    </div>
  );
}
