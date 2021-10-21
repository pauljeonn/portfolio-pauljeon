import './app.scss';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';

function App() {
	return (
		<div className="App">
			<Intro />
			<About />
			<Portfolio />
			<Contact />
		</div>
	);
}

export default App;
