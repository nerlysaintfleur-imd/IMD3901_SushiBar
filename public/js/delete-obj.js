'use strict';

AFRAME.registerComponent('delete-obj', {
    schema : {},
    init :function(){
        const Context_AF = this;

        Context_AF.el.addEventListener('click',function(event){
            console.log('click');
            Context_AF.deleteMyself();
        });
    },
    deleteMyself : function(){
        //remove the obj from kitchen parent
        const Context_AF = this;
        Context_AF.el.parentNode.removeChild(Context_AF.el);
    }
});
