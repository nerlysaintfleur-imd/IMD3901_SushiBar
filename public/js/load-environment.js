'use strict';

AFRAME.registerComponent('load-environment', {
    schema : {},
    init :function(){
        const Context_AF = this;
        Context_AF.createKitchen();
        Context_AF.createAvocado();
        Context_AF.createSalmon();


        
    },
    createKitchen : function(){
        const Context_AF = this;

        let kitchenElem  = document.createElement('a-entity');//create new element kitchen in memory
        kitchenElem.setAttribute('obj-model',{obj:'/assets/models/environment_v05.obj'});
        kitchenElem.setAttribute('position',{x:0, y:1, z:0});
        kitchenElem.setAttribute('material',{src:'/assets/textures/environment_v05.mtl'});
        
    },
    createAvocado : function(){
        const Context_AF = this;

        let avocadoElem  = document.createElement('a-entity');//create new element avocado in memory
        avocadoElem.setAttribute('obj-model',{obj:'/assets/models/avacado.obj'});
        avocadoElem.setAttribute('position',{x:0, y:0, z:0});
        avocadoElem.setAttribute('material',{src:'/assets/textures/avacado.mtl'});
        
    },
    createSalmon : function(){
        const Context_AF = this;

        let salmonElem  = document.createElement('a-obj-model');//create new element avocado in memory
        salmonElem.setAttribute('obj-model',{obj:'/assets/models/salmon.obj'});
        salmonElem.setAttribute('position',{x:0, y:0, z:0});
        salmonElem.setAttribute('material',{src:'/assets/textures/salmon.png'});
        
    }
});