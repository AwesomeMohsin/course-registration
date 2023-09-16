import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Course from "../Course/Course";

const Courses = ({handleSubmitButton}) => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
        
    }, [])


    return (
        
        <div className="w-4/6 md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            

            {
                courses.map((course, idx) => <Course
                    key={idx} course={course}
                    handleSubmitButton={handleSubmitButton}
                    
                ></Course>)
            }

        </div>
    );
};

Courses.PropTypes = {
    handleSubmitButton: PropTypes.func,
    


}

export default Courses;