// Code ThemedDecoration Component Here

import React, { Component } from "react";

class ThemedDecorations extends Component {
  render() {
    const childrenWithWrapperDiv = React.Children.map(
      this.props.children,
      child => {
        return <div className={this.props.theme}>{child}</div>;
      }
    );
    return <div>{childrenWithWrapperDiv}</div>;
  }
}

export default ThemedDecorations;
