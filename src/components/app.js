import React, { Component } from 'react';
import SelectWidget from './select-widget'

export default class App extends Component {
  render() {
  	const myOptions = ['option 1','option 2','option 3','option 4','option 5']
    
    return (
      <div className="container">
      <nav className="navbar navbar-inverse">
      <div className="container-fluid">
      <div className="navbar-header">
      <a className="navbar-brand" href="#">VERSA</a>
      </div>
      <ul className="nav navbar-nav">
      <li className="active"><a href="#">Organizations</a></li>
      <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#"> Administratior<span className="caret"></span></a>
      <ul className="dropdown-menu">
      <li><a href="#">Analytics</a></li>
      <li><a href="#">Monitor</a></li>
      <li><a href="#">Provider</a></li>
      </ul>
      </li>
      <li><a href="#">Workflows</a></li>
      <li><a href="#"> Appliances</a></li>
      </ul>
      </div>
      </nav>

     
	      <div className="col-md-6">
		      <SelectWidget type="InputType"/>
	      </div>
	      <div className="col-md-6">
		      <SelectWidget type="SelectType" options={myOptions}/>
	      </div>
      </div>
    );
  }
}
