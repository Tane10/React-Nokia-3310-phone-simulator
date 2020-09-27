const fs = require('fs')

class TrieNode {
    constructor() {
        this.isEnd = false
        this.children = {}
    }
}


class TrieTransformStringLogic {
    constructor(rawNumberString) {
        this.rawNumberString = rawNumberString;
        this.root = new TrieNode();
    }

    _letterMatrix = [];
    _wordList = JSON.parse(fs.readFileSync('wordlist.json'));

    _numberLetterMappings = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"],
        "0": [" "]
    };

    letterCombination() {
        this._wordList.forEach(word => {
            this.insert(word)
        })
        if (!this.rawNumberString || !this.rawNumberString.length) return [];

        this._letterMatrix = this.rawNumberString.split("").map(digit => this._numberLetterMappings[digit] || [""]);

        return this._letterMatrix.reduce((strings, currentEntry) => {
            const combinations = [];
            strings.reduce((_, current) => {
                [...currentEntry].map((digit) => {
                    if (this.isWord(`${current}${digit}`)) {
                        combinations.push(`${current}${digit}`)
                    }
                });
            }, "");

            return combinations;
        });
    }


    insert(word) {
        if (word.length === 0) return

        let letter, currentNode = this.root;

        for (let i = 0; i < word.length; i++) {
            letter = word[i];

            if (!currentNode.children.hasOwnProperty(letter)) {
                currentNode.children[letter] = new TrieNode();
            }
            currentNode = currentNode.children[letter]
        }
        currentNode.isEnd = true;
    }

    _getNodeForPrefix(string) {
        let letter, currentNode = this.root;

        for (let i = 0; i < string.length; i++) {
            letter = string[i];
            if (!currentNode.children.hasOwnProperty(letter)) return null;

            currentNode = currentNode.children[letter];
        }
        return currentNode
    }

    isWord(word) {
        if (this._getNodeForPrefix(word) === null) return false;
        return this._getNodeForPrefix(word).isEnd
    }

}

const newWordConvert = new TrieTransformStringLogic("526");
console.log(newWordConvert.letterCombination())