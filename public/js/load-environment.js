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
        kitchenElem.setAttribute('obj-model',{obj:'/assets/models/environment_v05.obj'});
        kitchenElem.setAttribute('position',{x:0, y:1, z:0});
        kitchenElem.setAttribute('material',{src:'/assets/models/environment_v05.mtl'});
        
    }
});