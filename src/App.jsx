
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { useState } from 'react';
import Alert from './components/Alert';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  let [mode, setMode] = useState("light")
  let [alert, setAlert] = useState(null);

  const handleOnMode = () => {
    if (mode === "light") {
      setMode("dark")
      showAlert('Dark Mode Has Been Enable.', "success")
    } else {
      setMode("light")
      showAlert('Light Mode Has Been Enable.', "success")
    }
  }


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }

  return (
    <>
      <Header mode={mode} handleOnMode={handleOnMode} />
      <Alert alert={alert} />
      <Outlet/>
      <Footer/>

    </>
  )
}

export default App
