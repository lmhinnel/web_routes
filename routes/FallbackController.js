const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    let reqObj = {
        "status": "ERR",
        "data": "ACTION-NOT-FOUND"
    }
    res.json(reqObj);
});

module.exports = router;