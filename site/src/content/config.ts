import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    tags: z.array(z.string()).default([]),
    /** Tour slugs this post should cross-link to (rendered in a "see also" block) */
    relatedTours: z.array(z.string()).default([]),
    /** Destination slug this post relates to */
    destination: z.enum(['naples', 'pompeii', 'amalfi', 'ravello', 'capri', 'paestum', 'herculaneum']).optional(),
    keywords: z.string().optional(),
    /** Hide from production index without removing the file */
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
