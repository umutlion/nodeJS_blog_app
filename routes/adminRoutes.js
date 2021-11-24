const   express     = require('express'),
        router      = express.Router();

router.get("/signin", (req, res)=>{
    res.sender("admin/signin");
})

module.exports = router;