//STEP 1
// we select the first action we want to listen to or for which is form submition
//we select the form first
const ourForm = document.getElementById('create-task-form');
//we then select the event we are listening for which is submit


                 // STEP 5
// we need to append the new list we created to our ul
// we call the id or class or tagName of the UL in which we are appendinf the li
const newli = document.querySelector('#tasks');




ourForm.addEventListener('submit', (e)=>{ // STEP 2:
(e).preventDefault(); //STEP 3
// if we want to enter something in the input and click on the submit button we need to teel our js to stop the default behaviour of submiting
// we use prevent default behaviour by using the default method

                     // STEP 4
// we want to append the new content we add to the create new task to our ul in our html
// when we submit the form we want the data to be added to our ul as a new li
// VALUE ATTRIBUTE - corresponds to whatever is inside the input
 
const myInput= (ourForm.elements.newTaskdescription.value);

           // STEP 7
// pass the element property we renamed into the function where we are passing the new elements
buildToDo(myInput); // if we had lots of input we are creating we would pass them here as well

  // STEP 8
// We reset the named element property to the default value which was nothing by using the result metho of reset()
ourForm.reset();  
})




function buildToDo(myInput){ // we pass in the element property we called from the form...if we had many inputs we would pass them

// we make new li to go to our todo 
const li = document.createElement('li');

li.append(myInput)
// console.log(li) testing to see if our li was created

     // STEP 6
// we append the li
newli.append(li)

}