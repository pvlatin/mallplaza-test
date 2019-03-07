import React from 'react'


const Store = (props) => {
    return ( 
        <div style={{border: '1px solid gray'}}>
            {props.data.value}
        </div>
     );
}
 
export default Store;