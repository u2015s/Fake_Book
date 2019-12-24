import React from 'react'

class PostFeed extends React.Component{

    state = {likes:null, comment:[]}

    onInputChange = (val) =>{
      this.setState({
          comment: val.target.value  
      })

  } 
    changelike=()=>{
      this.setState(prevState => {
        return{ likes: prevState.likes + 1}
        }, ()=>{
          this.props.onClick(this.state.likes)
        })
      
    }
    sendcomment = () =>{
      this.props.Newcomment(this.state.comment)
    }


    //  mappingprops= () => {
    //       this.props.comments.map((comment,index) => ( 

    //       ))
    //  } 





    render(){
        return(
         
          <div className="ui card" style={{marginLeft: '36%', marginRight: '49%'}}>
          <div className="content" >
            <div className="right floated meta">14h</div>
            <img className="ui avatar image" src={this.props.avt} /> Elliot
            <div className="ui huge image">
              {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgdmgiXDeDj7Osrvbdl1Ppuos_q_uCDIUZims8fBQjFzXwRoxX" /> */}
              <p>{this.props.text}</p>
            </div>
            <div className="content">
            <button className="ui icon button">
              <i className="share square outline icon"></i>
              S
            </button>
              <span className="middle aligned" style={{marginLeft:"20px"}}>
                <button className="ui icon button">
                <i className="comment icon" />
                C  
                </button>
              </span>
              <button className="ui icon button" onClick={this.changelike} >
              <span style={{marginleft:"25px"}}>
                <i className="heart outline like icon" />
                  {this.state.likes}
              </span>
             </button>
                {/* <div className="ui left labeled button" tabIndex={0}>
                          <a className="ui basic right pointing label">
                            2,048
                          </a>
                        <div className="ui button">
                          <i className="heart icon" /> Like
                   </div>
              </div> */}
              <div className="extra content" style={{padding:"8px"}}>
                    <div className="ui large transparent left icon input">
                    <i className="comment icon" />  
                      <input 
                      type="text" placeholder="Add Comment..." 
                      value={this.state.comment}
                      onChange={this.onInputChange}                                      
                      />
                      <button onClick={this.sendcomment}>post</button>
                    </div>
                  </div>

            </div>
           
          </div>
        </div>
        
        )
            };
};

export default PostFeed;
