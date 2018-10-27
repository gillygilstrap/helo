module.exports = {
    newUser: (req,res) => {
        // console.log("newUser picture",req.body.picture)
        req.app.get('db').create_user({
            username: req.body.username,
            password: req.body.password,
            profile_pic: req.body.picture
        }).then( users => {
            res.status(200).json(users[0]);
        }).catch(error => {console.log('error in newUser', error);
            res.status(500).json({message: "Blah Blah Blah"}) })
    },

    userLogin: (req, res) => {
        // console.log(req.body.username) 
        req.app.get('db').login_user({
            username: req.body.username,
            password: req.body.password
        }).then( users => {
            console.log(users)
            res.status(200).json(users[0]);
        }).catch(error => {console.log('error in userLogin', error);
        res.status(500).json({message: "Blah Blah Blah"}) })
    },

    getPosts: (req, res) => {
        const {userPosts, search} = req.query
        if (userPosts && search.length) {
            req.app.get('db').get_search_posts({search: search}).then(posts => {
                res.status(200).json(posts)
            }).catch(error => {console.log('error in getPosts', error);
            res.status(500).json({message: "Blah Blah Blah"}) })

        }else if (userPosts === false && search.length === 0) {
            req.app.get('db').non_user_posts({id: id}).then(posts => {
                res.status(200).json(posts)
            }).catch(error => {console.log('error in getPosts', error);
            res.status(500).json({message: "Blah Blah Blah"}) })

        }else if (userPosts === false && search.length) {
            req.app.get('db').get_posts({userPosts: userPosts, search: search}).then(posts => {
                res.status(200).json(posts)
            }).catch(error => {console.log('error in getPosts', error);
            res.status(500).json({message: "Blah Blah Blah"}) })

        } else {
            req.app.get('db').get_All_posts().then(posts => {
                res.status(200).json(posts)
            }).catch(error => {console.log('error in get_All_Posts', error);
            res.status(500).json({message: "Blah Blah Blah"}) })
        
        }
        
    }
}

// req.app.get('db').get_posts().then(res => {
//     res.status(200).json(res)

//     req.app.get('db').get_posts({userPosts: userPosts, search: search}).then(res => {
//         res.status(200).json(res)


//         req.app.get('db').get_posts({userPosts: userPosts,}).then(res => {
//             res.status(200).json(res)
// module.exports = {
//     getCouches: (req,res) => {
//         console.log('this got hit')
//         req.app.get('db').get_couches().then(couches => {
//             res.json(couches)
//         }).catch (error => {
//             console.log('error in get couches', error)
//             res.status(500).json({message: 'Blah blah'})
//         });
//     },
     
//     postCouch: (req,res) => {
        
//         req.app.get(db).create_couch({
//             user_id: req.session.user.id,
//             name: req.body.name,
//             price: req.body.price,
//             image: req.body.image
//         }).then(couches => {
//             res.status(200).res.json(couches[0]);
//         }).catch(error => {
//             console.log('error in postCouch', error);
//             res.status(500).json({message: "Blah Blah Blah"})
//         })
//     }
// }