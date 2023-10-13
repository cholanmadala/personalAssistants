import 'bulma/css/bulma.css';
import './App.css';
import ProfileCard from './ProfileCard';
import AlexaImg from './alexa.png';
import CortanaImg from './cortana.png';
import SiriImg from './siri.png';

function App() {
	const renderCards = (list) => list.map(card => <div className='column is-3'><ProfileCard key={card.handle} name={card.name} handle={card.handle} img={card.img} description={card.description} /></div>);

	const data = [{ name: "Cortana", handle: "@cortana", img: CortanaImg, description: "Cortana is an amazing tool. Please use this with descrition." },
	{ name: "Alexa", handle: "@alexa", img: AlexaImg, description: "Alexa is an amazing tool. Please use this with descrition." },
	{ name: "Siri", handle: "@siri", img: SiriImg, description: "Siri is an amazing tool. Please use this with descrition." }];

	return (
		<div>
			<section class="hero is-primary">
				<div class="hero-body">
					<p class="title">
						Personal Digital Assistants
					</p>
				</div>
			</section>
			<div className="container">
				<section className='section'>
					<div className='columns'>
						{renderCards(data)}
					</div>
				</section>
			</div>
		</div>
	);
}

export default App;
