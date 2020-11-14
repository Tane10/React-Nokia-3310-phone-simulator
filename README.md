
## React Nokia 3310 phone simulator
This project shows a Nokia 3310 phone simulator, that will allow you to type using the phone buttons and the up and down arrows to change the word you're currently typing.

The front end uses ReactJs, the backend is NodeJs. The backend queries a letter/ number matrix to get the words associated with the letters, then uses a Trie Search tree to find all real words inside a JSON file containing the Oxford Dictionary.

## How to run
### API
To run the API please go to go the directory node_api then run the command 
### `npm start.`

### React App
To run the React App please got to the directory edume-phone and run the command 
### `npm start.`
This will open the app on localhost:3000.

## Future dev work
In the future, I would like to add a clearing letter function that will allow the user to remove a letter and change the sentence on the fly. I would like to clean up the react hooks to split out the logic in smaller functions allowing a cleaner script and easier to follow the logic. 
