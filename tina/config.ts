import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: "Ov23liuqrLJ3wpuVYZj9", // Tu GitHub OAuth App
  token: "", // Lo configuramos después
  
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  
  schema: {
    collections: [
      {
        name: "noticias",
        label: "Noticias",
        path: "src/content/news",
        fields: [
          { type: "string", name: "title", label: "Título" },
          { type: "datetime", name: "date", label: "Fecha" },
          { type: "rich-text", name: "body", label: "Contenido", isBody: true },
        ],
      },
      {
        name: "discografia",
        label: "Discografía", 
        path: "src/content/albums",
        fields: [
          { type: "string", name: "title", label: "Título" },
          { type: "string", name: "artist", label: "Artista" },
          { type: "datetime", name: "date", label: "Fecha" },
          { type: "rich-text", name: "body", label: "Contenido", isBody: true },
        ],
      },
    ],
  },
});git bra