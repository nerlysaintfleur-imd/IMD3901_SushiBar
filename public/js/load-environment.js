'use strict';

AFRAME.registerComponent('load-environment', {
    schema : {},
    init :function(){
        const Context_AF = this;

        Context_AF.createKitchen();
        Context_AF.createAvocado();
        Context_AF.createSalmon();
        Context_AF.createSalt();


    },
    createKitchen : function(){
        const Context_AF = this;

        let kitchenElem  = document.createElement('a-entity');//create new element kitchen in memory
        kitchenElem.setAttribute('obj-model',{obj:'/assets/models/environment/building_final2.obj'});
        kitchenElem.setAttribute('position',{x:0, y:1, z:0});
        kitchenElem.setAttribute('material',{src:'/assets/models/environment/building_uv.png'});

        const scene = document.querySelector('a-scene');

    }
});
