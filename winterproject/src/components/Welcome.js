import React from 'react'
import requireAuth from '../requireAuth'
class Welcome extends React.Component{
        

        render(){
            return(
                <div>
                    <h3>Welcome your are logged in</h3>
                </div>

            )
        }

}

export default requireAuth(Welcome)