import './app.scss';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';

function App() {
	return (
		<div className="App">
			<Intro />
			<About />
			<Portfolio />
		</div>
	);
}

export default App;
