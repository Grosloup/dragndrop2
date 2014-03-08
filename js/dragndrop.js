/**
 * Created by Nicolas on 07/03/14.
 */
(function(w,d){
    var dragSrcElm, droppableIndex, targetIndex;

    var drags = d.querySelectorAll("[draggable='true']");
    [].slice.call(drags).forEach(function(el, idx){
        /////////////////////////////////////////////
        el.addEventListener("dragstart", function(evt){
            this.classList.add("dragstart");
            dragSrcElm = this;
            evt.dataTransfer.effectAllowed = "copy";
            evt.dataTransfer.setData("text", this.innerHTML);
            droppableIndex = parseInt(this.dataset.index);
            console.log(this.innerHTML);
            return false;
        }, false);
        /////////////////////////////////////////////
        el.addEventListener("dragenter", function(evt){
            //this.parentNode.classList.add("dragenter");
            targetIndex = parseInt(this.dataset.index);
            return false;
        }, false);
        /////////////////////////////////////////////
        el.addEventListener("dragover", function(evt){
            if(evt.preventDefault){
                evt.preventDefault();
            }
            //this.parentNode.classList.add("dragenter");

            evt.dataTransfer.dropEffect = 'copy';
            return false;
        }, false);
        /////////////////////////////////////////////
        el.addEventListener("dragleave", function(evt){
            // this.parentNode.classList.remove("dragenter");
        }, false);
        /////////////////////////////////////////////
        el.addEventListener("drop", function(evt){
            if(evt.preventDefault){
                evt.preventDefault();
            }
            if(dragSrcElm != this){
                if(droppableIndex < targetIndex){ // sens descente
                    for(var i = droppableIndex; i<targetIndex; i++){
                        drags.item(i-1).innerHTML = drags.item(i).innerHTML;
                    }
                } else { // sens montée
                    for(var i=droppableIndex;i>targetIndex ;i-- ){
                        drags.item(i-1).innerHTML = drags.item(i-2).innerHTML;
                    }
                }
                this.innerHTML = evt.dataTransfer.getData("text");
            }
            return false;
        }, false);
        /////////////////////////////////////////////
        el.addEventListener("dragend", function(evt){
            [].slice.call(drags).forEach(function(el){
                // el.parentNode.classList.remove("dragenter");
                el.classList.remove("dragstart");
            });
        }, false);
    });
})(window, document);
