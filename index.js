import { program } from "commander";
import {
    listContacts,
    getContactById,
    removeContact,
    addContact,
    updateContactById,
} from "./contacts.js";

program
    .option("-a, --action <type>", "choose action")
    .option("-i, --id <type>", "user id")
    .option("-n, --name <type>", "user name")
    .option("-e, --email <type>", "user email")
    .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

async function invokeAction({ action, id, ...data }) {
    switch (action) {
        case "list":
            const contacts = await listContacts();
            console.table(contacts);
            break;

        case "get":
            const oneContact = await getContactById(id);
            console.log(oneContact);
            break;

        case "add":
            const newContact = await addContact(data);
            console.log(newContact);
            break;

        case "remove":
            const removedContact = await removeContact(id);
            console.log(removedContact);
            break;

        case "update":
            const updatedContact = await updateContactById(id, data);
            console.log(updatedContact);
            break;

        default:
            console.warn("\x1B[31m Unknown action type!");
    }
}

invokeAction(options);
