import {Link} from "@mui/material";
import Menu from "@mui/material/List";
import MenuItem from "@mui/material/ListItem";

function LeftNav({
  activeSection,
  onSectionClick,
}: {
  activeSection: string;
  onSectionClick: (section: string) => void;
}) {
  return (
    <>
      <img
        src="/ast-logo-white-text.svg"
        alt="logo"
        style={{height: "100px", margin: "3rem"}}
      />
      <Menu className="menuLink">
        <MenuItem>
          <Link
            href="#about"
            className={activeSection === "about" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              onSectionClick("about");
            }}
          >
            about
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            href="#portfolio"
            className={activeSection === "portfolio" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              onSectionClick("portfolio");
            }}
          >
            portfolio
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            href="#contact"
            className={activeSection === "contact" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              onSectionClick("contact");
            }}
          >
            contact
          </Link>
        </MenuItem>
      </Menu>
    </>
  );
}

export default LeftNav;
