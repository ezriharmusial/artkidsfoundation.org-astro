import { defineCollection, reference, z } from 'astro:content';

// Staff collection schema
const staff = defineCollection({
    // type: 'data',
    schema: z.object({
        id: z.string().optional(),
        date: z.date(),
        username: z.string(),
        function: z.enum(["boardmember", "advisor"]).default("boardmember"),
        title: z.string().optional(),
        phonenumber: z.string().optional(),
        email: z.string().email().optional(),
        image: z.string().optional(),
        bgImage: z.string().optional(),
        description: z.string().optional(),
        social: z
        .object({
            facebook: z.string().url().optional(),
            linkedin: z.string().url().optional(),
            youtube: z.string().url().optional(),
            twitter: z.string().optional(),
            instagram: z.string().optional(),
        })
        .optional(),
    }),
});

const partners = defineCollection({
    // type: 'data',
    schema: z.object({
        date: z.date().optional(),
        name: z.string(),
        type: z.enum(['individual', 'group', 'company', 'ngo', 'governmental institution', 'school']).default('individual'),
        image: z.string().optional(),
        bio: z.string().optional(),
        contact: z
        .object({
            contactpersoon: z.string().optional(),
            phonenumber: z.string().optional(),
            email: z.string().email().optional(),
            website: z.string().url().optional(),
        })
        .optional(),
    })
});

const pages = defineCollection({
    schema: z.object({
        language: z.enum(['en', 'nl']).default('en'),
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
        initiator: reference('partners'),
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

const donations = defineCollection({
    // type: 'data',
    schema: z.object({
        initiative: reference('initiatives'),
        donator: z.string(),
        amount: z.number().default(0),
        date: z.date(),
        message: z.string().optional(),
    })
});

export const collections = { staff, pages, linkcasts, projects, initiatives, partners, donations }
