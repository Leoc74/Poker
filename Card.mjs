export default class Card{
    /**
     * 
     * @param {int} val Integer from 2-14 representing value of the card.
     * 11 = Jack, 12 = Queen, King = 13, Ace = 14
     * @param {String} suit String representing the suit of the card.
     * Hearts, Spades, Clubs, or Diamonds
     */
    constructor(val, suit){
        this.val = val;
        this.suit = suit;
    }

    toString(){
        let tempStr = String(this.val);
        if (this.val == 11){
            tempStr = "Jack";
        }
        else if (this.val == 12){
            tempStr = "Queen";
        }
        else if (this.val == 13){
            tempStr = "King";
        }
        else if (this.val == 14){
            tempStr = "Ace";
        }
        return tempStr + " of " + this.suit;
    }
    /**
     * Returns the numerical value of the card.
     * Jack = 11, Queen = 12, King = 13, Ace = 14
     * @returns {int} 
     */
    getVal(){
        return this.val;
    }
    /**
     * Returns the suit of the card
     * @returns {String}
     */
    getSuit(){
        return this.suit;
    }
}