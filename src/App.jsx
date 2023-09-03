import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import { useState } from 'react';
import CoffeeCard from './components/CoffeeCard';

function App() {

  const loadedCoffees = useLoaderData();

  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <>
      <h1 className='text-4xl text-purple-500'>Coffee Store {coffees.length}</h1>

      <div className='mt-10'>
        <Link to='/addCoffee'>
          <button className='btn btn-success btn-outline' >Add Coffee</button>
        </Link>
      </div>

      <div className='grid md:grid-cols-2 gap-3'>
        {
          coffees.map(coffee=> <CoffeeCard
          key={coffee._id}
          coffee={coffee}
          ></CoffeeCard>)
        }
      </div>

    </>
  )
}

export default App
