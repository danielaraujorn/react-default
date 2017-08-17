import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import constantes,{lightTheme,darkTheme} from '../constantes'
import {getLocal} from '../utils'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

const nearbyIcon = <IconLocationOn />;


export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedIndex: 0,
    }
  }

  select = (index) => this.setState({selectedIndex: index});
  render() {
  	let meuTema
    if(getLocal("tema")==="dark"){
      meuTema=darkTheme
      document.getElementsByTagName("BODY")[0].style.backgroundColor="#282828";
    }else{
      meuTema=lightTheme
      document.getElementsByTagName("BODY")[0].style.backgroundColor="#ddd";
    }

    //passa as props para os filhos
    const childrenWithProps = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, {
        ...this.props
      })
    )
    return (
    	<MuiThemeProvider muiTheme={meuTema}>
	    	<div>
	    		{childrenWithProps}
		    </div>
      	</MuiThemeProvider>
    );
  }
}