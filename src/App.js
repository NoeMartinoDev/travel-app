import { useEffect, useState } from "react";

import NavBar from "./components/navBar/NavBar";
import Cards from "./components/cards/Cards";
import Footer from "./components/footer/Footer";

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

  return (
    <>
      <NavBar />
      <Cards data={data}/>
      <Footer />
    </>
  );
}

export default App;
