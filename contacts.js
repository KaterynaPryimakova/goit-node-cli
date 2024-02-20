import fs from "fs/promises";
import path from "path";
import DetectFileEncodingAndLanguage from "detect-file-encoding-and-language";
import { nanoid } from "nanoid";

const directory = "D:/Node.js/goit-node-cli/db";
const filename = "contacts.json";
const contactPath = path.join(directory, filename);

export async function listContacts() {
    const fileCode = await DetectFileEncodingAndLanguage(contactPath);
    const contacts = JSON.parse(await fs.readFile(contactPath, fileCode));
    return contacts;
}

export async function getContactById(contactId) {
    const contacts = await listContacts();
    const result = contacts.find((contact) => contact.id === contactId);
    console.log(result);
    return result || null;
}
// getContactById("qdggE76Jtbfd9eWJHrssH");

export async function addContact(name, email, phone) {
    const contacts = await listContacts();
    const newContact = {
        id: nanoid(),
        name,
        email,
        phone,
    };
    contacts.push(newContact);
    await fs.writeFile(contactPath, JSON.stringify(contacts, null, 2));
    console.log(newContact);
    return newContact;
}
// addContact("Allen Raymond", "nulla.ante@vestibul.co.uk", "(992) 914-3792");
export async function updateContact(contactId, name, email, phone) {
    const contacts = await listContacts();
    const index = contacts.findIndex((contact) => contact.id === contactId);
    if (index === -1) {
        return null;
    }
    contacts[index] = { contactId, name, email, phone };
    await fs.writeFile(contactPath, JSON.stringify(contacts, null, 2));
    console.log(contacts[index]);
    return contacts[index];
}
// updateContact(
//     "AeHIrLTr6JkxGE6SN-0Rw",
//     "Allen Raymond",
//     "nulla.ante@vestibul.co.uk",
//     "(999) 999-9999"
// );
export async function removeContact(contactId) {
    const contacts = await listContacts();
    const index = contacts.findIndex((contact) => contact.id === contactId);
    if (index === -1) {
        return null;
    }
    const [result] = contacts.splice(index, 1);
    await fs.writeFile(contactPath, JSON.stringify(contacts, null, 2));
    console.log(result);
    return result;
}
