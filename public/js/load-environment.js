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
        kitchenElem.setAttribute('obj-model',{obj:'/assets/models/environment/building_final.obj'});
        kitchenElem.setAttribute('position',{x:0, y:1, z:0});
        kitchenElem.setAttribute('material',{src:'/assets/models/environment/floor_v02.png'});

    },
    createAvocado : function(){
        const Context_AF = this;

        let avocadoElem  = document.createElement('a-entity');//create new element avocado in memory
        avocadoElem.setAttribute('obj-model',{obj:'/assets/models/props/avacado/avacado.obj'});
        avocadoElem.setAttribute('position',{x:0, y:0, z:0});
        avocadoElem.setAttribute('material',{src:'/assets/models/props/avacado/avocado.png'});

    },
    createSalmon : function(){
        const Context_AF = this;

        let salmonElem  = document.createElement('a-entity');//create new element salmon in memory
        salmonElem.setAttribute('obj-model',{obj:'/assets/models/salmon.obj'});
        salmonElem.setAttribute('position',{x:0, y:0, z:0});
        salmonElem.setAttribute('material',{src:'/assets/textures/salmon.png'});

    },
    createSalt : function(){
        const Context_AF = this;

        let saltElem  = document.createElement('a-obj-model');//create new element salt in memory
        saltElem.setAttribute('obj-model',{obj:'/assets/models/props/salt/salt.obj'});
        saltElem.setAttribute('position',{x:0, y:0, z:0});
        saltElem.setAttribute('material',{src:'/assets/models/props/salt/salt.mtl'});


    }
});
