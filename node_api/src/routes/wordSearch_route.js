import express from "express";
import { TrieTransformStringLogic } from "../services/word_logic_service"

var router = express.Router();

// POST convert number sting to words array 
router.post("/api/v1/words", async(req, res) => {
    try {
        const reqBody = req.body;
        const convertNumbers = new TrieTransformStringLogic(reqBody.numbers);
        const wordList = convertNumbers.letterCombination();
        res.status(200).send(wordList);
    } catch (error) {
        throw error
    }
});

export default router;