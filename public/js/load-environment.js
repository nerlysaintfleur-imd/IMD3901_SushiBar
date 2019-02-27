'use strict';

AFRAME.registerComponent('load-environment', {
    schema : {},
    init :function(){
        const Context_AF = this;
        Context_AF.createKitchen();

        
    },
    createKitchen : function(){
        const Context_AF = this;

        let kitchenElem  = document.createElement('a-entity');//create new element in memory
        kitchenElem.setAttribute('obj-model',{obj:'/assets/models/Environment_v02.obj'});
        kitchenElem.setAttribute('position',{x:0, y:0, z:0});
        kitchenElem.setAttribute('material',{src:'/assets/textures/Environment_v02.mtl'});
        
        const scene = document.querySelector('a-scene');
        //scene.appendChild(monumentElem);                         //append cow to parent(scene)
    }
});