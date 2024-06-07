document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("addNotes");
  const notesContainer = document.getElementById("container-notes");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("notesTitle").value;
    const body = document.getElementById("notesBody").value;
    const date = document.getElementById("submittedDate").value;
    const id = `note-${Math.random().toString(36).substr(2, 9)}`;

    const newNote = {
      id,
      title,
      body,
      createdAt: date,
      archived: false,
    };

    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(newNote);
    localStorage.setItem("notes", JSON.stringify(notes));

    addNoteToDOM(newNote);
    form.reset();
  });

  const addNoteToDOM = (note) => {
    const noteElement = document.createElement("div");
    noteElement.classList.add("note");
    noteElement.innerHTML = `
          <h3>${note.title}</h3>
          <p>${note.body}</p>
          <small>${note.createdAt}</small>
        `;
    notesContainer.appendChild(noteElement);
  };

  const loadNotes = () => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.forEach((note) => addNoteToDOM(note));
  };

  loadNotes();
});
