import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home} from "./pages/Home.tsx"
import {About} from "./pages/About.tsx"
import {Contacts} from "./pages/Contacts.tsx"
import {Notfoundpage} from "./pages/Notfoundpage.tsx"
import {Layout} from "./components/Layout.tsx"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="*" element={<Notfoundpage />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App