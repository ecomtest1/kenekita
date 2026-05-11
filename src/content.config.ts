import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const rooms = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/rooms' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string().optional(),
    heroImage: z.string().optional(),
    gallery: z.array(z.string()).optional(),
    bookingLink: z.string().optional(),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    location: z.string().optional(),
    guests: z.number().optional(),
    bedrooms: z.number().optional(),
    bathrooms: z.number().optional(),
  }),
});

export const collections = { rooms };
