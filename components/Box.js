import {render, Box} from 'ink';
var snake = require('snake-cli');

const Example = () => (
	<>
		<Box margin={2}>
			<Text>This is a box with margin</Text>
		</Box>
		{snake()}
	</>
);

render (<Example/>);
