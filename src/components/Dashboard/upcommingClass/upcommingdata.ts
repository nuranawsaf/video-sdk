import { IconType } from "react-icons";
import { AiOutlineFontSize } from "react-icons/ai";
import { BiCamera, BiFilterAlt, BiPaint, BiTimeFive } from "react-icons/bi";
import { CgClapperBoard } from "react-icons/cg";
import { SlOptionsVertical } from "react-icons/sl";
import { TbMusic } from "react-icons/tb";

export interface UpcommingData {
  icon: IconType;
  title: string;
  dateIcon: IconType;
  date: string;
  menuIcon: IconType;
}

export const upcommingdata: Array<UpcommingData> = [
  {
    icon: AiOutlineFontSize,
    title: "English",
    dateIcon: BiTimeFive,
    date: "Dec 29, 5:12pm",
    menuIcon: SlOptionsVertical,
  },
  {
    icon: BiCamera,
    title: "Photography",
    dateIcon: BiTimeFive,
    date: "Jan 3, 11:08am",
    menuIcon: SlOptionsVertical,
  },
  {
    icon: CgClapperBoard,
    title: "History",
    dateIcon: BiTimeFive,
    date: "Jan 10, 11:15pm",
    menuIcon: SlOptionsVertical,
  },
  {
    icon: BiPaint,
    title: "Arts",
    dateIcon: BiTimeFive,
    date: "Dec 26, 3:14am",
    menuIcon: SlOptionsVertical,
  },
  {
    icon: BiFilterAlt,
    title: "General Science",
    dateIcon: BiTimeFive,
    date: "Jan 16, 3:14am",
    menuIcon: SlOptionsVertical,
  },
  {
    icon: TbMusic,
    title: "Music",
    dateIcon: BiTimeFive,
    date: "Feb 3, 4:06am",
    menuIcon: SlOptionsVertical,
  },
];
