import { storyblokInit, apiPlugin} from '@storyblok/react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import About from './Pages/About.jsx'



storyblokInit({
    accessToken: "k25cvE9zCKOuhJ3vCQgCCAtt",
    use: [apiPlugin],
    components: {
        header: Header,
        footer: Footer,
        about: About,
    },
});

function App() {

  return (
    <>
        <Outlet />
    </>
  )
}

export default App
