const Post = require('../models/post')


exports.getPosts = (req, res, next) => {
  Post.find().then(posts =>{
     res.status(200).json({
       message: "Fetched pizza posts successfuly", posts: posts
     })
  }).catch(err=>{
    if(err.statusCode){
      err.statusCode = 500;
    }
    next(err)
  })

};


