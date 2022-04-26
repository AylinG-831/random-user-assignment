import { useState } from 'react';

function UserSummary(props) {
    const [showMore, setShowMore] = useState(false)

    const flipShowMore = () => {
        setShowMore(!showMore)
            console.log(showMore)
    
    }

    return (
       
        <div className="userSummary">
            { props.userData === null ?  <p>There is no user data.</p> : 
            <button onClick={flipShowMore}>Show More</button> }
                { showMore ?
                    <div className="userDisplay">
                      <p>Username: {props.userData[0].name.first}</p>
                      <p>Email: {props.userData[0].email}</p>
                      </div>
                    : <p>Click the button for user info!</p> 
            }
             
        </div> 
           
    )
}

export default UserSummary;