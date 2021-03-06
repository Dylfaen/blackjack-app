import Constants from "expo-constants";
const { manifest } = Constants;

export const api = (typeof manifest.packagerOpts === `object`) && manifest.packagerOpts.dev
? manifest.debuggerHost.split(`:`).shift().concat(`:3001`)
: `api.example.com`;