import { defineConfig } from "tinacms";
import { roomCollection } from "./collections/room";
import { pageCollection } from "./collections/page";

export default defineConfig({
  branch: process.env.VERCEL_GIT_COMMIT_REF || "main",
  clientId: process.env.TINA_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "camere",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [roomCollection, pageCollection],
  },
  search: {
    tina: {
      indexerToken: process.env.TINA_SEARCH_TOKEN,
      stopwordLanguages: ["ita"],
    },
  },
});
