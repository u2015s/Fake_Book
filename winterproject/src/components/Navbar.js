import React from 'react'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux'
class Navbar extends React.Component{
    state = { term: ''};

    onInputChange(event){
        this.setState({term: event.target.value})

    }
    renderLinks(){
        if(this.props.authenticated)
        {
            return(
                <div>
                     <NavLink to="/welcome">welcome</NavLink>
                     <NavLink to="/signout">signout</NavLink>
                </div>
            )
        }else{
            return(
                <div>
                     <NavLink to="/signinform"> Sign In</NavLink>
                     <NavLink to="/signupform"> Sign Up</NavLink>
                </div>
            )
        }
    }

    render(){
                return(
                    
                <div>
                             {/* <div className="ui menu"> */}
                               {this.renderLinks()}
                                {/* <NavLink to="/home"> home</NavLink> */}
                               
                                {/* <div className="right menu">
                            <div className="item">
                                <div className="ui transparent icon input"> */}
        {/* should we use form tag and if form tag will be used then we will prevent it from refreshing the page(See video 7.10)*/}
                                {/* <input 
                                    type="text" 
                                    placeholder="Search..."
                                    value={this.state.term} 
                                    onChange={this.onInputChange}
                                    />
                                <i className="search link icon" />
                                </div>
                            </div>
                        </div> */}
                {/* </div> */}
                        

                    </div>
                    )
            }
}

const mapStateToProps =(state) =>{
    return{authenticated:state.auth.authenticated}
}
export default connect(mapStateToProps)(Navbar)