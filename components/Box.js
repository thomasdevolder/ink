const React = require("react");
var snake = require('snake-cli');

const Example = () => (
	<>
		<Box margin={2}>
			<Text>This is a box with margin</Text>
		</Box>
		{snake()}
	</>
);

module.exports = Example
