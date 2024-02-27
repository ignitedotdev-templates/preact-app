import { render } from 'preact';

import preactLogo from './assets/preact.svg';
import './style.css';

export function App() {

	const currentPath = window.location.href;
	return (

		<main>
			<div className="">
				<img src={preactLogo} alt="Preact logo" height="160" width="160" />
			</div>
			<div className="container">
				<div className="inner-container">
					<h2 className="header">
						You’ve just ignited a new <span className="library">Preact</span> static site!
					</h2>
					<span className="pathname">
						{currentPath}
					</span>
				</div>
				<p className="footer">
					Made in Nigeria with 💖
				</p>
			</div>
		</main>
	);
}


render(<App />, document.getElementById('app'));
