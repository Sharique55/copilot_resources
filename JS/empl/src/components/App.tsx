import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import AddEmpl from './AddEmpl'
import EmplDetails from './EmplDetails'
import ListEmpl from './ListEmpl'

function App() {


    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/add" element={<AddEmpl />} />
                    <Route path="/details/:emplId" element={<EmplDetails />} />
                    <Route path="/list" element={<ListEmpl />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
