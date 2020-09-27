class TrieNode {
    constructor(value) {
        this.value = value

    }
}

class Trie {
    constructor() {
        this.tree = {};
    }

    _walk(keys, node, level) {
        keys = keys.filter((key) => key !== "value");

        for (let [idx, key] of keys.entries()) {
            console.log(`${"\t".repeat(level - 1)}-> ${level}.${idx + 1} ${node[key].value}`);

            this._walk(Object.keys(node[key]), node[key], level + 1)
        }

        return;
    }

    _walkAndInsert(node, entry, index) {




    }

    _walkAndSearch(entry, node, index) {}

    _walkAndDelete(entry, node, index) {}

    insert(entry) {}

    search(entry) {}

    delete(entry) {}

    printAll() {}
}