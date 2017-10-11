import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {darkTheme} from '../constantes'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedIndex: 0,
    }
  }

  select = (index) => this.setState({selectedIndex: index});
  render() {
    //passa as props para os filhos
    const childrenWithProps = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, {
        ...this.props
      })
    )
    return (
    	<MuiThemeProvider muiTheme={darkTheme}>
	    	<div>
	    		{childrenWithProps}
		    </div>
      </MuiThemeProvider>
    );
  }
}