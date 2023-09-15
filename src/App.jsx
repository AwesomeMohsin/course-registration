import { useState } from 'react'
import './App.css'
import Header from './components/header/header'
import Courses from './components/Courses/Courses'


function App() {


  const [courseLists, setCourseLists] = useState([]);
  const [totalCredits, setTotalCredits] = useState(0);



  const handleSubmitButton = (course, course_credit) => {

    // add total credit
    const isAlreadyAvailable = !!courseLists.find(courseList => courseList.id === course.id)


  }


  return (

    <>
      <Header></Header>

      <div className='flex container mx-auto gap-6'>

        <Courses
          handleSubmitButton={handleSubmitButton}
        ></Courses>

       

      </div>


    </>
  )
}

export default App
