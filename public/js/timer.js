'use strict';

AFRAME.registerComponent('timer', {
    schema : {},
    init :function(){
        const Context_AF = this;

        console.log("WORK THE TIMER");


    },
   tick: function(time, timeDelta){

    console.log("YOU HAVE ACCESSED THE TICK FUNCTION");

    this.curTime = this.el.sceneEl.time;
    this.prevTime= this.curTime;


    let textElem =  document.getElementById('timerNUMBERS');

    textElem.setAttribute('text',this.curTime);
    const scene = document.querySelector('a-scene');
    scene.appendChild(textElem);                   


   }
   

});

//if the elements are all at the same location try to serve button and then see
