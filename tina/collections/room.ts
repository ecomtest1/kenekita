import type { Collection } from "tinacms";

export const roomCollection: Collection = {
  name: "room",
  label: "Camere",
  path: "src/content/rooms",
  format: "mdx",
  ui: {
    filename: {
      readonly: false,
      slugify: (values) => {
        return values?.slug || String(values?.title).toLowerCase().replace(/\s+/g, "-");
      },
    },
  },
  fields: [
    {
      type: "string",
      name: "title",
      label: "Nome Camera",
      isTitle: true,
      required: true,
    },
    {
      type: "string",
      name: "slug",
      label: "Slug (URL)",
      required: true,
      description: "Es: villa-i-lecci",
    },
    {
      type: "rich-text",
      name: "description",
      label: "Descrizione",
      isBody: true,
    },
    {
      type: "image",
      name: "heroImage",
      label: "Foto Hero",
      description: "Path relativo: /camere/nome-camera/hero.jpg",
    },
    {
      type: "string",
      name: "gallery",
      label: "Galleria Foto",
      list: true,
      description: "Path relativi delle foto aggiuntive",
    },
    {
      type: "string",
      name: "bookingLink",
      label: "Link Prenotazione",
      description: "URL esterno per la prenotazione",
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
      type: "string",
      name: "location",
      label: "Località",
      description: "Es: Porto Cervo, Costa Smeralda",
    },
    {
      type: "number",
      name: "guests",
      label: "Ospiti max",
    },
    {
      type: "number",
      name: "bedrooms",
      label: "Camere da letto",
    },
    {
      type: "number",
      name: "bathrooms",
      label: "Bagni",
    },
  ],
};
