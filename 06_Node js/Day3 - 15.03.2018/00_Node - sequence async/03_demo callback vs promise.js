
//--------------Promise Demo of result when array is 4 element:--------------
() => {
    return Promise.resolve()
        .then((result) => { /*elemnt 0*/ })
        .then((result) => { /*elemnt 1*/ })
        .then((result) => { /*elemnt 2*/ })
        .then((result) => { /*elemnt 3*/ })
}
//-------------------------------------------------------------------


//--------------Callback Demo of result when array is 4 element:--------------
function f1(f2) {
    f2(function f3() {
        /*elemnt 0*/
        function f4() {
            /*elemnt 1*/
            function f5() {
                /*elemnt 2*/
                function f6() {
                    /*elemnt 3*/
                }
            }
        }
    }

    );
}

//-------------------------------------------------------------------

