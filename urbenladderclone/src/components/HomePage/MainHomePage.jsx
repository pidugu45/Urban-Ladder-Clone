import { TopNavbar } from "../Navbar/TopNavbar";
import { MiddleNavbar } from "../Navbar/MiddleNavbar";
import { BottomNavbar } from "../Navbar/BottomNavbar";
import "./HomePage.css";
import { StyledEngineProvider } from "@mui/material/styles";

export const MainHomePage = () => {
  return (
    <div>
      <div>
        <StyledEngineProvider injectFirst>
          <TopNavbar />
        </StyledEngineProvider>
        <MiddleNavbar />
        <BottomNavbar />
      </div>
    </div>
  );
};
