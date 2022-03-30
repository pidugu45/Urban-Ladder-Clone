import { TopNavbar } from "../Navbar/TopNavbar";
import { MiddleNavbar } from "../Navbar/MiddleNavbar";
import { BottomNavbar } from "../Navbar/BottomNavbar";

export const Navbar = () => {
  return (
    <div>
      <StyledEngineProvider injectFirst>
        <TopNavbar />
      </StyledEngineProvider>
      <MiddleNavbar />
      <BottomNavbar />
    </div>
  );
};
