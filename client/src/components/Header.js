import React from "react";

function Header() {
  return (
    <div>
      <nav className="nav" style={{ backgroundColor: "#0B5ED7", padding: "20px", marginBottom: "20px" }}>
        <div className="nav-left">
          <a className="brand" href="#" style={{ color: "white", fontSize: "24px", fontWeight: "bold" }}>
            Web Tasks
          </a>
        </div>
        <div className="nav-right">
          <div className="tabs">
            <a href="#" style={{ color: "white", textDecoration: "none", fontSize: "18px" }}>
              Task Management App by Shoaib
            </a>
          </div>
        </div>
      </nav>
    </div>
    
  );
}

export default Header;
