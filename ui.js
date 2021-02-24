'use strict';
const React = require('react');
const { Text } = require('ink');
const Example = importJSX('./components/Box');

const App = ({ name = 'Stranger' }) => (
	<>
		<Text>
			Hello, <Text color="green">{name}</Text>
			 I am a retard
		</Text>
		<Example/>
	</>
);

module.exports = App;
