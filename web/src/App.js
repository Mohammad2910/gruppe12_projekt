import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

import './App.css'
import Frontpage from './pages/Frontpage'
import Strainpage from './pages/Strainpage'
import Distributor from './pages/Distributor'
import LoginForm from './components/SignIn/LoginForm'
import SignupForm from './components/SignUp/CreateUserForm'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import SingleStrain from './components/SingleStrainPage/SingleStrainPage'

function App() {

  return (
    <>
      <BrowserRouter basename='/gruppe12_projekt'>
          <div className="App">
              <Routes>
                  <Route exact path='/' element={<LoginForm/>} />
                  <Route exact path='/signup' element={<SignupForm/>}/>
                  <Route path='*' element={<DefaultContainer/>} />
              </Routes>
          </div>
      </BrowserRouter>
    </>
 )
}

const DefaultContainer = () => (
    <div>
        <div className="container">
            <Navbar />
            <main>
                <Routes>
                    <Route path="/home" element={<Frontpage/>}/>
                    <Route path="/strains" element={<Strainpage/>} />
                    <Route path="/distributor" element={<Distributor/>} />
                    <Route path="/strains/purp" element={<SingleStrain/>} />
                    {/*<Route path="/*" element={<h1>Error</h1>} />*/}
                </Routes>
            </main>
            <Footer/>
        </div>
    </div>
)

export default App
