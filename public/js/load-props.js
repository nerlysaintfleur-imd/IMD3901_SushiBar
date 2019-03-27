'use strict';

AFRAME.registerComponent('load-props', {
    schema : {},
    init :function(){
        const Context_AF = this;

        //Add popping sound here
        // Context_AF.popSound = document.querySelector('#popSound');

        Context_AF.el.addEventListener('click',function(event){
            console.log('click');
            Context_AF.createAvocado();
            Context_AF.createSalmon();
            Context_AF.createSalt();

            //Context_AF.popSound.components['sound'].playSound
        })

    },
createAvocado : function(){

        //remove the obj from kitchen parent
        const Context_AF = this;
        Context_AF.el.parentNode.removeChild(Context_AF.el);
        console.log('click');
        console.log('object disappeared');


},
createSalmon : function(){
    const Context_AF = this;

    let salmonElem  = document.createElement('a-entity');//create new element salmon in memory
    salmonElem.setAttribute('obj-model',{obj:'/assets/models/salmon.obj'});
    salmonElem.setAttribute('position',{x:0, y:0, z:0});
    salmonElem.setAttribute('material',{src:'/assets/textures/salmon.png'});

    const scene = document.querySelector('a-scene');
    scene.appendChild(salmonElem);                     //append salmon to kitchen

},
createSalt : function(){
    const Context_AF = this;

    let saltElem  = document.createElement('a-obj-model');//create new element salt in memory
    saltElem.setAttribute('obj-model',{obj:'/assets/models/props/salt/salt.obj'});
    saltElem.setAttribute('position',{x:0, y:0, z:0});
    saltElem.setAttribute('material',{src:'/assets/models/props/salt/salt.mtl'});

    const scene = document.querySelector('a-scene');
    scene.appendChild(saltElem);                     //append salt to kitchen

    }
});