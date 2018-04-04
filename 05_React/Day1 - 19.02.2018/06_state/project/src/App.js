import React, { Component } from 'react';
import './App.css';
import Pizza from './Pizza/Pizza';


//class style comonent
class App extends Component {



    //state is a react keyword
    //state can be used only in class style comonent
    //if the state vlues are changed - the DOM will be re-rendered
    state = {
        prices: [60, 65, 100]
    };

    //if the prices vlues are changed - the DOM will not be re-rendered
    prices = [60, 65, 100];



    discountHandler = (index, discountPrecent) => {
        console.log("before - discountHandler", this.prices[index]);
        this.prices[index] *= discountPrecent;
        console.log("after - discountHandler", this.prices[index]);
    };

    discountStateHandler = (index, discountPrecent) => {
        console.log("inside app - discountStateHandler");
        //this.state.prices[index]*=discountPrecent;  --> works, but does not re-render the DOM

        let temp0 = [...this.state.prices, 1];
        console.log("temp0", temp0);
        let temp1 = [this.state.prices, 1];
        console.log("temp1", temp1);

        let temp = [...this.state.prices];
        temp[index] *= discountPrecent;
        this.setState(
            {
                prices: temp
            }
        );
    }
    render() {

        return (

            //jsx must return one root element


            <div className="App">
                <h1>Anna's Pizza</h1>
                <Pizza num="0" price={this.prices[0]} slices="4" discount={this.discountHandler} />
                <Pizza num="1" price={this.state.prices[1]} slices="6" discount={this.discountStateHandler}>with two toppings!!</Pizza>
                <Pizza num="2" price={this.state.prices[2]} slices="8" discount={this.discountStateHandler} />
            </div>
        );
    }
}

export default App;



/*

---------------------------------------
Mouse Events

NOTE:The onMouseEnter and onMouseLeave events propagate from the element being left to the one being entered instead of ordinary bubbling and do not have a capture phase.
---------------------------------------
Event names:
    onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit
    onDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave
    onMouseMove onMouseOut onMouseOver onMouseUp

Properties:

    boolean altKey
    number button
    number buttons
    number clientX
    number clientY
    boolean ctrlKey
    boolean getModifierState(key)
    boolean metaKey
    number pageX
    number pageY
    DOMEventTarget relatedTarget
    number screenX
    number screenY
    boolean shiftKey
--------------------------------------
Composition Events
--------------------------------------
Event names:
    onCompositionEnd onCompositionStart onCompositionUpdate

Properties:
    string data

--------------------------------------
Keyboard Events
--------------------------------------
Event names:
    onKeyDown onKeyPress onKeyUp

Properties:
    boolean altKey
    number charCode
    boolean ctrlKey
    boolean getModifierState(key)
    string key
    number keyCode
    string locale
    number location
    boolean metaKey
    boolean repeat
    boolean shiftKey
    number which

---------------------------------------
Focus Events
---------------------------------------
Event names:
    onFocus onBlur
These focus events work on all elements in the React DOM, not just form elements.

Properties:
    DOMEventTarget relatedTarget


---------------------------------------    
Form Events
---------------------------------------

Event names:
    onChange onInput onInvalid onSubmit

---------------------------------------
Selection Events
---------------------------------------
Event names:
    onSelect

---------------------------------------
Touch Events
---------------------------------------

Event names:
    onTouchCancel onTouchEnd onTouchMove onTouchStart

Properties:
    boolean altKey
    DOMTouchList changedTouches
    boolean ctrlKey
    boolean getModifierState(key)
    boolean metaKey
    boolean shiftKey
    DOMTouchList targetTouches
    DOMTouchList touches

---------------------------------------
UI Events
---------------------------------------
Event names:
    onScroll
Properties:
    number detail
    DOMAbstractView view

---------------------------------------
Wheel Events
---------------------------------------
Event names:
    onWheel

Properties:
    number deltaMode
    number deltaX
    number deltaY
    number deltaZ

---------------------------------------
Media Events
---------------------------------------
Event names:
    onAbort onCanPlay onCanPlayThrough onDurationChange onEmptied onEncrypted
    onEnded onError onLoadedData onLoadedMetadata onLoadStart onPause onPlay
    onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend
    onTimeUpdate onVolumeChange onWaiting

---------------------------------------
Image Events
---------------------------------------
Event names:
    onLoad onError

---------------------------------------
Animation Events
---------------------------------------
Event names:
    onAnimationStart onAnimationEnd onAnimationIteration

Properties:
    string animationName
    string pseudoElement
    float elapsedTime

---------------------------------------
Transition Events
---------------------------------------
Event names:
    onTransitionEnd

Properties:
    string propertyName
    string pseudoElement
    float elapsedTime



*/
