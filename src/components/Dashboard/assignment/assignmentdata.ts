import { SlOptionsVertical } from "react-icons/sl";
import { SlBookOpen } from "react-icons/sl";
import { RiCalendar2Line } from "react-icons/ri";
import { IconType } from "react-icons";
import { BsCardText } from "react-icons/bs";

export interface AssigmentsData {
  titleIcon: IconType;
  title: string;
  des: string;
  dateIcon: IconType;
  date: string;
  subIcon: IconType;
  sub: string;
  menuIcon: IconType;
}

export const assignmentdata: Array<AssigmentsData> = [
  {
    titleIcon: BsCardText,
    title: "Elenar Pena",
    des: "posted a new assignment: Lab report on selected paper",
    dateIcon: RiCalendar2Line,
    date: "Dec 14",
    subIcon: SlBookOpen,
    sub: "General Science",
    menuIcon: SlOptionsVertical,
  },
  {
    titleIcon: BsCardText,
    title: "Leslie Alexander",
    des: "posted a new assignment: Lab report on selected paper",
    dateIcon: RiCalendar2Line,
    date: "Dec 14",
    subIcon: SlBookOpen,
    sub: "History",
    menuIcon: SlOptionsVertical,
  },
  {
    titleIcon: BsCardText,
    title: "Guy Hawkins",
    des: "posted a new assignment: Lab report on selected paper",
    dateIcon: RiCalendar2Line,
    date: "Dec 14",
    subIcon: SlBookOpen,
    sub: "Photography",
    menuIcon: SlOptionsVertical,
  },
  {
    titleIcon: BsCardText,
    title: "Savannah Nguyen",
    des: "posted a new assignment: Lab report on selected paper",
    dateIcon: RiCalendar2Line,
    date: "Dec 14",
    subIcon: SlBookOpen,
    sub: "English",
    menuIcon: SlOptionsVertical,
  },
];
