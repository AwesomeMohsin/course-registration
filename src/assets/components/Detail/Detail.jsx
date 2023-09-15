const Detail = ({ idx, courseList }) => {
    const { title, credit } = courseList;
    

    return (

        <div>
            

            <p className="text-p text-base">{idx + 1} {title}</p>
            


        </div>
    );
};

export default Detail;