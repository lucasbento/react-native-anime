import React from 'react';
import { Animated } from 'react-native';

import { scenarioParser } from './utils';
import { ROTATE, MOVE_X, MOVE_Y, WAIT, DELAY, SCALE, BACKGROUND_COLOR, BORDER_RADIUS, PT_WIDTH, PT_HEIGHT,
				 PERCENTAGE_HEIGHT, PERCENTAGE_WIDTH} from './constants';

export default class ChainAnimations extends React.Component {
	constructor() {
	  super();

	  this.state = {
	  	styles: {}
		};

	  this.scenario = [];
	}

	componentWillMount() {}

	moveX(value, options = {}) {
		this.scenario.push({ type: MOVE_X, value, options });

		return this;
	}

	moveY(value, options = {}) {
		this.scenario.push({ type: MOVE_Y, value, options });

		return this;
	}

	rotate(value, options = {}) {
		this.scenario.push({ type: ROTATE, value, options });

		return this;
	}

	scale(value, options = {}) {
		this.scenario.push({ type: SCALE, value, options });

		return this;
	}

	backgroundColor(value, options = {}) {
		this.scenario.push({ type: BACKGROUND_COLOR, value, options });

		return this;
	}

	borderRadius(value, options = {}) {
		this.scenario.push({ type: BORDER_RADIUS, value, options });

		return this;
	}

	ptWidth(value, options = {}) {
		this.scenario.push({ type: PT_WIDTH, value, options });

		return this;
	}

	ptHeight(value, options = {}) {
		this.scenario.push({ type: PT_HEIGHT, value, options });

		return this;
	}

	percentageHeight(value, options = {}) {
		this.scenario.push({ type: PERCENTAGE_HEIGHT, value, options });

		return this;
	}

	percentageWidth(value, options = {}) {
		this.scenario.push({ type: PERCENTAGE_WIDTH, value, options });

		return this;
	}

	delay(duration) {
		this.scenario.push({ type: DELAY, duration });

		return this;
	}

	wait(duration) {
		this.scenario.push({ type: WAIT, duration });

		return this;
	}

	start() {
		const { animations, styles } = scenarioParser(this.scenario);

		this.setState({ styles }, () => animations.start());
	}

	render() {
	  return (
	    <Animated.View style={ this.state.styles }>
				{ this.props.children }
			</Animated.View>
	  )
	}
}