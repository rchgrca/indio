export default Object.assign({}, {
    handleClickTab(e){
        console.log(e.target.innerHTML)
    },

    getGridStyle(n){
        return `sm-col sm-col-${n}`;
    },

    getInputStyle(){
        return "border-box w100 p1 border-none";
    },

    isEmpty(obj) {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }
})
