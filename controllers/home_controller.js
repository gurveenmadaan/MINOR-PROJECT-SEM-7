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
    return res.render('main');
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