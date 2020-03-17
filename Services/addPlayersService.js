// ---------------------------------------------------------------------
// ---------------------------- Maja -----------------------------------
// ---------------------------------------------------------------------

class AddPlayersService {
    constructor() {
        this.listOfPlayers = [];
    }
    addPlayers() {
        navigateTo('addQuestions');
        // loaderService.show(true);
        let myFriends = document.querySelectorAll('.myFriends');
        // let moreFriends = document.querySelectorAll('.moreFriends');

        for (const friend of myFriends) {
            this.listOfPlayers.push(friend.value);
        }
        // for (const friend of moreFriends) {
        //     this.listOfPlayers.push(friend.value);
        // }
        // loaderService.show(false);
    }
}
const _addPlayersService = new AddPlayersService();
export default _addPlayersService;