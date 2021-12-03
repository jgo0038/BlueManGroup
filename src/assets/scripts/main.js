/**
 * Import dependencies from node_modules
 * see commented examples below
 */
 import * as bootstrap from 'bootstrap'
// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();

function showMessage(){
  console.log("HOLA")
  let text = document.getElementsByClassName("is-visibleFaq")[0];
  if(text.style.display === "none"){
    text.style.display = "flex";
  } else {
    text.style.display = "none";
  }

}

document.getElementsByClassName("faqDisplay")[0].addEventListener("click", function(event) { 
  showMessage();
});