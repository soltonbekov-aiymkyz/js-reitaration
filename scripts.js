//1st item 
// function myFunction(){
//     var popup = document.getElementById('myPopup');
//     popup.classList.toggle("show");
// }


//second Item
// function myMove(){
//     let elem = document.getElementById("myAnimation");
//     let pos = setInterval(frame,10);
//     function frame(){
//         if (pos == 350){
//             clearInterval(id);
//         }else{
//             pos++;
//             elem.style.top = pos + 'px';
//             elem.style.left = pos + 'px';

//         }
//     }
// }


(function() {
    // Bind Click event to the drop down navigation button
    document.querySelector('.nav-button').addEventListener('click', function() {
      /*  Toggle the CSS closed class which reduces the height of the UL thus 
          hiding all LI apart from the first */
      this.parentNode.parentNode.classList.toggle('closed')
    }, false);
  })();