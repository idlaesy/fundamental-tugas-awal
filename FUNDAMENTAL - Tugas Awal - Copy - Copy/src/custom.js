class NoteTitle extend HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open'});
        this.render();
    }
    render() {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = `
        <style>
        .form-group {
          margin-bottom: 10px;
        }
        label {
          display: block;
          margin-bottom: 5px;
        }
        input {
          padding: 8px;
          font-size: 1em;
          width: 100%;
          box-sizing: border-box;
        }
      </style>
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" name="title" id="notesTitle" required />
      </div>
    `;
    this.ShadowRoot.appendChild(wrapper)

    }
}