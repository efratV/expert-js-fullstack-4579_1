import React from 'react';


//function style comonent

/*
can get one parameter - that is injected by react
(will get all the attribute that we added to the tag)
*/

/*
props.children - is a built in keyword to access the 
content between the opening tag and the closing tag
*/
const pizza = ( props ) => {

    const pizzaHandler = () => {
       console.log("inside pizza - pizzaHandler");
       props.discount(props.num,0.8);
    };

    //onClick={props.discount} - DONT ADD () !!!
    return (
        <div>
            <p>Pizza price: {props.price} </p>
            <p>Num of slices: {props.slices} </p>
            <p>{props.children}</p>
            <button onClick={props.discount.bind(this,props.num,0.8)}>get discount 1</button>
            <button onClick={()=>props.discount(props.num,0.8)}>get discount 2</button>
            <button onClick={()=>pizzaHandler()}>get discount 3</button>
            <hr/>
        </div>
    )
};

export default pizza;