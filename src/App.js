import { useContext } from 'react';
import './app.scss';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Toggle from './components/toggle/Toggle';
import Top from './components/top/Top';
import { ThemeContext } from './context';

function App() {
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

	return (
		<div
			className="App"
			style={{
				backgroundColor: darkMode ? '#222' : 'white',
				color: darkMode && 'white',
			}}
		>
			<Toggle />
			<Top />
			<Intro />
			<About />
			<Portfolio />
			<Contact />
		</div>
	);
}

export default App;
