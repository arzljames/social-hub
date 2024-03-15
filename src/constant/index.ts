import {
  HiNewspaper,
  HiOutlineNewspaper,
  HiOutlineSearch,
  HiSearch,
  HiChatAlt2,
  HiOutlineChatAlt2,
  HiBookmark,
  HiOutlineBookmark,
} from "react-icons/hi";

export const DEFAULT_AVATAR = "/assets/default-avatar.webp";
export const NAV_LINKS = [
  {
    name: "Feed",
    link: "/",
    activeIcon: HiNewspaper,
    inactiveIcon: HiOutlineNewspaper,
  },
  {
    name: "Search",
    link: null,
    activeIcon: HiSearch,
    inactiveIcon: HiOutlineSearch,
  },
  {
    name: "Message",
    link: "/message",
    activeIcon: HiChatAlt2,
    inactiveIcon: HiOutlineChatAlt2,
  },
  {
    name: "Saved",
    link: "/saved",
    activeIcon: HiBookmark,
    inactiveIcon: HiOutlineBookmark,
  },
];

export const FULL_LOGO = "/assets/full_logo.png";
export const FULL_LOGO_WHITE = "/assets/full_logo_white.png";
