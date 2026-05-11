import type { Collection } from "tinacms";

export const pageCollection: Collection = {
  name: "page",
  label: "Pagine",
  path: "src/content/pages",
  format: "mdx",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
    filename: {
      readonly: true,
    },
  },
  fields: [
    {
      type: "string",
      name: "title",
      label: "Titolo Pagina",
      isTitle: true,
      required: true,
    },
    {
      type: "string",
      name: "metaTitle",
      label: "Meta Title (SEO)",
    },
    {
      type: "string",
      name: "metaDescription",
      label: "Meta Description (SEO)",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "rich-text",
      name: "body",
      label: "Contenuto",
      isBody: true,
    },
  ],
};
