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