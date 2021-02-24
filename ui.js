'use strict';
const React = require('react');
const { Text } = require('ink');
//const TestComp = importJsx("./components/TestComp.js");

const name = "Dit is een testnaam";

const Component = () => {
	const compTest = "test vanuit comp";
	return compTest
}



const App = ({ }) => (
	<Text>
		Hello, my name is <Text color="green">{name}</Text>
		<Component />
		{/* <TestComp /> */}
	</Text>
);

module.exports = App;
