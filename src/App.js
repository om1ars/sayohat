
import './App.css';
import {useEffect, useState} from 'react'
import Tours from './Tours';

const url = "https://course-api.com/react-tours-project";


function App() {

  const [loading, setloading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setloading(true);

    try{
      const response = await fetch(url);
      const tours = await response.json();
      setloading(false);
      setTours(tours)
    } catch (error){
      setloading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTours();
  }, [])
  if(loading){
    return(
      <h1>Sabr....</h1>
    )
  }

  return (
    <main>
      <Tours  tours = {tours} />
    </main>
  );
}

export default App;
