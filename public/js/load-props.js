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

        document.querySelector('#rice').addEventListener('click', function() {
            console.log('click');
            Context_AF.relocateRice();
        })


    },
    relocateAvocado : function(){

        //remove the obj from kitchen parent
        let avocado = document.querySelector('#avocado');
        avocado.parentNode.removeChild(avocado);
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
              setTimeout(function(){ alert('Avocado Restocked' );
              let avocadoInventory  = document.createElement('a-entity');//create new element rice in memory
              avocadoInventory.setAttribute('id','avocado');
              avocadoInventory.setAttribute('obj-model',{obj:'/assets/models/props/avacado/avacado.obj'});
              avocadoInventory.setAttribute('position',{x:57, y:22.5, z:25});
              avocadoInventory.setAttribute('scale',{x:1, y:1, z:1});
              avocadoInventory.setAttribute('material',{src:'/assets/models/props/avacado/avocado.png'});
              avocadoInventory.setAttribute('load-props',{});


              const scene2 = document.querySelector('a-scene');
              scene2.appendChild(avocadoInventory);                     //append rice to kitchen

          //Delay creation time to remake it
          }, 2000);

    },

    relocateRice : function(){

        //remove the obj from kitchen parent
        let rice =  document.querySelector('#rice');

        rice.parentNode.removeChild(rice);
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
            riceInventory.setAttribute('id','rice');
            riceInventory.setAttribute('obj-model',{obj:'/assets/models/props/rice/rice.obj'});
            riceInventory.setAttribute('position',{x:52, y:22.5, z:-10});
            riceInventory.setAttribute('scale',{x:1, y:1, z:1});
            riceInventory.setAttribute('material',{src:'/assets/models/props/rice/rice.png'});
            riceInventory.setAttribute('load-props',{});


            const scene2 = document.querySelector('a-scene');
            scene2.appendChild(riceInventory);                     //append rice to kitchen

        //Delay creation time to remake it
        }, 2000);

    }

});

//if the elements are all at the same location try to serve button and then see
