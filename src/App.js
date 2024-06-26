import logo from './logo.svg';
import './App.css';
import Landingpage from './Landingpage';
import {Route,Routes} from 'react-router-dom'
import Testimonial from './Testimonial'
import Slider from './Slider';
import Contact from './Contact';
import Ausign from './Ausign';
import Aulogin from './Aulogin';
import Header from './Header';
import { Footer } from './Footer';
import About from './About';
import Sign from './Sign';
import Login from './Login';
import Home from './Home';
import Upload from './Upload';
import Forget from './Forget';
import OneTime from './OneTime';
import Reset from './Reset';
import BookList from './BookList';
import MyProfile from './MyProfile';
import HomeSlider from './HomeSlider';
import Packages from './Packages';
import Bookviewer from './Bookviewer';
// import '@fontsource/alegreya';
import Orbit from './Circular';
import MyList from './MyList';
import MyAccount from './MyAccount';
import Paymentform from './Paymentform';
import  Authorform  from './Authorform';
import Thanky from './Thanky';
import { Authorlanding } from './Authorlanding';
import AuthorBookviewer from './AuthorBookviewer';
import { Terms } from './Terms';
import Nhero from './Nhero';
function App() {
  return (
    <>
    <Routes>
     <Route path='/'element={<Landingpage/>}/>
     <Route path='/Testimonial'element={<Testimonial/>}/>
     <Route path='/Slider'element={<Slider/>}/>
     <Route path='/Contact'element={<Contact/>}/>
     <Route path='/Header'element={<Header/>}/>
     <Route path='/Footer'element={<Footer/>}/>
     <Route path='/About'element={<About/>}/>
     <Route path='/Sign'element={<Sign/>}/>
     <Route path='/login'element={<Login/>}/>
     <Route path='/home'element={<Home/>}/>
     <Route path='/Upload'element={<Upload/>}/>
     <Route path='/forget'element={<Forget/>}/>
     <Route path='/Onetime'element={<OneTime/>}/>
     <Route path='/Reset'element={<Reset/>}/>
     <Route path='/Booklist'element={<BookList/>}/>
     <Route path='/Myprofile'element={<MyProfile/>}/>
     <Route path='/HomeSlider'element={<HomeSlider/>}/>
			  <Route path='/Packages' element={<Packages />} />
			  <Route path="/bookreview" element={<Bookviewer />} />
			  <Route path='/circle' element={<Orbit />} />
			  <Route path='/mylist' element={<MyList />} />
			  <Route path='/MyAccount' element={<MyAccount />} />
			  <Route path='/payment' element={<Paymentform/>} />
			  <Route path='/authorform' element={<Authorform />} />
			  <Route path='/authorlanding' element={<Authorlanding />} />
			  <Route path='/Ausign'element={<Ausign/>}/>
     <Route path='/Aulogin'element={<Aulogin/>}/>
			  <Route path='/thank' element={<Thanky />} />
			  <Route path='/authorbookreview' element={<AuthorBookviewer />} />
			  <Route path='/terms' element={<Terms/>} />
        <Route path='/Nhero' element={<Nhero/>} />
     </Routes>
    </>
  );
}

export default App;
