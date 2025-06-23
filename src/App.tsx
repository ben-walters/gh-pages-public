import {useState, useEffect, useRef} from "react";
import LeftNav from "./components/LeftNav";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import IntroPage from "./pages/IntroPage";
import PortfolioPage from "./pages/Portfolio";
import "./style/App.css";
import {Box, Fab, Grid} from "@mui/material";
import {pageDetectOffset} from "./constants";
import {Close, Menu} from "@mui/icons-material";

function App() {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sections = ["intro", "about", "portfolio", "contact"];
    const scrollContainer = scrollContainerRef.current;

    if (!scrollContainer) return;

    const offsets = sections.map((id) => {
      const element = document.getElementById(id);
      if (!element) return 0;

      const containerTop = scrollContainer.getBoundingClientRect().top;
      return (
        element.getBoundingClientRect().top - containerTop - pageDetectOffset
      );
    });

    const handleScroll = () => {
      const scrollPosition =
        scrollContainer.scrollTop + scrollContainer.clientHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPosition >= offsets[i]) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    scrollContainer.addEventListener("scroll", handleScroll);

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    const scrollContainer = scrollContainerRef.current;

    if (element && scrollContainer) {
      const containerTop = scrollContainer.getBoundingClientRect().top;
      const elementTop = element.getBoundingClientRect().top;
      const offset = elementTop - containerTop;

      scrollContainer.scrollTo({
        top: scrollContainer.scrollTop + offset,
        behavior: "smooth",
      });
    }
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <Box display={{sm: "none", xs: "block"}}>
        <Fab
          className={"menu-fab"}
          sx={{
            position: "fixed",
            bottom: 16,
            right: 16,
            zIndex: 1000,
            backgroundColor: "primary.main",
            color: "white",
            "&:hover": {
              backgroundColor: "primary.dark",
            },
          }}
          color="primary"
          aria-label="add"
          onClick={toggleMenu}
        >
          {menuOpen ? <Close /> : <Menu />}
        </Fab>
      </Box>

      <Grid container sx={{height: "100vh"}}>
        <Grid
          className={menuOpen ? "left-nav open" : "left-nav"}
          size={{sm: 4, md: 3, lg: 2}}
          sx={{
            borderRight: "1px solid",
            borderColor: "primary.main",
            textAlign: "center",
            height: "100vh",
            backgroundColor: "rgba(31, 31, 31, 0.8)",
            boxShadow: "0 0 10px rgba(51, 106, 235, 1)",
            backdropFilter: "blur(10px)",
          }}
        >
          <LeftNav
            activeSection={activeSection}
            onSectionClick={scrollToSection}
          />
        </Grid>

        <Grid
          size={{xs: 12, sm: 8, md: 9, lg: 10}}
          ref={scrollContainerRef}
          sx={{flex: 1, height: "100vh", overflowY: "auto", p: 3}}
        >
          <IntroPage id="intro" />
          <AboutPage id="about" />
          <PortfolioPage id="portfolio" />
          <ContactPage id="contact" />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
