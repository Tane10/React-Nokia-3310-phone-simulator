class TransformStringLogic {
    constructor(rawNumberString) {
        this.rawNumberString = rawNumberString;
    }

    _letterMatrix = [];

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
    }

    letterCombination() {
        if (!this.rawNumberString || !this.rawNumberString.length) return [];

        this._letterMatrix = this.rawNumberString.split("").map(digit => this._numberLetterMappings[digit] || [""]);

        return this._letterMatrix.reduce((strings, currentEntry) => {
            const combinations = [];
            strings.reduce((_, current) => {
                [...currentEntry].map(digit => combinations.push(`${current}${digit}`));
            });

            return combinations;
        });
    }
}

const newWordConvert = new TransformStringLogic("237");

console.log(newWordConvert.letterCombination())