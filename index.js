function receivesAFunction(callback){
    callback();
    return; 
};

function returnsANamedFunction(){
    return function beforeAll(){
        console.log("before all");
    };
}

function returnsAnAnonymousFunction(){
    return ()=> console.log("before all");
}