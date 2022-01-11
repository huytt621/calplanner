import axios from 'axios'
import Navbar from "./components/Navbar";

const App = () => {
  const testPlan =
    {
      "user": "61d92a9855e5bdb4abc73f98",
      "years": [
        [
          {
            "name": "Fall 2020",
            "courses": [
              {
                "name": "CS 61A",
                "units": "4"
              },
              {
                "name": "EECS 16A",
                "units": "4"
              },
              {
                "name": "GERMAN R5A",
                "units": "4"
              },
              {
                "name": "ESPM 50AC",
                "units": "4"
              }
            ]
          },
          {
            "name": "Spring 2021",
            "courses": [
              {
                "name": "CS 61B",
                "units": "4"
              },
              {
                "name": "EECS 16B",
                "units": "4"
              },
              {
                "name": "GERMAN R5B",
                "units": "4"
              },
              {
                "name": "PSYCH C126",
                "units": "3"
              }
            ]
          },
          {
            "name": "Summer 2021",
            "courses": [
              {
                "name": "DATA C8",
                "units": "4"
              },
              {
                "name": "CS W169A",
                "units": "3"
              }
            ]
          }
        ]
      ]
    }
        
    
 
  const addPlan = () => {
    axios.post('http://localhost:3000/api/plans', testPlan).then(() => console.log('done'))
  }
  return (
    <>
      <Navbar />
      <button onClick={addPlan} />
    </>
  )
}

export default App;
