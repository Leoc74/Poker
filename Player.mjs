export default class Player{
    /**
     * 
     * @param {String} name Name of the player
     * @param {int} chips Number of starting chips
     */
    constructor(name, chips){
        this.name = name;
        this.chips = chips;
        
    }

    /**
     * Removes the given amount from the Player's stack of chips
     * @param {int} amount Size of the bet
     * @returns {int} Size of bet (may be different if player does not have enough chips)
     */
    bet(amount){
        if(amount > this.chips){
            amount = this.chips;
        }
        this.chips -= amount;
        return amount;
    }

    /**
     * Adds the given amount of chips to the Player's stack
     * @param {int} amount Amount of chips to be added
     */
    add(amount){
        this.chips += amount;
    }

    /**
     * Returns the name of the player
     * @returns {String}
     */
    getName(){
        return this.name;
    }
    /**
     * Returns the number of chips the Player has
     * @returns {String}
     */
    getChips(){
        return this.chips;
    }
    
}