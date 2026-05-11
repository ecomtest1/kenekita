import { defineConfig } from "tinacms";
import { roomCollection } from "./collections/room";
import { pageCollection } from "./collections/page";

export default defineConfig({
  branch: process.env.VERCEL_GIT_COMMIT_REF || "main",
  clientId: "0c732506-cf9e-4409-b879-dff0af8e922d",
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
});
