import './App.css';
import { useEffect, useState } from "react";
import Cards from "./components/cards/Cards"

function App() {

  const url = "https://my-app-three-flame.vercel.app/data.json"

  const [ data, setData ] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        if(!response.ok) {
          throw new Error ("No se pudo obtener la data")
        }
        const result = await response.json()
        setData(result.datos)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  console.log(data)

  return (
    <>
      <Cards data={data}/>
    </>
  );
}

export default App;
