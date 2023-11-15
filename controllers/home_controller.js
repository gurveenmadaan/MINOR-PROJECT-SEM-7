//pages rendered - functions defined - links directed 
module.exports.home = function(req, res){
    return res.render('index',{
        title:"SoulQuoτient |Home Page"
    }); 
}

module.exports.meetingroom = function(req,res){
    return res.render('meetingroom'); 
}

module.exports.wellnessstats = function(req,res){
    return res.render('wellnessstats'); 
}

module.exports.subscribe = function (req,res){
    return res.render('subscribe');
}

module.exports.mainpage = function (req,res){
    return res.render('academics');
}

module.exports.mindfuliving = function(req,res){
    return res.render('mindfuliving'); 
}

module.exports.connection = function (req, res) {
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