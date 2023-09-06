const constants = require('./constants.js');
const databaseManagementFunctions = require('./databaseManagementFunctions.js');

module.exports = {
    getContact: function(contactPhoneNumber){
        const contactsDatabase = databaseManagementFunctions.readDatabase(constants.routes.contactsDatabase);
        if (contactPhoneNumber in contactsDatabase){
            return contactsDatabase[contactPhoneNumber];
        } else {    
            return null;
        }
    },

    getAllContacts: function(){
        const contactsDatabase = databaseManagementFunctions.readDatabase(constants.routes.contactsDatabase);
        return contactsDatabase;
    },

    createContact: function(contactInformation, frontendResponse){
        const contactsDatabase = databaseManagementFunctions.readDatabase(constants.routes.contactsDatabase);
        contactsDatabase[contactInformation.contactPhoneNumber] = contactInformation;
        databaseManagementFunctions.saveDatabase(constants.routes.contactsDatabase, contactsDatabase);
        frontendResponse.end();
    }
}