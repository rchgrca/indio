export default Object.assign({}, {

    getGridStyle(n){
        return `sm-col sm-col-${n}`;
    },

    getTabStyle(){
        return `inline-block mr3`;
    },

    getButtonStyle(){
        return `px3 py0 bg-lightseagreen white border border-radius-5 rounded`
    },

    getHeaderStyle(){
        return `py1 mb2 bg-navy white`
    },

    isEmpty(obj) {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

})
