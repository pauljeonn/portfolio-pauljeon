import { useState } from 'react';
import './app.scss';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Toggle from './components/toggle/Toggle';

function App() {
	const [dark, setDark] = useState(false);

	return (
		<div className="App">
			<Toggle setDark={setDark} />
			<Intro dark={dark} />
			<About dark={dark} />
			<Portfolio dark={dark} />
			<Contact dark={dark} />
		</div>
	);
}

export default App;
