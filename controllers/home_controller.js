//pages rendered - functions defined - links directed 
module.exports.home = function(req, res){
    return res.render('index'); 
}

module.exports.studyroom = function(req,res){
    return res.render('studyroom'); 
}

module.exports.studystats = function(req,res){
    return res.render('studystats'); 
}

module.exports.subscribe = function (req,res){
    return res.render('subscribe');
}

module.exports.mainpage = function (req,res){
    return res.render('academics');
}

module.exports.devpage = function(req,res){
    return res.render('dev_home'); 
}

module.exports.interview = function (req, res) {
    return res.render('interview'); 
}

// control links on the studyroom page 
module.exports.syllabus = function (req, res) {
    return res.render('syllabus'); 
}

module.exports.android = function (req, res) {
    return res.render('and'); 
}

module.exports.web = function (req, res) {
    return res.render('web'); 
}

module.exports.ml = function (req, res) {
    return res.render('ml'); 
}

module.exports.blockchain = function (req, res) {
    return res.render('block'); 
}

module.exports.devops = function (req, res) {
    return res.render('devo'); 
}