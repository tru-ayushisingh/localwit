import env from "@/app/env";

import { Avatars, Client, Databases, Storage, Users } from "node-appwrite";

let client = new Client();

client
    .setEndpoint('https://nyc.cloud.appwrite.io/v1')  // Your API Endpoint
    .setProject('6889fc82001b79a0caa4') // Your p roject ID
    .setKey('standard_af3a086cc3ff7152f8bff293c10cc2b154ebc0ba8e2127832b414508f675aaf39b4bea65552573dcd1344c626ed6acb975cd7ae9ac2324ecfe554c9c88970472b2f6b30e3ff3bf21f0b9e510b025deead1df00dac79960ecd9ecd13b4210fec4bccf6f48340b2ccbc71fbb3fc4246ba9c005b83ea2ac486fa9f6ca6bd7ffd29e') // Your secret API key
;

const databases = new Databases(client);
const avatars = new Avatars(client);
const storage = new Storage(client);
const users = new Users(client);

export { client, databases, avatars, storage, users };