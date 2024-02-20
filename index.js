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

// TODO: рефакторити
async function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
        case "list":
            const contacts = await listContacts();
            break;

        case "get":
            const oneContact = await getContactById(id);
            break;

        case "add":
            // ... name email phone
            const newContact = await addContact(name, email, phone);
            break;

        case "remove":
            const removedContact = await removeContact(id);
            break;

        case "update":
            const updatedContact = await updateContact(id, {
                name,
                email,
                phone,
            });
            break;

        default:
            console.warn("\x1B[31m Unknown action type!");
    }
}

invokeAction(options);
console.log("Hello! you can do it!!");
