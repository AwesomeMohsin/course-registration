import Detail from "../Detail/Detail";

const Details = ({ courseLists, totalCredits, remainingHour, totalPrice }) => {
    console.log(remainingHour);
    return (
        <div className="w-1/4 p-6 bg-white rounded-xl text-left ">

            <h4 className="font-bold text-lg text-[#2F80ED] pb-4">Credit Hour Remaining {remainingHour} hr</h4>


            <h3 className="border-t-2 py-4 text-t text-xl font-bold">Course Name</h3>

            {
                courseLists.map((courseList, idx) => <Detail
                    key={idx}
                    idx={idx}
                    courseList={courseList}
                ></Detail>)
            }
            <p className="pb-4"></p>

            <h4 className="border-t-2 py-4 font-medium text-base text-t2">Total Credit Hour : {totalCredits}</h4>

            <h4 className="border-t-2 py-4 font-semibold text-base text-t2">Total Price : {totalPrice} </h4>
        </div>
    );
};

export default Details;