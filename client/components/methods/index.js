export default {

    getGridStyle(n){
        return `sm-col sm-col-${n}`;
    },

    getTabStyle(){
        return `inline-block mr3`;
    },

    getTabSelectedStyle(){
        return `border border-radius-5 rounded bg-navy px2 py1 selected`;
    },

    getButtonStyle(){
        return `px3 py0 bg-lightseagreen white border border-radius-5 rounded`
    },

    getHeaderStyle(){
        return `py1 mb2 bg-navy white`
    },

    removePathnameSlash(s){
        return s.split('').splice(1).join('')
    },

    isEmpty(obj) {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

}
