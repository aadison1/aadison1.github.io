import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Accolades from './pages/Accolades'
import Projects from './pages/Projects'
import Service from './pages/Service'
import Contact from './pages/Contact'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.12 }}
      >
        <Routes location={location}>
          <Route path="/"          element={<Home />} />
          <Route path="/accolades" element={<Accolades />} />
          <Route path="/projects"  element={<Projects />} />
          <Route path="/service"   element={<Service />} />
          <Route path="/contact"   element={<Contact />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: '100vh', background: '#080808' }}>
        <Navigation />
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  )
}
