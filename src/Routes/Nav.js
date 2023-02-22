import "./Nav.css";
import { NavLink, Outlet } from "react-router-dom";
import BuildIcon from "@mui/icons-material/Build";
import AvTimerOutlinedIcon from "@mui/icons-material/AvTimerOutlined";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";

const Nav = () => {
  return (
    <div className="over-all">
      <div className="nav-container">
        <NavLink className="tools" to="/">
          <BuildIcon />
          <p>I want to</p>
        </NavLink>

        <NavLink className="status" to="/status">
          <AvTimerOutlinedIcon />
          <p>My status</p>
        </NavLink>

        <NavLink className="comments" to="/comments">
          <ChatBubbleRoundedIcon />
          <p>Recent comments in project</p>
        </NavLink>

        <NavLink className="edit" to="/changes">
          <ModeEditOutlineOutlinedIcon />
          <p>Recent changes in project</p>
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Nav;
