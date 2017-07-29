export default Object.assign({}, {

    getGridStyle(n){
        return `sm-col sm-col-${n}`;
    },

    getTabStyle(){
        return "inline-block mr3";
    },

    isEmpty(obj) {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }
    
})
