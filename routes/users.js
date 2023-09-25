const router=require("express").Router();

router.get("/", (req, res) => res.send('users here!'));

module.exports = router;