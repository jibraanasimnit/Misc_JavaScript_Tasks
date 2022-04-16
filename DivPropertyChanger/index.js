// // // // // var classRegister = [ "Lawrence", "John", "Jeff"];

// // // // // // for( var i = 0; i < classRegister.length; i++ ) 
// // // // // // {
// // // // // //     console.log(classRegister[i]);
// // // // // // }

// // // // // // for( var i = classRegister.length - 1;  i >= 0; i-- ) 
// // // // // // {
// // // // // //     console.log(classRegister[i]);
// // // // // // }

// // // // // for(i in classRegister )
// // // // // {
// // // // //     console.log(classRegister[i])
// // // // // }

// // // // /*
// // // //  * Create the function factorial here
// // // //  */
// // // // // let n = 4;
// // // // // function factorial()    
// // // // // {   
// // // // //     if( n == 1){
// // // // //         return 1;      
// // // // //     }
// // // // //     return n*(factorial(n-1))
// // // // // }

// // // // var pHello = document.getElementById('pg');

// // // // pHello.innerText += 'addition';
// // // // pHello.innerHTML += "order <h2> Hello World, Again! </h2>";
// // // // pHello.outerHTML += "<h1> New Heading";
// // // // span document.querySelectorAll('p')

// // // var el = document.getElementById('style');

// // // // el.style.background = 'blue';
// // // // el.style.color = 'white';
// // // // el.style.width = '200px';
// // // // el.style.textAlign = 'center';

// // // el.style.cssText = 'background : blue; color : white; width : 200px';
// // // el.style.cssText += 'text-align : center'

// // var select = document.getElementsByName('cars')[0];

// // select.onclick = function(event)
// // {
// //     console.log(event);
// // };

// // select.addEventListener('click', function(event){
// //     console.log('clicked by an add listener');
// // });

// // select.removeEventListener('click')

// var element = document.createElement('div');

// element.style.cssText = "width : 200px; height : 20px; background:blue;";
// element.onclick = function(){
//     alert('hello!');
// };
// // document.body.appendChild( element );
// var target = document.getElementById('yellow');
// document.body.insertBefore(element, target);

























