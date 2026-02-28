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
    driftsmodell: z.enum(['foreningsdriftet', 'medlemsinitiativ', 'samarbeid']).optional(),
    driftsdetaljer: z.string().optional(),
    systemansvarlig: z.string().optional(),
    administratorer: z.array(z.string()).optional(),
    kategori: z.enum(['tjeneste', 'infrastruktur']).default('tjeneste'),
    status: z.enum(['i-drift', 'forslag', 'ønskeliste']).default('i-drift'),
    erstatter: z.array(z.string()).optional(),
    alternativer: z.array(z.string()).optional(),
    lanseringsdato: z.coerce.date().optional(),
  }),
});

const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    location: z.string().optional(),
  }),
});

export const collections = { tjenester, events };
