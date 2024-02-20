import { log } from "console";
import fs from "fs/promises";
import path from "path";

const directory = "D:/Node.js/goit-node-cli/db";
const filename = "contacts.json";
export const contactPath = path.resolve(directory, filename);

export async function listContacts() {
    // ...твій код. Повертає масив контактів.
}

export async function getContactById(contactId) {
    // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
}

export async function removeContact(contactId) {
    // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

export async function addContact(name, email, phone) {
    // ...твій код. Повертає об'єкт доданого контакту (з id).
}
