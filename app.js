console.log('starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

var argv = yargs.argv;
var command = argv._[0];
console.log('yargs: ',argv);

if(command == 'add'){
  console.log('adding new note');
  var note = notes.addNote(argv.title,argv.body);
  if (!note){
    console.log("file already exists!");
  }else {
    console.log("successful!");
    notes.logNotes(note);
  }
}else if (command == 'list') {
  console.log('listing all notes');
  notes.getAll();
}else if (command == 'read') {
  console.log('reading note');
  var note = notes.getNote(argv.title);
  if(note){
    notes.logNotes(note);
  }else {
    console.log("file not found!");
  }
}else if (command == 'remove') {
  console.log('removing note');
  var remove = notes.removeNote(argv.title);
  var message = remove ? 'Note not found': 'Note Removed';
  console.log(message);

}else {
  console.log('command not found');
}
