const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
  describe : 'Title of note',
  demand : true,
  alias : 't'
};

const bodyOptions = {
  describe : 'Body of the note',
  demand : true,
  alias : 'b'
};

var argv = yargs
  .command('add','Add a new note',{
    title: titleOptions,
    body: bodyOptions
  })
  .command('list','List all notes')
  .command('read','Read a note',{
    title: titleOptions
  })
  .command('remove','Remove a note',{
    title: titleOptions
  })
  .help()
  .argv;
var command = argv._[0];

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

  var allNotes = notes.getAll();
  console.log(`printing ${allNotes.length} note(s)`);
  allNotes.forEach((note) => notes.logNotes(note));
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
