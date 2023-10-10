import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import NavigationBar from "./components/navBar/NavigationBar";
import Cards from "./components/cards/Cards";
import FormExp from "./components/form/FormExp";
import Login from "./components/login/Login";
import Detail from "./components/detail/Detail";
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
      <NavigationBar />
      <Routes>
        <Route path="" element={<Cards data={data}/>}/>
        <Route path="/tuexperiencia" element={<FormExp />}/>
        <Route path="/ingresar" element={<Login />}/>
        <Route path="/detalle/:id" element={<Detail data={data}/>}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
