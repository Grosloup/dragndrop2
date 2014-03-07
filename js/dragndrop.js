/**
 * Created by Nicolas on 07/03/14.
 */
(function(w,d){
    var dragSrcElm, droppableIndex, targetIndex;

    var drags = d.querySelectorAll("[draggable='true']");
    [].slice.call(drags).forEach(function(el, idx){
        /////////////////////////////////////////////
        el.addEventListener("dragstart", function(evt){

            return false;
        }, false);
        /////////////////////////////////////////////
        el.addEventListener("dragenter", function(evt){

            return false;
        }, false);
        /////////////////////////////////////////////
        el.addEventListener("dragover", function(evt){
            if(evt.preventDefault){
                evt.preventDefault();
            }

            return false;
        }, false);
        /////////////////////////////////////////////
        el.addEventListener("dragleave", function(evt){

        }, false);
        /////////////////////////////////////////////
        el.addEventListener("drop", function(evt){
            if(evt.preventDefault){
                evt.preventDefault();
            }

            return false;
        }, false);
        /////////////////////////////////////////////
        el.addEventListener("dragend", function(evt){

        }, false);
    });
    console.log(drags);
})(window, document);
