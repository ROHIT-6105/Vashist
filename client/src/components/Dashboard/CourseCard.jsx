import React from "react";

const CourseCard = ({ course }) => {
    return (
        <div className="course-card">
            <div className="card-header">
                <h3>{course.title}</h3>
                <p>{course.instructor}</p>
            </div>

            <div className="card-footer">
                <span>📁</span>
                <span>📄</span>
            </div>
        </div>
    );
};

export default CourseCard;