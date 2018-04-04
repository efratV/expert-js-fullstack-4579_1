import React from 'react';


//function style comonent
//is like a render function in a class style component
//function style component can get one parameter that is like the "this.props" in class style comonent


/*
can get one parameter - that is injected by react
(will get all the attribute that we added to the tag)
*/

/*
props.children - is a built in keyword to access the 
content between the opening tag and the closing tag
*/
const pizza = ( p ) => {

    return (
        <div>
            <p>Pizza price: {p.price} </p>
            <p>Num of slices: {p.slices} </p>
            <p>{p.children}</p>
            <p>{p.subTitle}</p>

            <hr/>
        </div>
    )
};

export default pizza;