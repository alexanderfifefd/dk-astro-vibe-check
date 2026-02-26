import { defineCollection, z } from 'astro:content';

const tjenester = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number().optional(),
    url: z.string().url().optional(),
    logo: z.string().optional(),
    invertLogo: z.boolean().optional(),
    driftsmodell: z.enum(['foreningsdriftet', 'medlemsinitiativ', 'samarbeid']),
    driftsdetaljer: z.string().optional(),
    systemansvarlig: z.string().optional(),
    administratorer: z.array(z.string()).optional(),
  }),
});

const arrangementer = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    location: z.string().optional(),
  }),
});

export const collections = { tjenester, arrangementer };
