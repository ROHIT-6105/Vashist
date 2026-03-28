import React from "react";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-item active">🏠 Home</div>

            <div className="sidebar-section">
                <p className="sidebar-title">Enrolled</p>

                <div className="sidebar-item">Database Systems</div>
                <div className="sidebar-item">DBMS Theory</div>
            </div>
        </div>
    );
};

export default Sidebar;