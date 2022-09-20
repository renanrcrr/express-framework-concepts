function greeting(nome){
    return function(req, res, next){
        console.log(`Welcome ${nome}.`);
        next();
    }
}

module.exports = greeting