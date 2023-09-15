import PropTypes from 'prop-types';
const Course = ({ course, handleSubmitButton }) => {
    const {id, img, title, description, price, credit} = course;
    return (
        <div className="bg-white p-4 rounded-xl">
            <img className="pb-4 mx-auto w-full" src={img} alt="" />
            <h3 className="font-semibold text-t text-lg pb-4">{title}</h3>
            <p className="text-p text-sm text-left pb-4">{description}</p>
            <div className="flex justify-between pb-4">
                <p>$ Price: {price}</p>
                <p>Credit: {credit}</p>
            </div>
            <button onClick={() => handleSubmitButton(course, credit, price)}
            className="p-btn w-full mx-auto">Select</button>
            
        </div>
    );
};

Course.PropTypes = {
    course: PropTypes.object.isRequired,
    courseCredit:PropTypes.number,
    handleSubmitButton: PropTypes.func,

}

export default Course;