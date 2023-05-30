import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
    schema: z.object({
        index: z.number(),
        title: z.string(),
        shortTitle: z.string().optional(),
        subtitle: z.string(),
        seoTitle: z.string().optional(),
        icon: z.string().optional(),
        image: z.string().optional(),
        imageAlt: z.string().optional(),
        description: z.string().optional(),
        tags: z.array(z.string()).optional(),
        color: z.string().optional(),
        callToAction: z.string().optional(),
    })
});

const linkcasts = defineCollection({
    schema: z.object({
        title: z.string(),
        subtitle: z.string().optional(),
        seoTitle: z.string().optional(),
        imageAlt: z.string().optional(),
        image: z.string().optional(),
        imageRatio: z.string().optional(),
        date: z.date().optional(),
        url: z.string().optional(),
        color: z.string().optional(),
    })
});

export const collections = { pages, linkcasts };
