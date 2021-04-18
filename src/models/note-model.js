export class NoteModel {
  constructor(name, id) {
    this.id = id? id : Math.random().toString(36).substr(2, 9);
    this.name = name || '';
    this.isArchived = false;
  }
}
