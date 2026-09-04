import './App.css'
import CategorySection from './components/CategorySection'
import ExtrasBox from './components/ExtrasBox'
import Footer from './components/Footer'
import Header from './components/Header'
import { categories } from './data/data'

function App() {
  return (
    <>
      <Header />

      <main>
        {categories.map((category) => (
          <CategorySection key={category.id} category={category}/>
        ))}
        <ExtrasBox />
      </main>
      <Footer />
    </>
  )
}

export default App
