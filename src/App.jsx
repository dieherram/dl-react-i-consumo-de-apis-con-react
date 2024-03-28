import './App.css'
import MiApi from './components/MiApi'

function App() {

  return (
    <>
      <header className="container text-center">
        <h1 className="display-3">Welcome to Cocktail Explorer</h1>
      </header>

      <main className="container">
        <section>
          <h2>Discover Your Favorite Cocktails</h2>
          <p>Explore a wide variety of cocktails from around the world. From classic favorites to trendy concoctions, we have it all.</p>
        </section>

        <section>
          <h2>Find the Perfect Mix</h2>
          <p>Whether you're a seasoned mixologist or a novice cocktail enthusiast, our collection of recipes and instructions will help you create the perfect drink for any occasion.</p>
        </section>

        <section>
          <h2>Craft the Perfect Blend</h2>
          <p>Dive into the vibrant world of mixology with our diverse selection of cocktails from across the globe. From revered classics to innovative creations, our collection offers a taste of cocktail culture at its finest.</p>
        </section>


      </main>

      <section className="container">
        <div className="row miapi-container">
          <MiApi />
        </div>
      </section>

      <footer className="container text-center">
        <p className="m-0 p-2">&copy; 2023 Cocktail Explorer</p>
      </footer>
    </>
  )
}

export default App
