import { useState } from 'react'
import './App.css'
import Header from './components/header/header'
import Courses from './components/Courses/Courses'
import Details from './components/Details/Details'
import toast from 'react-hot-toast'

function App() {


  const [courseLists, setCourseLists] = useState([]);
  const [totalCredits, setTotalCredits] = useState(0);



  const handleSubmitButton = (course, course_credit) => {

    // add total credit
    const isAlreadyAvailable = !!courseLists.find(courseList => courseList.id === course.id)

    const newTotalCredit = totalCredits + course_credit;


    if (newTotalCredit <= 20) {
      
      if (!isAlreadyAvailable) {
        const newCourseLists = [...courseLists, course];
        setCourseLists(newCourseLists);
        setTotalCredits(newTotalCredit);
        toast.success('Course added to list')
      }
      else {
        toast.error('This course is already selected');
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
        ></Details>


      </div>


    </>
  )
}

export default App
