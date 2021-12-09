import React from 'react';
import Particles from 'react-tsparticles';

const Particle = () => {
	const particlesInit = (main) => {
		console.log(main);
	};
	const particlesLoaded = (container) => {
		console.log(container);
	};

	return (
		<div>
			<Particles
				id="tsparticles"
				init={particlesInit}
				loaded={particlesLoaded}
				options={{
					particles: {
						number: {
							value: 20,
							density: {
								enable: true,
								value_area: 600,
							},
						},
						color: {
							value: '#6db1ff',
						},
						shape: {
							type: 'circle',
							stroke: {
								width: 0,
							},
							polygon: { nb_sides: 5 },
						},
						line_linked: {
							enable: false,
						},
						move: {
							speed: 0.5,
						},
						size: {
							value: 2.5,
						},
						opacity: {
							anim: {
								enable: true,
								speed: 1,
								opacity_min: 0.05,
							},
						},
					},
					interactivity: {
						events: {
							onclick: {
								enable: true,
								mode: 'push',
							},
						},
						modes: {
							push: {
								particles_nb: 2,
							},
						},
					},
					retina_detect: true,
				}}
			/>
		</div>
	);
};

export default Particle;
