'use strict';
const React = require('react');
const { Text } = require('ink');

// Deze lijn zorgt ervoor dat je externe jsx kan importeren
const importJsx = require('import-jsx');
const TestComp = importJsx("./components/TestComp.js");

const name = "Dit is een testnaam";

const Component = () => {
	const compTest = "test vanuit comp";
	return compTest
}



const App = ({ }) => (
	<Text>
		Hello, my name is <Text color="green">{name}</Text>
		<Component />
		{<TestComp />}
	</Text>
);

module.exports = App;
