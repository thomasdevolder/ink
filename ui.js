'use strict';
const React = require('react');
const { Text } = require('ink');
const snake = require('snake-cli');

// Deze lijn zorgt ervoor dat je externe jsx kan importeren
const importJsx = require('import-jsx');
const TestComp = importJsx("./components/TestComp.js");
const Box = importJsx("./components/Box.js")

//import { h, render, Text } from 'ink';
//import TextAnimation from 'ink-text-animation';

const name = "Dit is een testnaam";

const Component = () => {
	const compTest = "test vanuit comp";
	return compTest
}



const App = ({ }) => (
	<>
		<Text>
			Hello, my name is <Text color="green">{name}</Text>

			{<TestComp />}
		</Text>


	</>
);

module.exports = App;
