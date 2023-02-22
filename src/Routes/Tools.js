import { useState } from "react";
import "./Tools.css";

const Tools = () => {
  const [requirement, setRequirement] = useState("Requirements");
  const [reports, setReports] = useState("Reports");

  const handleRequirement = () => {
    setRequirement(
      <div>
        <select
          style={{
            textAlign: "center",
            marginRight: "20px",
            cursor: "pointer",
          }}
        >
          <option>Create Requirement</option>
          <option>Releases</option>
          <option>Business Requirements</option>
        </select>

        <select style={{ textAlign: "center", cursor: "pointer" }}>
          <option>Import from Excel</option>
          <option>Releases</option>
          <option>Business Requirements</option>
        </select>
      </div>
    );
  };

  const handleReports = () => {
    setReports(
      <div>
        <select
          style={{
            textAlign: "center",
            marginRight: "20px",
            cursor: "pointer",
          }}
        >
          <option>New List Reports</option>
          <option>Releases</option>
          <option>Business Requirements</option>
        </select>

        <select style={{ textAlign: "center", cursor: "pointer" }}>
          <option>New Trace Tree Reports</option>
          <option>Releases</option>
          <option>Business Requirements</option>
        </select>
      </div>
    );
  };

  return (
    <div className="middle-container">
      <div className="my-tools">
        <p>My Tools</p>
      </div>

      <div className="my-todo">
        <p>My TO DO List</p>
      </div>

      <div className="my-tools-sec">
        <p onMouseEnter={handleRequirement}>{requirement}</p>
      </div>

      <div className="my-todo-sec">
        <p>Congratulations</p>
      </div>

      <div className="my-tools-sec">
        <p onMouseEnter={handleReports}>{reports}</p>
      </div>

      <div className="my-todo-sec">
        <p>Congratulations! No requirements need your approval.</p>
      </div>

      <div className="my-tools-sec">
        <p>Trace Tools</p>
      </div>

      <div className="my-todo-sec">
        <p>Congratulations! None of your requirements have been rejected</p>
      </div>

      <div className="my-tools-sec">
        <p>Dashboards</p>
      </div>

      <div className="my-todo-sec">
        <p>
          Congratulations! None of your requirements are pending anyone's
          approval
        </p>
      </div>
    </div>
  );
};

export default Tools;
