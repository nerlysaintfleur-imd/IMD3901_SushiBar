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
        npc.setAttribute('visible', false);
        //npc.parentNode.removeChild(npc);

    },

    createNPC : function(){
        let npc = document.querySelector('#npc');
        npc.parentNode.removeChild(npc);
        npc.setAttribute('visible', false);

    },
});
