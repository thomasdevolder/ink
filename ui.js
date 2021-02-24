'use strict';
const React = require('react');
const { Text } = require('ink');

const App = ({ name = 'Stranger' }) => (
	<>
		<Text>
			Hello, <Text color="green">{name}</Text>
			I am a retard
		</Text>
	</>
);

module.exports = App;
