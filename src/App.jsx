import { useState } from 'react'
import './App.css'
import Header from './components/header/header'
import Courses from './components/Courses/Courses'
import Details from './components/Details/Details'
import toast from 'react-hot-toast'

function App() {


  const [courseLists, setCourseLists] = useState([]);
  const [totalCredits, setTotalCredits] = useState(0);
  const [remainingHour, setRemainingHour] = useState(20);
  const [totalPrice, setTotalPrice] = useState(0);




  const handleSubmitButton = (course, course_credit, price) => {

    console.log(price);

    // check the course is already available or not
    const isAlreadyAvailable = !!courseLists.find(courseList => courseList.id === course.id)

    // add total credit
    const newTotalCredit = totalCredits + course_credit;

    // deduct remaining hour
    const newRemainingHour = remainingHour - course_credit;

    
    const newtotalPrice = totalPrice + price;
    


    if (newTotalCredit <= 20) {

      if (remainingHour >= course_credit) {

        if (!isAlreadyAvailable) {
          const newCourseLists = [...courseLists, course];
          setCourseLists(newCourseLists);
          setTotalCredits(newTotalCredit);
          setRemainingHour(newRemainingHour);
          setTotalPrice(newtotalPrice);
          toast.success('Course added to list')
        }

        else {
          toast.error('This course is already selected');
        }
      }

      else {
        toast.error('You do not have any remaining hour')
      }

    }
    else {
      toast.error('You cannot take more than 20 credit')
    }


  }


  return (

    <>
      <Header></Header>

      <div className='flex container mx-auto gap-6'>

        <Courses
          handleSubmitButton={handleSubmitButton}
        ></Courses>

        <Details
          courseLists={courseLists}
          totalCredits={totalCredits}
          remainingHour={remainingHour}
          totalPrice={totalPrice}
        ></Details>


      </div>


    </>
  )
}

export default App
