import { Footer, NavbarList, NavbarNav } from "./Navbar.styled";
import NavbarElement, { Path } from "./NavbarElement";

const Navbar = () => (
  <Footer>
    <NavbarNav>
      <NavbarList>
        <NavbarElement path={Path.HOME} title="Explore" />
        <NavbarElement path={Path.OFFERS} title="Offers" />
        <NavbarElement path={Path.PROFILE} title="Profile" />
      </NavbarList>
    </NavbarNav>
  </Footer>
);

export default Navbar;
