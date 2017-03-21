import React, { Component } from 'react';

export default class SelectWidget extends Component {
	constructor(props){
		super(props);
		this.state = { term: '', myList:[]};
		//this.state = { term: '', myOption:[]};
	}
	_renderControl(){
		if(this.props.type === 'InputType'){
			return(
				<div className="input-group">
		            <input type="text" className="form-control" value={ this.state.term} 
		            onChange={event=>this._onInputChange(event.target.value)} / >
		            <span className="input-group-btn">
		        		<button className="btn btn-default" type="button"
		        			onClick={event=>this._addNewValue(this.state.term)}>Go</button>
		      		</span>
		        </div>
			)
		}else if(this.props.type === 'SelectType'){
			return(

               	<select id="lang" className="form-control" onChange={event=>this._addNewValue(event.target.value)}>
               		{
	               		this.props.options.map(function(opt){
	                  		return <option key={opt} value={opt} >{opt}</option>;
	                  		
	                  		
		        			
	               		})
               		}
              	</select>
			)
		}
	}


  	render() {
	  	
	    return (
	      // <div className="text-center panel panel-default">
		     //  	React simple starter
		      
	      // </div>
	      
		    <div className="panel panel-primary">
			    <div className="panel-heading">
			        <div className="row">
			            <div className="col-lg-10 col-md-10">
			                <h3 className="panel-title">Transport </h3>
			            </div>
			            <div className="col-lg-2 col-md-2">
			                <span className="glyphicon glyphicon-minus pull-right" aria-hidden="true"></span>
			                <span className="glyphicon glyphicon-plus pull-right" aria-hidden="true"></span>
			            </div>
			        </div>
			    </div>
			    <div className="panel-body">
			    	{this._renderControl()}
			        
			        <div className="panel-body">
			            <table className="table">
			                <tbody>
			                    { this.state.myList.map(function(ele){ return (
			                    <tr key={ele}>
			                        <td>{ele}</td>
			                    </tr>
			                    ) }) }

			                    
			                    
			                </tbody>
			            </table>
			        </div>
			    </div>
			</div>
	    );
	}
  	
  	_onInputChange(term) {
    	this.setState({term});
  	}

  	_addNewValue(newValue){
  		this.setState({term:'', myList: [...this.state.myList, newValue]});
  	}
  	
}
