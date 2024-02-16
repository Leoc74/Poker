import Card from "./Card.mjs";

export default class Deck {
  /**
   * Creates a new Deck of 52 cards
   */
  constructor() {
    this.deck = new Array(52);
    this.size = 52;
    this.curr_card_index = 0;
    for (const s of ["Hearts", "Diamonds", "Clubs", "Spades"]) {
      for (let i = 2; i <= 14; i++) {
        this.deck.push(new Card(i, s));
      }
    }
  }
  /**
   * Draws the next card from the deck and returns it
   * @returns {Card}
   */
  drawCard() {
    return this.deck[this.curr_card_index++];
  }
  /**
   * Shuffles the deck of cards (and puts all cards back in the deck)
   */
  shuffle() {
    for (var i = this.deck.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this.deck[i];
      this.deck[i] = this.deck[j];
      this.deck[j] = temp;
    }
    this.curr_card_index = 0;
    return;
  }
  /**
   * Returns the number of cards remaining in the deck
   * @returns {int}
   */
  remainingCards() {
    return this.size - this.curr_card_index;
  }
}
