import './App.css'
// import Header from './components/Header/Header'
import Body from './components/Body/Body'
import Home from './components/Home/Home'
import Header1 from './components/Header1/Header1'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Header1 />}>
						<Route index element={<Home />} />
						{/*  body is for resumeEditor */}
						<Route path='body' element={<Body />} />
						<Route path='Contact' element={<Contact />} />
					</Route>
				</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	)
}

export default App
