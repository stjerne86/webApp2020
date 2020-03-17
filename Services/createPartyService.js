// ---------------------------------------------------------------------
// ---------------------------- Maja -----------------------------------
// ---------------------------------------------------------------------

// This service is not active in version 1.0



class CreatePartyService {

    constructor() {
        this.partyRef = _db.collection("parties");
        this.partyId = "id";

    }

    // Creates a group in which players and content can be added
    createParty(nextPage) {

        this.generateId();
        navigateTo(nextPage);
        let newParty = {
            theUniqueId: this.partyId,
            players: [],
            questions: [],
            title: ""
        }
        this.partyRef.add(newParty);

    }

    // Generates a "unique and random" ID for the group based on date and random caracters
    generateId() {
        // https://gist.github.com/gordonbrander/2230317
        let uniqueId = Math.random().toString(36).substr(2, 5);
        // uniqueId = uniqueId.slice(9);
        this.partyId = uniqueId;
    }
}

const createPartyService = new CreatePartyService();
export default createPartyService;