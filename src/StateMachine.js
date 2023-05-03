class StateMachine {
    constructor(characterSet, numPagesPerBook, numCharsPerPage) {
      this.characterSet = characterSet;
      this.numPagesPerBook = numPagesPerBook;
      this.numCharsPerPage = numCharsPerPage;
      this.numBooks = Math.pow(characterSet.length, numCharsPerPage * numPagesPerBook);
    }
  
    generatePage(coordinates, page) {
      const [room, wall, shelf, volume] = coordinates.split("-");
      const book = parseInt(room) * 1000 + parseInt(wall) * 100 + parseInt(shelf) * 10 + parseInt(volume);
      let state = book * this.numPagesPerBook + page;
      let output = '';
      for (let i = 0; i < this.numCharsPerPage; i++) {
        const operation = state % this.characterSet.length;
        output = this.characterSet[operation] + output;
        state = Math.floor(state / this.characterSet.length);
      }
      return output;
    }
  
    search(query) {
      let state = 0;
      for (const c of query) {
        const operation = this.characterSet.indexOf(c);
        state = state * this.characterSet.length + operation;
      }
      const book = Math.floor(state / this.numPagesPerBook);
      const page = state % this.numPagesPerBook;
      const coordinates = `${Math.floor(book / 1000)}-${Math.floor((book % 1000) / 100)}-${Math.floor((book % 100) / 10)}-${book % 10}`;
      return { coordinates, page };
    }
  }
  
  export default StateMachine;
  