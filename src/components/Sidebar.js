import "./Sidebar.css";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import CasesOutlinedIcon from "@mui/icons-material/CasesOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import RuleOutlinedIcon from "@mui/icons-material/RuleOutlined";
import BackupTableOutlinedIcon from "@mui/icons-material/BackupTableOutlined";
import { Link } from "react-router-dom";
import { HomeOutlined } from "@mui/icons-material";

const Sidebar = () => {
  return (
    <div className="main-container">
      <ul className="SidebarList">
        <Link className="row" to="/">
          <HomeOutlined />
          Home
        </Link>

        <Link className="row" to="/releaseform">
          <FolderOutlinedIcon />
          Release
        </Link>

        <li className="row">
          <CasesOutlinedIcon />
          Business Requirements
        </li>

        <li className="row">
          <BackupTableOutlinedIcon />
          Functional Requirements
        </li>

        <li className="row">
          <RuleOutlinedIcon /> Test cases
        </li>

        <li className="row">
          <FactCheckOutlinedIcon />
          Test Results
        </li>

        <li className="row">
          <DeleteOutlinedIcon />
          Recycle Bin
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
