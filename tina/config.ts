import { defineConfig } from "tinacms";
import { roomCollection } from "./collections/room";
import { pageCollection } from "./collections/page";

export default defineConfig({
  branch: "main",
  clientId: "0c732506-cf9e-4409-b879-dff0af8e922d",
  token: "4dbf0dd491bd8953c2c5719abcd981a8362f78b2",
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
