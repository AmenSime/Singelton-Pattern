//Amen Sime Tadesse ATR/7842/09 SECTION ONE ---- SOFTWARE ENGINEERING REGULAR
//SINGELTON PATTERN

var Singleton = (function () {
    var instance;
 
    function createInstance() {
        var object = new Object("I am the instance object");
        return object;
    }
 
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();
 
function run() {
 
    var instance1 = Singleton.getInstance();
    var instance2 = Singleton.getInstance();
 
    alert("Same instance? " + (instance1 === instance2));  
}
