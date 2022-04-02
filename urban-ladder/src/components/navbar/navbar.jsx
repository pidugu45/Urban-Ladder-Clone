
import { StyledEngineProvider } from "@mui/material/styles";
import {TopNav} from "./TopNav"
import {MiddNav} from "./MiddNav"
import {BottomNav} from "./BottomNav"

export const Navbar = () => {
    return (<div>
        <StyledEngineProvider injectFirst>
        <TopNav />
      </StyledEngineProvider>
      <MiddNav />
      <BottomNav />
    </div>)
}