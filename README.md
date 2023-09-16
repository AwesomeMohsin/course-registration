# Course Registration

## Project Features

- Course Selection: Users can easily add courses to their cart by clicking on the 'select' button, accompanied by a success toast notification.

- Automatic Price Display: After selecting a course, its price will be automatically displayed beneath the course credits taken.

- Credit Limit: Users are allowed a maximum of 20 credits. If they attempt to select more than 20 credits, the system will generate an error toast message, indicating that exceeding 20 credits is not permitted.

## How I managed the state in my assignment project

- "In the project, I begin by initializing the application's state using the 'useState' function within the 'App.jsx' file. Afterward, I create a handler function. Subsequently, I transmit this state as properties (props) to the 'Cards.jsx' component.

- In the 'Card.jsx' component, I utilize an 'onClick' event associated with a button. When this button is clicked, it triggers a callback function. Within this callback function, I pass the card prop, which contains all the required data.

- Following this step, I forward this data to the 'Details.jsx' component for the purpose of displaying the title in the project's details."




### Live Link: https://awesome-course-registration.surge.sh/
