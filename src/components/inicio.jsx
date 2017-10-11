import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actionCreators from '../actions/index'

const mapStateToProps = state => {
  return {
    contador: state.contador,
  }
}

const mapDispatchToProps=(dispatch)=>{
  return bindActionCreators(actionCreators,dispatch)
}

class Inicio extends Component {
	constructor(props) {
		super(props);
		this.state={
			color:null
		}
	}
	componentDidMount() {
		let color
		this._changeBG=setInterval(()=>{
			color = darkColor()
			this.setState({color})
			document.body.style.backgroundColor = color
		}, 2500);
	}

	componentWillUnmount() {
		clearInterval(this._changeBG)
	}

	changeNumber=(sum)=>{
		if(sum)
			this.props.toNumber(this.props.contador!==[]?Number(this.props.contador)+1:0)
		else
			this.props.toNumber(this.props.contador!==[]?Number(this.props.contador)-1:0)
	}
  render() {
    return (
      <div className="centralize allHeight">
      	<div className="display-block">
      		<div className="centralize">
      			<h2 style={{color:this.state.color}} className="margin">Just a counter:  </h2>
      			<h1 style={{color:this.state.color}} className="margin">{this.props.contador}</h1>
	        </div>
      		<div className="centralize">
	        	<RaisedButton backgroundColor={this.state.color} className="margin" onTouchTap={()=>this.changeNumber(false)} label="decrease"/>
	        	<RaisedButton backgroundColor={this.state.color} className="margin" onTouchTap={()=>this.changeNumber(true)} label="increase"/>
	        </div>
        </div>
      </div>
    );
  }
}


const InicioRedux = connect(mapStateToProps,mapDispatchToProps)(Inicio)

export default InicioRedux



function isLight(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    result = result ? 0.2126*parseInt(result[1], 16) + 0.7152*parseInt(result[2], 16) + 0.0722*parseInt(result[3], 16) : 0;
    if(result>=127.5) return true
    else return false
}

function darkColor() {
	let color = "#" + (Math.random()	* 0xFFFFFF<<0).toString(16);
	return isLight(color)?darkColor():color
}