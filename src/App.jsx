import { useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import MovieList from "./components/cine/MovieList"
import { MovieContext, ThemeContext } from "./context"


function App() {
  const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(true); 
  return (
    <div className={`h-full w-full ${darkMode ? "dark" : ""}`}>
      <ThemeContext.Provider value={{darkMode, setDarkMode}}>
        <MovieContext.Provider value={{ cartData, setCartData }}>
          <Header />
          <main >
            <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
              <aside>
                <Sidebar />
              </aside>
              <MovieList />

            </div>
          </main>
          <Footer />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </div>
  )
}

export default App
