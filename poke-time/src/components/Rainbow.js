import React from 'react';

//no functionality in wrappedComponent its just a name
const Rainbow = (WrappedComponent) => {
    const colors =['red', 'orange','pink', 'green','blue','yellow']

    const randomColor = colors[Math.floor(Math.random() * 6)]

    const className = randomColor + '-text'

    return (props) => {
        return(
            <div className={className}>
                <WrappedComponent {...props} />
            </div>

        )
    }

} 
 export default Rainbow