module.exports = (app, text) => {
    function save(req, res) {
        res.send("Product > Save > " + text);
    }
    
    function get(req, res) {
        res.send("Product > Get > " + text);
    }

    /**
     * It calls function post and get because it was received the app via argument
     */
    app.post('/product', save);
    app.get('/product', get);

    return { save, get };
}