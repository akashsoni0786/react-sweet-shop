import "./App.css";
import ResponsiveAppBar from "./Navbar";
import Home from "./Home";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { Button, Typography } from "@mui/material";

function App() {
  const gototop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div style={{ position: "relative" }}>
      <ResponsiveAppBar />
      <Home />
      <div onClick={gototop} className="frontbtns">
        <ArrowCircleUpIcon
          onClick={gototop}
          sx={{ color: "white", marginLeft: "0px", fontSize: "70px" }}
        />
      </div>

      <a
        href="https://api.whatsapp.com/send?phone=918448190700&forceIntent=true&load=loadInIOSExternalSafari"
        className="whatsapp"
      >
        <WhatsAppIcon
          sx={{ color: "white", marginLeft: "0px", fontSize: "70px" }}
        />
      </a>

      <PopupState variant="popover" popupId="demo-popup-popover">
        {(popupState) => (
          <div>
            <div
              variant="contained"
              {...bindTrigger(popupState)}
              className="callbtn"
            >
              <CallIcon
                sx={{ color: "white", marginLeft: "0px", fontSize: "70px" }}
              />
            </div>
            <Popover
              {...bindPopover(popupState)}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <div className="contactme">
                <p>Contact Us : +91-8888888888</p>
                <p>Mail Us : contact@mysites.com</p>
              </div>
            </Popover>
          </div>
        )}
      </PopupState>
    </div>
  );
}

export default App;
