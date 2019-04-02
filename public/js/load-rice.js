'use strict';

AFRAME.registerComponent('load-rice', {
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

        document.querySelector('#rice').addEventListener('click', function() {
            console.log('click');
            Context_AF.relocateRice();
        })


    },
    relocateRice : function(){

        //remove the obj from kitchen parent
        const Context_AF = this;
        Context_AF.el.parentNode.removeChild(Context_AF.el);
        console.log('click');
        console.log('Rice object disappeared');


        //relocate to the bowl area

        let riceElem  = document.createElement('a-entity');//create new element rice in memory
        riceElem.setAttribute('obj-model',{obj:'/assets/models/props/rice/rice.obj'});
        riceElem.setAttribute('position',{x:0, y:0, z:0});
        riceElem.setAttribute('scale',{x:1, y:1, z:1});
        riceElem.setAttribute('material',{src:'/assets/models/props/rice/rice.png'});

        const scene = document.querySelector('a-scene');
        scene.appendChild(riceElem);                     //append rice to kitchen

            setTimeout(function(){ alert('Rice Restocked' );
            let riceInventory  = document.createElement('a-entity');//create new element rice in memory
            riceInventory.setAttribute('obj-model',{obj:'/assets/models/props/rice/rice.obj'});
            riceInventory.setAttribute('position',{x:52, y:22.5, z:-10});
            riceInventory.setAttribute('scale',{x:1, y:1, z:1});
            riceInventory.setAttribute('material',{src:'/assets/models/props/rice/rice.png'});
            riceInventory.setAttribute('script',{src:'/js/load-rice.js'});


            const scene2 = document.querySelector('a-scene');
            scene2.appendChild(riceInventory);                     //append rice to kitchen

        //Delay creation time to remake it
        }, 2000);

    }

});

//if the elements are all at the same location try to serve button and then see
