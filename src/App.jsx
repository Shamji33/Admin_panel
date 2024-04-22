import { Route, Routes } from 'react-router-dom'
import './App.css'
import SidebarNav from './Components/SidebarNav/SidebarNav'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Products from './Components/Products/Products'
import UserData from './Components/Profile/UserData'
import AddProducts from './Components/Products/AddProducts'
import EditProducts from './Components/Products/EditProducts'
import ViewProducts from './Components/Products/ViewProducts'
import SignUp from './Components/SignUp/SignUp'
import { SignIn } from './Components/SignIn/SignIn'
import SignInUi from './Components/SignIn/Sign'

function App() {


  return (
    <>
    {/* <SidebarNav/> */}
    <Routes>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/' element={<SignIn/>}></Route>
      <Route path='/SignUp' element={<SignUp/>}></Route>
      <Route path='/UserData' element={<UserData/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Products' element={<Products/>}></Route>
      <Route path='/AddProducts' element={<AddProducts/>}></Route>
      <Route path='/ViewProducts' element={<ViewProducts/>}></Route>
      <Route path='/EditProducts' element={<EditProducts/>}></Route>
    </Routes>
    {/* <SignInUi/> */}
    </>
  )
}

export default App
