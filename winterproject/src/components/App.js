import React from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import PostFeed from './PostFeed';
import NewPost from "./NewPost";
import Navbar from "./Navbar"
import FriendsTab from "./FriendsTab"
import Faker from 'faker'
import Form from './Form'




class App extends React.Component{

    constructor(props){
        super(props);
       
        this.state = {
            comments:[],
            like: null,
            Posttext:[]    
        }
            


    }

    async componentDidMount(){
     
         // get all the comment
            const comres = await axios.get(`/api/newpost`)
            comres.data.forEach(function(item){
                this.setState({
                    comments:[item.text, ...this.state.comments]
                })
                
            }, this)
              console.log(this.state.comments)
    }




  async onClickPost (text){
        const res = await axios.post(`/api/newpost`, { text })
            console.log(res);
           
            
        }

  
 
        onClickLike(num){
                console.log(num)
        }npm

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
                
                {/* <BrowserRouter>
                            <div> */}
                            <Navbar />
                                {/* <Switch>
                                <Route path="/signinform" component={Form} />
                                </Switch>
                            </div> 
                        </BrowserRouter>  */}
                        
                    <NewPost 
                    onClick={this.onClickPost}
                    // text={this.state.comments}
                    
                    />  
                      






                    {
                       this.state.comments.map((comment, index)=> (
                            <PostFeed 
                            key ={index}
                            text ={comment}
                            avt={Faker.image.avatar()}
                            image={Faker.image.image()}
                            onClick={this.onClickLike}
                            />
                       ))    


                    }
                    {/* <NewPost 
                    
                    text={this.state.comments}
                    
                    />     */}
                    
                    {/* <div className="postfeed">
                        <PostFeed 
                        
                        
                        />
                    </div> */}
                    
   
                    
                    </div>
                    
                );
                
        }
    };

export default App;