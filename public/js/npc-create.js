'use strict';

AFRAME.registerComponent('npc-create', {
    schema : {},
    init :function(){
        const Context_AF = this;


        document.querySelector('#bar').addEventListener('click', function() {
            console.log('click');
            Context_AF.deleteNPC();

        })
    },

    deleteNPC : function(){
        let npc = document.querySelector('#npc');
        //npc.setAttribute('visible', false);
        npc.parentNode.removeChild(npc);
        console.log('NPC GONE');


        var min=0;
        var max=2000;
        var random = Math.random() * (+max - +min) + +min;

        setTimeout(function(){ alert('New Customer' );
        let npcInventory  = document.createElement('a-entity');//create new element seaweed in memory
        npcInventory.setAttribute('id','npc');
        npcInventory.setAttribute('obj-model',{obj:'/assets/models/npc/Male1/male1.obj'});
        npcInventory.setAttribute('position',{x:-51.837, y:0, z:0});
        npcInventory.setAttribute('rotation',{x:0, y:90.0, z:0});
        npcInventory.setAttribute('scale',{x:0.3, y:0.3, z:0.3});
        npcInventory.setAttribute('material',{src:'/assets/models/npc/Male1/final_texture.png'});
        npcInventory.setAttribute('npc-create',{});

        const scene = document.querySelector('a-scene');
        scene.appendChild(npcInventory);                     //append seaweed to kitchen

        let hudBoardUpdate = document.querySelector('#hudBoard');
        hudBoardUpdate.setAttribute('material',{src:'/assets/models/kitchenEnviro/HUD/board_avo.png'});

        //Recharge sound
        this.dingSound = document.querySelector('#ding');
        this.dingSound.components['sound'].playSound();

    //Delay creation time to remake it
  }, random);

    },

    createNPC : function(){
        let npc = document.querySelector('#npc');
        npc.parentNode.removeChild(npc);
        npc.setAttribute('visible', false);

    },
});
