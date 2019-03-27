'use strict';

AFRAME.registerComponent('load-props', {
    schema : {},
    init :function(){
        const Context_AF = this;

        //Add popping sound here
        //Context_AF.popSound = document.querySelector('#popSound');

        //Context_AF.el.addEventListener('click',function(event){
            //console.log('click');
            //Context_AF.relocateAvocado();
            

            //Context_AF.popSound.components['sound'].playSound
       // })

        document.querySelector('#avocado').addEventListener('click', function() {
            console.log('click');
            Context_AF.relocateAvocado();
        })
        

    },
    relocateAvocado : function(){

        //remove the obj from kitchen parent
        const Context_AF = this;
        Context_AF.el.parentNode.removeChild(Context_AF.el);
        console.log('click');
        console.log('Avocado object disappeared');

        
        //relocate to the bowl area

        let avocadoElem  = document.createElement('a-entity');//create new element avocado in memory
        avocadoElem.setAttribute('obj-model',{obj:'/assets/models/props/avacado/avacado.obj'});
        avocadoElem.setAttribute('position',{x:0, y:0, z:0});
        avocadoElem.setAttribute('scale',{x:1, y:1, z:1});
        avocadoElem.setAttribute('material',{src:'/assets/models/props/avacado/avocado.png'});
    
        const scene = document.querySelector('a-scene');
        scene.appendChild(avocadoElem);                     //append avodado to kitchen

        //Delay creation time

    }

});

//if the elements are all at the same location try to serve button and then see