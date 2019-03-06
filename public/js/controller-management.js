'use strict';

AFRAME.registerComponent('controller-management', {
    schema : {},
    init :function(){
        const Context_AF = this;
        Context_AF.createHands();

        this.leftHand = document.querySelector("#lefthand");
        this.rightHand = document.querySelector("#rightHand");

        
    },
    createHands : function(){
       
    }
});