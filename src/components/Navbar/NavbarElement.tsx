import { useNavigate, useLocation } from "react-router-dom";
import ExploreIcon from "assets/svg/exploreIcon.svg";
import OfferIcon from "assets/svg/localOfferIcon.svg";
import PersonOutlineIcon from "assets/svg/personOutlineIcon.svg";
import { NavbarItem, NavbarTitle } from "./Navbar.styled";

export enum Path {
  HOME = "/",
  OFFERS = "/offers",
  PROFILE = "/profile",
}

interface INavbarElement {
  path: Path;
  title: string;
}

const NavbarElement = ({ path, title }: INavbarElement) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = () => path === location.pathname;

  let Icon;
  switch (path) {
    case "/offers":
      Icon = OfferIcon;
      break;
    case "/profile":
      Icon = PersonOutlineIcon;
      break;
    default:
      Icon = ExploreIcon;
  }

  return (
    <NavbarItem onClick={() => navigate(path)}>
      <Icon fill={isActive() ? "#2c2c2c" : "#8f8f8f"} width="36px" height="36px" />
      <NavbarTitle isActive={isActive()}>{title}</NavbarTitle>
    </NavbarItem>
  );
};

export default NavbarElement;
