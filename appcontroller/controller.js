function sample() {
    var file = require("../list/emp.json");
    this.getuser = (req, res) => {
        var arr = [];
        var infor = [];
        infor = file.employees;
        let start = parseInt(req.query.start);
        let end = parseInt(req.query.end);
        // console.log(start,end)
        for (let i = start; i < end; i++) {
            arr.push(infor[i]);
            if (i == infor.length) {
                break;
            }
        }
        res.send({ records: arr, length: infor.length })
    }
}
module.exports = new sample();