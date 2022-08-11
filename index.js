function greeting(name){
    alert('Hello ' + name);

}

function receivesAFunction(callback){
    let name = prompt('Please enter your name.');
    callback(name);
}

receivesAFunction(greeting);

const x = () => console.log('hello');

function returnsANamedFunction(){
    return x;
}


function returnsAnAnonymousFunction(){
    return () => {
        console.log('hello');
    }
}
returnsAnAnonymousFunction(function(){
    a => console.log('hello');
})
