import Contact from './components/Contact'
import CV from './components/CV'
import Gallery from './components/Gallery'

const Home = () => {
  return (
    <div className="container mx-auto">
      <CV />
      <Gallery />
      <Contact />
    </div>
  )
}

export default Home
