'use strict';
const React = require('react');
const { Text } = require('ink');
// Deze lijn zorgt ervoor dat je externe jsx kan importeren
const importJsx = require('import-jsx');
const TestComp = importJsx("./components/TestComp.js");

import { h, render, Text } from 'ink';
import TextAnimation from 'ink-text-animation';

const name = "Dit is een testnaam";

const Component = () => {
	const compTest = "test vanuit comp";
	return compTest
}



const App = ({ }) => (
	<>
		<Text>
			Hello, my name is <Text color="green">{name}</Text>
			<Component />
			{<TestComp />}
		</Text>

		<TextAnimation>
			<Text>{`Look at me, I'm moving!`}</Text>
		</TextAnimation>
	</>
);

module.exports = App;
