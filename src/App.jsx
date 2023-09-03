import { Link, useLoaderData } from 'react-router-dom'
import './App.css'

function App() {

  const loadedCoffees = useLoaderData();

  return (
    <>
      <h1 className='text-4xl text-purple-500'>Coffee Store {loadedCoffees.length}</h1>

      <div className='mt-10'>
        <Link to='/addCoffee'>
          <button className='btn btn-success btn-outline' >Add Coffee</button>
        </Link>
      </div>

      <div>
        {

        }
      </div>

    </>
  )
}

export default App
