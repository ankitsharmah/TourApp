import { useState } from 'react';
import './App.css';
import data from "./data";
import Tours from './components/Tours';

function App() {
  const [tours,setTours]=useState(data);
  function removeTour(id) {
    const newTour = tours.filter(tour => tour.id !== id);
    setTours(newTour);
  }


  if(tours.length===0){
         return( <div className="get-back">
            <h2 className='no-data-left' >No Plan left</h2>
            <button onClick={()=>{setTours(data)}} className='refresh'>

              Refresh
            </button>
          </div>);
  }


  return (
    <div>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;
