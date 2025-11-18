// tina/config.ts
import { defineConfig } from 'tinacms'

export default defineConfig({
  branch: 'wip-gh-pages', // La rama donde se guardarán los cambios
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || '', // Lo generaremos después
  token: process.env.TINA_TOKEN || '',
  isLocalMode: process.env.NODE_ENV === 'development', // Solo activo en desarrollo
  media: {
    tina: {
      mediaRoot: 'public',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'noticias',
        label: 'Noticias',
        path: 'content/noticias',
        format: 'mdx',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Título',
            isTitle: true,
            required: true,
          },
          {
            type: 'datetime',
            name: 'date',
            label: 'Fecha',
            required: true,
          },
          {
            type: 'string',
            name: 'author',
            label: 'Autor',
            required: true,
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Contenido',
            isBody: true,
            templates: [],
          },
        ],
      },
      {
        name: 'artistas',
        label: 'Artistas',
        path: 'content/artistas',
        format: 'mdx',
        fields: [
          {
            type: 'string',
            name: 'name',
            label: 'Nombre',
            isTitle: true,
            required: true,
          },
          {
            type: 'image',
            name: 'photo',
            label: 'Foto',
          },
          {
            type: 'rich-text',
            name: 'bio',
            label: 'Biografía',
            isBody: true,
          },
        ],
      },
      {
        name: 'compositores',
        label: 'Compositores',
        path: 'content/compositores',
        format: 'mdx',
        fields: [
          {
            type: 'string',
            name: 'name',
            label: 'Nombre',
            isTitle: true,
            required: true,
          },
          {
            type: 'image',
            name: 'portrait',
            label: 'Retrato',
          },
          {
            type: 'rich-text',
            name: 'biography',
            label: 'Biografía',
            isBody: true,
          },
        ],
      },
    ],
  },
})