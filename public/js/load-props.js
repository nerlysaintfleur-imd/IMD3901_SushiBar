'use strict';

AFRAME.registerComponent('load-props', {
    schema : {},
    init :function(){
        const Context_AF = this;

        Context_AF.popSound = document.querySelector('#pop');

        document.querySelector('#avocado').addEventListener('click', function() {
            console.log('click');
            //Pop sound
            Context_AF.popSound.components['sound'].playSound();

            Context_AF.relocateAvocado();
        })

        document.querySelector('#rice').addEventListener('click', function() {
            console.log('click');
            //Pop sound
            Context_AF.popSound.components['sound'].playSound();

            Context_AF.relocateRice();
        })
        document.querySelector('#cucumber').addEventListener('click', function() {
            console.log('click');
            //Pop sound
            Context_AF.popSound.components['sound'].playSound();

            Context_AF.relocateCucumber();
        })
        document.querySelector('#salmon').addEventListener('click', function() {
            console.log('click');
            //Pop sound
            Context_AF.popSound.components['sound'].playSound();

            Context_AF.relocateSalmon();
        })
        document.querySelector('#seaweed').addEventListener('click', function() {
            console.log('click');
            //Pop sound
            Context_AF.popSound.components['sound'].playSound();

            Context_AF.relocateSeaweed();
        })

    },
    relocateAvocado : function(){

        //remove the obj from kitchen parent
        let avocado = document.querySelector('#avocado');
        avocado.parentNode.removeChild(avocado);
        console.log('Avocado object disappeared');


        //relocate to the bowl area

        let avocadoElem  = document.createElement('a-entity');//create new element avocado in memory
        avocadoElem.setAttribute('id','relocateAvocado');
        avocadoElem.setAttribute('obj-model',{obj:'/assets/models/kitchenEnviro/props/avocado/avocado.obj'});
        avocadoElem.setAttribute('position',{x:2, y:2, z:2});
        avocadoElem.setAttribute('scale',{x:0.5, y:0.5, z:0.5});
        avocadoElem.setAttribute('material',{src:'/assets/models/kitchenEnviro/props/avocado/avocado.png'});

        const scene = document.querySelector('a-scene');
        scene.appendChild(avocadoElem);                     //append avodado to kitchen

        //Delay creation time
              setTimeout(function(){ alert('Avocado Restocked' );
              let avocadoInventory  = document.createElement('a-entity');//create new element rice in memory
              avocadoInventory.setAttribute('id','avocado');
              avocadoInventory.setAttribute('obj-model',{obj:'/assets/models/kitchenEnviro/props/avocado/avocado.obj'});
              avocadoInventory.setAttribute('position',{x:0, y:0, z:0});
              avocadoInventory.setAttribute('scale',{x:0.5, y:0.5, z:0.5});
              avocadoInventory.setAttribute('material',{src:'/assets/models/kitchenEnviro/props/avocado/avocado.png'});
              avocadoInventory.setAttribute('load-props',{});


              const scene2 = document.querySelector('a-scene');
              scene2.appendChild(avocadoInventory);                     //append rice to kitchen

              //Recharge sound
              this.rechargeSound = document.querySelector('#recharge');
              this.rechargeSound.components['sound'].playSound();

          //Delay creation time to remake it
        }, 1000);

    },
    relocateCucumber : function(){

        //remove the obj from kitchen parent
        let cucumber = document.querySelector('#cucumber');
        cucumber.parentNode.removeChild(cucumber);
        console.log('Cucumber object disappeared');


        //relocate to the cutting board area

        let cucumberElem  = document.createElement('a-entity');//create new element avocado in memory
        cucumberElem.setAttribute('id','relocateCucumber');
        cucumberElem.setAttribute('obj-model',{obj:'/assets/models/kitchenEnviro/props/cucumber/cucumber.obj'});
        cucumberElem.setAttribute('position',{x:2, y:2, z:2});
        cucumberElem.setAttribute('scale',{x:0.5, y:0.5, z:0.5});
        cucumberElem.setAttribute('material',{src:'/assets/models/kitchenEnviro/props/cucumber/cucumber.png'});

        const scene = document.querySelector('a-scene');
        scene.appendChild(cucumberElem);                     //append cucumber to kitchen

        //Delay creation time
              setTimeout(function(){ alert('Cucumber Restocked' );
              let cucumberInventory  = document.createElement('a-entity');//create new element cucumber in memory
              cucumberInventory.setAttribute('id','cucumber');
              cucumberInventory.setAttribute('obj-model',{obj:'/assets/models/kitchenEnviro/props/cucumber/cucumber.obj'});
              cucumberInventory.setAttribute('position',{x:0, y:0, z:0});
              cucumberInventory.setAttribute('scale',{x:0.5, y:0.5, z:0.5});
              cucumberInventory.setAttribute('material',{src:'/assets/models/kitchenEnviro/props/cucumber/cucumber.png'});
              cucumberInventory.setAttribute('load-props',{});


              const scene2 = document.querySelector('a-scene');
              scene2.appendChild(cucumberInventory);                     //append cucumber to kitchen

              //Recharge sound
              this.rechargeSound = document.querySelector('#recharge');
              this.rechargeSound.components['sound'].playSound();

          //Delay creation time to remake it
        }, 1000);

    },
    relocateSeaweed : function(){

        //remove the obj from kitchen parent
        let seaweed = document.querySelector('#seaweed');
        seaweed.parentNode.removeChild(seaweed);
        console.log('Seaweed object disappeared');


        //relocate to the cutting board area

        let seaweedElem  = document.createElement('a-entity');//create new element avocado in memory
        seaweedElem.setAttribute('id','relocateSeaweed');
        seaweedElem.setAttribute('obj-model',{obj:'/assets/models/kitchenEnviro/props/seaweed/seaweed.obj'});
        seaweedElem.setAttribute('position',{x:2, y:2, z:2});
        seaweedElem.setAttribute('scale',{x:0.5, y:0.5, z:0.5});
        seaweedElem.setAttribute('material',{src:'/assets/models/kitchenEnviro/props/seaweed/seaweed.png'});

        const scene = document.querySelector('a-scene');
        scene.appendChild(seaweedElem);                     //append seaweed to kitchen

        //Delay creation time
              setTimeout(function(){ alert('Seaweed Restocked' );
              let seaweedInventory  = document.createElement('a-entity');//create new element seaweed in memory
              seaweedInventory.setAttribute('id','seaweed');
              seaweedInventory.setAttribute('obj-model',{obj:'/assets/models/kitchenEnviro/props/seaweed/seaweed.obj'});
              seaweedInventory.setAttribute('position',{x:0, y:0, z:0});
              seaweedInventory.setAttribute('scale',{x:0.5, y:0.5, z:0.5});
              seaweedInventory.setAttribute('material',{src:'/assets/models/kitchenEnviro/props/seaweed/seaweed.png'});
              seaweedInventory.setAttribute('load-props',{});


              const scene2 = document.querySelector('a-scene');
              scene2.appendChild(seaweedInventory);                     //append seaweed to kitchen

              //Recharge sound
              this.rechargeSound = document.querySelector('#recharge');
              this.rechargeSound.components['sound'].playSound();

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
        riceElem.setAttribute('id','relocateRice');
        riceElem.setAttribute('obj-model',{obj:'/assets/models/kitchenEnviro/props/rice/rice.obj'});
        riceElem.setAttribute('position',{x:1, y:1, z:1});
        riceElem.setAttribute('scale',{x:0.5, y:0.5, z:0.5});
        riceElem.setAttribute('material',{src:'/assets/models/kitchenEnviro/props/rice/rice.png'});

        const scene = document.querySelector('a-scene');
        scene.appendChild(riceElem);                     //append rice to kitchen

            setTimeout(function(){ alert('Rice Restocked' );
            let riceInventory  = document.createElement('a-entity');//create new element rice in memory
            riceInventory.setAttribute('id','rice');
            riceInventory.setAttribute('obj-model',{obj:'/assets/models/kitchenEnviro/props/rice/rice.obj'});
            riceInventory.setAttribute('position',{x:0, y:0, z:0});
            riceInventory.setAttribute('scale',{x:0.5, y:0.5, z:0.5});
            riceInventory.setAttribute('material',{src:'/assets/models/kitchenEnviro/props/rice/rice.png'});
            riceInventory.setAttribute('load-props',{});


            const scene2 = document.querySelector('a-scene');
            scene2.appendChild(riceInventory);                     //append rice to kitchen

            //Recharge sound
            this.rechargeSound = document.querySelector('#recharge');
            this.rechargeSound.components['sound'].playSound();

        //Delay creation time to remake it
      }, 3000);

    }

});

//if the elements are all at the same location try to serve button and then see
