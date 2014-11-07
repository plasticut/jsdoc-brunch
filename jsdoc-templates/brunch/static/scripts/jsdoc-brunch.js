(function(window){

    // DOM Level 0 way
    window.onload = function () {
        var blocks = document.getElementsByTagName("dt");

        for (var i = 0; i < blocks.length; i++) {
            var block = blocks[i];
            block.onclick = _onDTClick;
        }

    };

    var _onDTClick = function(){
        //Toggle className
        var className = this.className;

        var res = className.match(/jsdocBrunchThemeVisible/g,""); //Do a string match and see if we get any results


        if(res && res.length > 0){ //If we got matches, it means the element has the class we are looking for. We will then remove it
            className = className.replace(/jsdocBrunchThemeVisible/g,""); //Do a string replace
        }else{
            //If it did not have that class, we will now add it
            className += " jsdocBrunchThemeVisible";
        }

        this.className = className;
    };


})(this);