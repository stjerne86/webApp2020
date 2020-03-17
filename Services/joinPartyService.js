// ---------------------------------------------------------------------
// ---------------------------- Maja -----------------------------------
// ---------------------------------------------------------------------

// This service is not active in version 1.0


import createPartyService from "./createPartyService.js"
import loaderService from "./loader.js"
class JoinPartyService {
    constructor() {
        this.partyRef = _db.collection("parties");
        this.theGroupId = createPartyService.partyId;
        this.dbId = ""
    }


    getThePartyId() {
        this.theGroupId = createPartyService.partyId;
        console.log(createPartyService.partyId)
        // document.querySelector('#myText').value = this.partyId;
    }
    // Checks if the inserted group ID excists in the database
    joinParty(nextPage) {
        let inputField = document.querySelector('#joinPartyId');
        this.partyRef.get().then(snapshotData => {
            snapshotData.forEach(doc => {

                let party = doc.data();
                party.id = doc.id;

                // If the group excist, then continue
                if (inputField.value === party.theUniqueId) {
                    navigateTo(nextPage);
                    // console.log(inputField.value)
                    this.theGroupId = inputField.value;
                    this.dbId = party.id;
                    // let theGroupId = inputField.value;
                    console.log(this.dbId)
                }
            })
        })
    }

}
const _joinPartyService = new JoinPartyService();
export default _joinPartyService;