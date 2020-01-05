import React from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch, withRouter} from 'react-router-dom'
import Home from './Home'
import PostFeed from './PostFeed';
import NewPost from "./NewPost";
import Navbar from "./Navbar"
import FriendsTab from "./FriendsTab"
import Signupform from "./Signupform"
import Faker from 'faker'
import Form from './Form'
import Welcome from './Welcome'
import signoutpage from './signout'
import "./Form.css"
class App extends React.Component{

    // constructor(props){
    //     super(props);
       
    //     this.state = {
    //         comments:[],
    //         like: null,
    //         Posttext:[]    
    //     }
    //  }

    // async componentDidMount(){
     
    //      // get all the comment
    //         const comres = await axios.get(`/api/newpost`)
    //         comres.data.forEach(function(item){
    //             this.setState({
    //                 comments:[item.text, ...this.state.comments]
    //             })
                
    //         }, this)
    //           console.log(this.state.comments)
    // }

    //     async onClickPost (text){
    //     const res = await axios.post(`/api/newpost`, { text })
    //         console.log(res);
                             
    //     }

        
  
 
    //     onClickLike(num){
    //             console.log(num)
    //     }

        // addNewcomment(comment){
        //     this.setState({
        //         comments:[comment, ...this.state.comments]
        //     })
        //     // for(var i=0; i<this.state.comments[0].data.length;i++){
        //     //     console.log(this.state.comments[0].data[i].text)
        //     // }
        //     // this.state.comments.map((texts, index) => (
        //     //     console.log(texts),
        //     //     console.log(index)
                
        //     // ))
           
        //     // console.log(this.state.comments)
        // }

    render(){
                return (
                <div>
                 
                        <BrowserRouter>
                            <div>                 
                            <Navbar />         
                                <Route path="/signinform" exact component={Form} />
                                <Route path="/signupform" exact component={Signupform}/>               
                                <Route path="/welcome" exact component={Welcome}/>   
                                <Route path="/signout" exact component={signoutpage}/>  
                                <Route path ="/home" exact component={Home}/>          
                                {/* <Route path="/home" exact render={(props) =>
                                    // <div>
                                    // <NewPost {...props}
                                    // onClick={this.onClickPost}
                                    // />
                                    //  {
                                    //     this.state.comments.map((comment, index)=> (
                                    //          <PostFeed 
                                    //          key ={index}
                                    //          text ={comment}
                                    //          avt={Faker.image.avatar()}
                                    //          image={Faker.image.image()}
                                    //          onClick={this.onClickLike}
                                    //          />
                                    //     ))    
                                    // }  
                                    // </div>
                                 } */}
                                                             
                            </div> 
                        </BrowserRouter>  
                 
                 </div>
                    
                );
                
        }
    };

export default App;