
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import { lazy, Suspense } from 'react'

const Dashboard = lazy(()=>import ('../components/Dashboard.jsx'))
const Login = lazy(()=>import ('../components/login.jsx'))

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <Suspense fallback={<div>Loading Dashboard...</div>}>
            <Dashboard />
          </Suspense>
        } />
        <Route path='/login' element={
          <Suspense fallback={<div>Loading Login...</div>}  
          >
            <Login />
          </Suspense>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
