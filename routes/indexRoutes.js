const express = require('express')
const router = express.Router()

let data = [
    {
        postTitle: "Blog Deneme 1",
        postSubtitle: "Blog özeti",
        image: "https://images.unsplash.com/photo-1637671199834-8d4345f79cbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8cm5TS0RId3dZVWt8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
        postTitle: "Blog Deneme 2",
        postSubtitle: "Blog özeti 2",
        image: "https://images.unsplash.com/photo-1636930545675-e9bb46896fd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8cm5TS0RId3dZVWt8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
        postTitle: "Blog Deneme 3",
        postSubtitle: "Blog özeti 3",
        image: "https://images.unsplash.com/photo-1637342938338-dd0477f70632?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8cm5TS0RId3dZVWt8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    },
]

router.get("/", (req, res)=>{
    res.render('home', {data: data})
})

router.get("/about", (req, res)=>{
    res.render('about')
})

router.get("/contact", (req, res)=>{
    res.render('contact')
})

router.get("/resume", (req, res)=>{
    res.render('resume')
})

router.get("/signin", (req, res)=>{
    res.render('admin/signin')
})

module.exports = router;