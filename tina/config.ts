import { defineConfig } from "tinacms";
import { roomCollection } from "./collections/room";
import { pageCollection } from "./collections/page";

export default defineConfig({
  branch: "main",
  clientId: "0c732506-cf9e-4409-b879-dff0af8e922d",
  token: null,
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
