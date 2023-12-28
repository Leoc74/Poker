import Player from "./Player.mjs";

export default class Table{
    /**
     * Creates new Table
     * @param {int}  num_seats Number of seats at the table. Defaults to 6
     */
    constructor(num_seats = 6){
        this.num_seats = num_seats;
        this.table = new Array(num_seats);
        this.num_players = 0;
    }
    /**
     * Adds a player to the table if there is an open seat
     * @param {Player} player Player to be inserted at the given seat
     * @param {int} position Seat where the player is inserted
     * @returns {boolean} Whether the player was successfully inserted to the table
     */
    addPlayer(player, position = -1){
        if (this.num_players >= this.num_seats){
            return false;
        }
        else if(position === -1){
            for (let i = 0; i < this.num_seats; i++){
                if (this.table[i] == null){
                    position = i;
                    break;
                }
            }
        }
        this.table[position] = player;
        this.num_players++;
        return true;
    }
    /**
     * Removes the given player from the table. Takes Player object or position index
     * @param {Player | int} player Player to be removed from the table
     */
    removePlayer(player){
        if (typeof player === int){//Seat of player is given
            this.table[player] = null;
            this.num_players--;
        }
        else{//Player is Player object
            let index = this.table.indexOf(player);
            this.table[index] = null;
            this.num_players--;
        }
    }
    /**
     * Gets the number of players at the table
     * @returns {int}
     */
    getNumPlayers(){
        return this.num_players;
    }
    /**
     * Gets the number of seats at the table
     * @returns {int}
     */
    getNumSeats(){
        return this.num_seats;
    }
}