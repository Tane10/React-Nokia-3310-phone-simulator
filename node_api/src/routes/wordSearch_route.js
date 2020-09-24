import express from "express";

var router = express.Router();

// GET all Users
router.get("/api/v1/words", async(req, res) => {
    try {
        res.status(200).send("got all words");
    } catch (error) {
        throw error
    }
});

//PUT new words
router.put("/api/v1/words/update", async(req, res) => {
    try {
        // const reqBody = req.body;
        // const updateUser = await updateUserDetails(reqBody, await tokenFormater(req.headers.authorization));
        // res.status(updateUser.status).send(updateUser.body);
        res.status(200).send("added new words");

    } catch (error) {
        throw error
    }
});

//DELETE remove words
router.delete("/api/v1/words/remove", async(req, res) => {
    try {
        // const reqBody = req.body;
        // const deletedUser = await deleteUser(reqBody, await tokenFormater(req.headers.authorization));
        res.status(202).send("deleted word");
    } catch (error) {
        throw error
    }
});

export default router;