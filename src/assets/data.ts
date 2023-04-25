import dashboardIcon from "./svg/dashboard.svg";
import item1 from "./svg/item1.svg";
import item2 from "./svg/item2.svg";
import item3 from "./svg/item3.svg";
import item4 from "./svg/item4.svg";
import item5 from "./svg/item5.svg";
import item6 from "./svg/item6.svg";
import item7 from "./svg/item7.svg";
import item8 from "./svg/item8.svg";
import nigeria from "./svg/nigeria.svg";
import netherland from "./svg/netherland.svg";
import usa from "./svg/usa.svg";
import andorra from "./svg/andorra.svg";
import facebook from "./svg/facebook.svg";
import instagram from "./svg/instagram.svg";
import linkedln from "./svg/linkedln.svg";
import twitter from "./svg/twitter.svg";

export const location = [
  { icon: nigeria, color: "blue" },
  { icon: netherland, color: "purple" },
  { icon: usa, color: "green" },
  { icon: andorra, color: "yellow" },
  { icon: "", color: "khaki" },
];

export const sources = [
  { icon: facebook, color: "blue" },
  { icon: instagram, color: "purple" },
  { icon: linkedln, color: "green" },
  { icon: twitter, color: "yellow" },
];

export const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: dashboardIcon,
    currentIcon: dashboardIcon,
    current: true,
  },
  {
    name: "item 1",
    href: "/item1",
    icon: item1,
    currentIcon: item1,
    current: false,
  },
  {
    name: "item 2",
    href: "/item2",
    icon: item2,
    currentIcon: item2,
    current: false,
  },
  {
    name: "item 3",
    href: "/item3",
    icon: item3,
    currentIcon: item3,
    current: false,
  },
  {
    name: "item 4",
    href: "/item4",
    icon: item4,
    currentIcon: item4,
    current: false,
  },
  {
    name: "item 5",
    href: "/item5",
    icon: item5,
    currentIcon: item5,
    current: false,
  },
  {
    name: "item 6",
    href: "/item6",
    icon: item6,
    currentIcon: item6,
    current: false,
  },
  {
    name: "item 7",
    href: "/item7",
    icon: item7,
    currentIcon: item7,
    current: false,
  },
  {
    name: "item 8",
    href: "/item8",
    icon: item8,
    currentIcon: item8,
    current: false,
  },
];
