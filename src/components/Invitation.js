import React from "react";

export default class Invitation extends React.Component {
	render() {
		const children = (
			<div>{React.Children.map(this.props.children, child => child)}</div>
		);
		return (
			<div>
				<h1>You've been invited!</h1>
				{children}
			</div>
		);
	}
}
