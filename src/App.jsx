import { useLoaderData } from "react-router-dom"
import CoffeeCard from "./component/CoffeeCard";
import { useState } from "react";
import Header from "./component/Header";


function App() {
   
  const loadedCoffees = useLoaderData();
   const [coffees,setCoffees] = useState(loadedCoffees)
  return (
   <div >
    <header className="mb-10">
      <Header>

      </Header>
    </header>
     <div className="m-20">
      
      <h1 className="text-6xl text-center my-20 text-purple-600">Hot Cold Coffees {coffees.length}</h1>
     <div className="grid md:grid-cols-2 gap-6">
     {
        coffees.map(coffee=><CoffeeCard 
          key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}
          ></CoffeeCard>)
      }
     </div>
      
    </div>
   </div>
  )
}

export default App
