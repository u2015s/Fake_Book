import React from 'react'

const FriendsTab = () =>{
return(
    
    
        <div className="ui vertical menu" style={{marginLeft:'80%'}}>

        <div className="item" >
                <div className="ui transparent icon input" style={{padding:'10px'}}>
                <input type="text" placeholder="Search mail..."  />
                <i className="search icon" />
                </div>

            <a className="active teal item">
                Inbox
                
            </a>
            <a className="item">
                Spam
                
            </a>
            <a className="item">
                Updates
                
            </a>
           
            </div>
            </div>


        
           


)

}

export default FriendsTab;