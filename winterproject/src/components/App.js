import React from 'react';
import axios from 'axios';
import PostFeed from './PostFeed';
import NewPost from "./NewPost";
import Navbar from "./Navbar"
import FriendsTab from "./FriendsTab"
import Faker from 'faker'






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
            const res = await axios.get(`/api/newpost`)
              console.log(res)
              this.addNewcomment(res)
    
    }




  async onClickPost (text){
        const res = await axios.post(`/api/newpost`, { text })
            console.log(res);
           
            
        }

  
 
        onClickLike(num){
                console.log(num)
        }
        addNewcomment(comment){
            this.setState({
                comments:[comment, ...this.state.comments]
            })
            for(var i=0; i<this.state.comments[0].data.length;i++){
                console.log(this.state.comments[0].data[i].text)
            }
            
            
        }

    render(){
                return (
                <div>
                    <Navbar />
                    
                    <NewPost 
                    onClick={this.onClickPost}
                    text={this.state.comments}
                    
                    />    
                    
                    <div className="postfeed">
                        <PostFeed 
                        avt={Faker.image.avatar()}
                        image={Faker.image.image()}
                        onClick={this.onClickLike}
                        
                        />
                    </div>
                    
   
                    
                    </div>
                    
                );
                
        }
    };

export default App;