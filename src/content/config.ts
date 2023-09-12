import { defineCollection, reference, z } from 'astro:content';

const pages = defineCollection({
    schema: z.object({
        color: z.string().optional(),
        callToAction: z.string().optional(),
        category: z.string().optional(),
        description: z.string().optional(),
        title: z.string(),
        subtitle: z.string().optional(),
        shortTitle: z.string().optional(),
        icon: z.string().optional(),
        pack: z.string().optional(),
        image: z.string().optional(),
        imageAlt: z.string().optional(),
        index: z.number(),
        seoTitle: z.string().optional(),
        status: z.string().optional(),
        tags: z.array(z.string()).optional(),
    })
});

const projects = defineCollection({
    schema: z.object({
        title: z.string(),
        icon: z.string().optional(),
        pack: z.string().optional(),
        image: z.string().optional(),
        changed: z.string().optional(),
        imageAlt: z.string().optional(),
        status: z.string().optional(),
        subtitle: z.string().optional(),
        shortTitle: z.string().optional(),
        tags: z.array(z.string()).optional(),
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

const initiatives = defineCollection({
    schema: z.object({
        initiatior: reference('members').default('artkids'),
        updated: z.date().optional(),
        startDate: z.date().default(new Date()),
        endDate: z.date().optional(),
        title: z.string(),
        icon: z.string().optional(),
        pack: z.string().optional(),
        image: z.string().optional(),
        changed: z.string().optional(),
        imageAlt: z.string().optional(),
        status: z.string().optional(),
        subtitle: z.string().optional(),
        shortTitle: z.string().optional(),
        description: z.string().optional(),
        projects: z.array(reference('projects')).optional(),
        tags: z.array(z.string()).optional(),
        patreons: z.array(reference('members')).optional(),
        goal: z.number().optional()
    })
});

const members = defineCollection({
    schema: z.object({
        name: z.string(),
        type: z.enum(['individual', 'group', 'company', 'ngo', 'governmental institution']).default('individual'),
        image: z.string().optional(),
        changed: z.string().optional(),
        imageAlt: z.string().optional(),
        status: z.string().optional(),
        bio: z.string().optional(),
        tags: z.array(z.string()).optional(),
        donatios: z.array(reference('donations')).optional(),
        goal: z.number().optional()
    })
});

const donations = defineCollection({
    schema: z.object({
        anonymous: z.boolean(),
        amount: z.string(),
        plee: z.string(),
        data: z.date(),
        recurrency: z.enum(["daily", "weekly", "monthly", "quarterly", "yearly" ]).optional(),
        endData: z.date().optional(),
        message: z.string().optional(),
        patreon: z.array(reference('members')).optional(),
    })
});

export const collections = { pages, linkcasts, projects, initiatives, members, donations }
