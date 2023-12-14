import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import NavigationBar from "./components/navBar/NavigationBar";
import Cards from "./components/cards/Cards";
import FormExp from "./components/form/FormExp";
import Login from "./components/login/Login";
import Detail from "./components/detail/Detail";
import Footer from "./components/footer/Footer";
import Register from "./components/register/Register";

function App() {

  const [ data, setData ] = useState(null)

  const [ user, setUser ] = useState(null)

  const [ filteredData, setFilteredData ] = useState([])

  useEffect(() => {
    const axiosData = async () => {
      try {
        const response = await axios("http://localhost:3001/travels")
        if(response.status > 400) {
          throw new Error ("No se pudo obtener la data")
        }
        setData(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    axiosData()
    const loginStorage = localStorage.getItem("isLoged")
    loginStorage && setUser(JSON.parse(loginStorage))
  }, [data])

  return (
    <>
      <NavigationBar user={user} setUser={setUser} data={data} setFilteredData={setFilteredData}/>
      <Routes>
        <Route path="" element={<Cards data={filteredData.length ? filteredData : data}/>}/>
        <Route path="/tuexperiencia" element={<FormExp data={data} setData={setData} user={user}/>}/>
        <Route path="/ingresar" element={<Login user={user} setUser={setUser}/>}/>
        <Route path="/detalle/:id" element={<Detail data={data}/>}></Route>
        <Route path="/registro" element={<Register/>}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
