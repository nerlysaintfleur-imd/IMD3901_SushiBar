'use strict';

AFRAME.registerComponent('controller-management', {
    schema : {},
    init :function(){
        const Context_AFR = this;
        Context_AF.createRightHand();

        const Context_AFL = this;
        Context_AF.createLeftHand();

        this.leftHand = document.querySelector("#lefthand");
        this.rightHand = document.querySelector("#rightHand");

        
    }

});