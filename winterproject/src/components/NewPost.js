import React from 'react'

class NewPost extends React.Component {

    state = {text:[]};

    onInputChange = (val) =>{
        this.setState({
            text: val.target.value
            
        })

    }
    SendingtoApp = () =>{
            
            this.props.onClick(this.state.text)

    }
    



    render(){
                return(
                        <div className="ui form"  >
                            <div style={{marginLeft: '35%', marginRight: '35%', padding:'10px'}}>
                                <label>New Post</label>
                                    <div className="field"  >
                                        <textarea
                                        value={this.state.text}
                                        onChange={this.onInputChange}
                                        />
                                        <button className="ui primary button" onClick={this.SendingtoApp}>
                                            Post
                                        </button>
                                   </div>
                            </div>
                    </div>
                );

    }
}

export default NewPost;