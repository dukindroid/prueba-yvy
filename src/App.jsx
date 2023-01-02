import Layout from "./pages/Layout";
import { Autodiagnostico } from "./pages/Autodiagnostico"
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Autodiagnostico />} />
        <Route path='/layout' element={<Layout />} />
      </Routes>
    </>
  )

}

export default App
