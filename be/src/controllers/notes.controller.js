
export function getAllNotes(req, res) {
  res.status(200).send('Hello World!!!');
};

export function createNote(req, res) {
  res.status(201).send("Note Created Successfully");
};

export function updateNote(req, res) {
  res.status(200).send("Note Updated Successfully");
};

export function deleteNote(req, res) {
  res.status(200).send("Note Deleted Successfully");
};