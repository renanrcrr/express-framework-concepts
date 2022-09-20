/**
 * As long as we don't export (module.exports), these functions will remain hidden from the rest of the application.
 */
function save(req, res) {
    res.send("User > Save");
}

function get(req, res) {
    res.send("User > Get");
}

//It allows functions to become visible
module.exports = { save, get: get }