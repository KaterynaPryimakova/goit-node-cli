import { program } from "commander";
import {
    listContacts,
    getContactById,
    removeContact,
    addContact,
    updateContact,
} from "./contacts.js";

program
    .option("-a, --action <type>", "choose action")
    .option("-i, --id <type>", "user id")
    .option("-n, --name <type>", "user name")
    .option("-e, --email <type>", "user email")
    .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
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
            const newContact = await addContact(name, email, phone);
            console.log(newContact);
            break;

        case "remove":
            const removedContact = await removeContact(id);
            console.log(removedContact);
            break;

        case "update":
            const updatedContact = await updateContact(id, name, email, phone);
            console.log(updatedContact);
            break;

        default:
            console.warn("\x1B[31m Unknown action type!");
    }
}

invokeAction(options);
