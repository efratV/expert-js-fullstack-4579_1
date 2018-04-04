import React from 'react';


const foot=(props)=>{
    return(<div>
            <p>&copy; {props.creator} {(new Date).getFullYear()}</p>
        </div>
        );
  
}


export default foot;