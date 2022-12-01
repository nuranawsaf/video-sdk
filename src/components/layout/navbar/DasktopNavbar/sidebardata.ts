import { IconType } from "react-icons";
import { BsGrid, BsChevronDown } from "react-icons/bs";
import { SlBookOpen } from "react-icons/sl";
import { RiCalendar2Line, RiAttachment2 } from "react-icons/ri";
import { CgMenuBoxed } from "react-icons/cg";
import { BiPen } from "react-icons/bi";
import { MdOutlinePersonSearch } from "react-icons/md";

export interface SidebardataProps {
  title: string;
  icon: IconType;
  second?: IconType;
  href: string;
}

export const sidebardata: Array<SidebardataProps> = [
  {
    title: "Dashboard",
    icon: BsGrid,

    href: "/",
  },
  {
    title: "Subjects",
    icon: SlBookOpen,

    href: "/subjects",
  },
  {
    title: "Class Routine",
    icon: RiCalendar2Line,

    href: "/class",
  },
  {
    title: "Assignment",
    icon: CgMenuBoxed,
    second: BsChevronDown,
    href: "/assignment",
  },
  {
    title: "Exam",
    icon: BiPen,

    href: "/exam",
  },
  {
    title: "Course Teachers",
    icon: MdOutlinePersonSearch,
    href: "/teachers",
  },
  {
    title: "Attachments",
    icon: RiAttachment2,

    href: "/attachments",
  },
];
