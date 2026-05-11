// tina/config.ts
import { defineConfig } from "tinacms";

// tina/collections/room.ts
var roomCollection = {
  name: "room",
  label: "Camere",
  path: "src/content/rooms",
  format: "mdx",
  ui: {
    filename: {
      readonly: false,
      slugify: (values) => {
        return values?.slug || String(values?.title).toLowerCase().replace(/\s+/g, "-");
      }
    }
  },
  fields: [
    {
      type: "string",
      name: "title",
      label: "Nome Camera",
      isTitle: true,
      required: true
    },
    {
      type: "string",
      name: "slug",
      label: "Slug (URL)",
      required: true,
      description: "Es: villa-i-lecci"
    },
    {
      type: "rich-text",
      name: "description",
      label: "Descrizione",
      isBody: true
    },
    {
      type: "image",
      name: "heroImage",
      label: "Foto Hero",
      description: "Path relativo: /camere/nome-camera/hero.jpg"
    },
    {
      type: "string",
      name: "gallery",
      label: "Galleria Foto",
      list: true,
      description: "Path relativi delle foto aggiuntive"
    },
    {
      type: "string",
      name: "bookingLink",
      label: "Link Prenotazione",
      description: "URL esterno per la prenotazione"
    },
    {
      type: "string",
      name: "metaTitle",
      label: "Meta Title (SEO)"
    },
    {
      type: "string",
      name: "metaDescription",
      label: "Meta Description (SEO)",
      ui: {
        component: "textarea"
      }
    },
    {
      type: "string",
      name: "location",
      label: "Localit\xE0",
      description: "Es: Porto Cervo, Costa Smeralda"
    },
    {
      type: "number",
      name: "guests",
      label: "Ospiti max"
    },
    {
      type: "number",
      name: "bedrooms",
      label: "Camere da letto"
    },
    {
      type: "number",
      name: "bathrooms",
      label: "Bagni"
    }
  ]
};

// tina/collections/page.ts
var pageCollection = {
  name: "page",
  label: "Pagine",
  path: "src/content/pages",
  format: "mdx",
  ui: {
    allowedActions: {
      create: false,
      delete: false
    },
    filename: {
      readonly: true
    }
  },
  fields: [
    {
      type: "string",
      name: "title",
      label: "Titolo Pagina",
      isTitle: true,
      required: true
    },
    {
      type: "string",
      name: "metaTitle",
      label: "Meta Title (SEO)"
    },
    {
      type: "string",
      name: "metaDescription",
      label: "Meta Description (SEO)",
      ui: {
        component: "textarea"
      }
    },
    {
      type: "rich-text",
      name: "body",
      label: "Contenuto",
      isBody: true
    }
  ]
};

// tina/config.ts
var config_default = defineConfig({
  branch: process.env.VERCEL_GIT_COMMIT_REF || "main",
  clientId: process.env.TINA_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "camere",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [roomCollection, pageCollection]
  }
});
export {
  config_default as default
};
