import Card from "./Card.mjs";

export default class Player {
  /**
   *
   * @param {String} name Name of the player
   * @param {int} chips Number of starting chips
   */
  constructor(name, chips) {
    this.name = name;
    this.chips = chips;
    this.cards = [];
  }

  /**
   * Removes the given amount from the Player's stack of chips
   * @param {int} amount Size of the bet
   * @returns {int} Size of bet (may be different if player does not have enough chips)
   */
  bet(amount) {
    if (amount > this.chips) {
      amount = this.chips;
    }
    this.chips -= amount;
    return amount;
  }

  /**
   * Adds the given amount of chips to the Player's stack
   * @param {int} amount Amount of chips to be added
   */
  add(amount) {
    this.chips += amount;
  }
  /**
   * Updates the player's hand to the new cards passed in
   * @param {Card} card1
   * @param {Card} card2
   */
  updateCards(card1, card2) {
    this.cards = [card1, card2];
  }
  /**
   * Clears the player's hand of any cards
   */
  clearCards() {
    this.cards = [];
  }

  /**
   * Returns the name of the player
   * @returns {String}
   */
  get name() {
    return this.name;
  }
  /**
   * Returns the number of chips the Player has
   * @returns {int}
   */
  get chips() {
    return this.chips;
  }
  /**
   * Returns the current cards the player is holding
   * @returns {Array<Card>}
   */
  get cards() {
    return this.cards;
  }
}
