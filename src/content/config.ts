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
    type: 'content',
    schema: z.object({
        status: z.enum(["published", "archived"]).optional(),
        author: reference('staff'),
        category: z.string().optional(),
        image: z.string().optional(),
        title: z.string(),
        subtitle: z.string().optional(),
        seo: z
        .object({
            description: z.string().optional(),
            imageAlt: z.string().optional(),
            seoTitle: z.string().optional(),
            callToAction: z.string().optional(),
        })
        .optional(),
        icon: z.string().optional().default('home'),
        pack: z.string().optional().default('mdi'),
        shortTitle: z.string().optional(),
        index: z.number().optional(),
        tags: z.array(z.string()).optional(),
    })
});

const projects = defineCollection({
    type: 'content',
    schema: z.object({
        status: z.enum(["published", "archived"]).optional(),
        title: z.string(),
        subtitle: z.string().optional(),
        image: z.string().optional(),
        changed: z.string().optional(),
        seo: z
        .object({
            description: z.string().optional(),
            imageAlt: z.string().optional(),
            changedAlt: z.string().optional(),
            seoTitle: z.string().optional(),
            callToAction: z.string().optional(),
        })
        .optional(),
        icon: z.string().optional(),
        pack: z.string().optional(),
        shortTitle: z.string().optional(),
        tags: z.array(z.string()).optional(),
    })
});

const linkcasts = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        subtitle: z.string().optional(),
        image: z.string().optional(),
        imageRatio: z.string().optional(),
        date: z.date().optional(),
        url: z.string().optional(),
        seo: z
        .object({
            description: z.string().optional(),
            imageAlt: z.string().optional(),
            seoTitle: z.string().optional(),
            callToAction: z.string().optional(),
        })
        .optional(),
    })
});

const initiatives = defineCollection({
    type: 'content',
    schema: z.object({
        initiator: z.array(reference('partners')),
        projects: z.array(z.string()).optional(),
        date: z.date().optional(),
        title: z.string(),
        image: z.string().optional(),
        goal: z.number().optional(),
        subtitle: z.string().optional(),
        startDate: z.date().default(new Date()),
        endDate: z.date().optional(),
        status: z.enum(["published", "archived"]).optional(),
        tags: z.array(z.string()).optional(),
        images: z.array(z.string()).optional(),
        seo:
        z.object({
            description: z.string().optional(),
            imageAlt: z.string().optional(),
            seoTitle: z.string().optional(),
            callToAction: z.string().optional(),
        })
        .optional(),
        icon: z.string().optional(),
        pack: z.string().optional(),
        shortTitle: z.string().optional(),
    })
});

const donations = defineCollection({
    // type: 'data',
    schema: z.object({
        // initiative: reference('initiatives'),
        uuid: z.string(),
        initiative: z.string(),
        donator: z.string().default('Anoniem'),
        amount: z.number().default(0),
        date: z.date(),
        message: z.string().optional(),
    })
});

const albums = defineCollection({
    schema: z.object({
        title: z.string(),
        seoTitle: z.string().optional(),
        description: z.string().optional(),
        image: z.string(),
        imageAlt: z.string().optional(),
        tracklist: z.array(z.string()),
        genres: z.array(z.string()),
        credits: z.string().optional(),
    })
});

const artists = defineCollection({
    schema: z.object({
        autogenerated: z.boolean().default(true),
        active: z.boolean().default(true),
        title: z.string(),
        seoTitle: z.string().optional(),
        twitter: z.string().optional(),
        instagram: z.string().optional(),
        facebook: z.string().optional(),
        audiomack: z.string().optional(),
        meaning: z.string().optional(),
        image: z.string().optional(),
        imageAlt: z.string().optional(),
        name: z.string().optional(),
        sex: z.string().optional(),
        genres: z.array(z.string()).optional(),
        languages: z.array(z.string()).optional(),
        experience: z.string().optional(),
        profession: z.array(z.string()).optional(),
        vocal_type: z.array(z.string()).optional(),
        vocal_skills: z.array(z.string()).optional(),
        performance_setup: z.array(z.string()).optional(),
        vision: z.string().optional(),
        mission: z.string().optional(),
        reason: z.string().optional(),
        wishes: z.string().optional(),
        motivation: z.string().optional(),
        inspiration: z.string().optional(),
        youth_influences: z.string().optional(),
        influential_artists: z.string().optional(),
        purpose: z.string().optional(),
        solution: z.string().optional(),
        success: z.string().optional(),
        discography: z.string().optional(),
        actions: z.string().optional(),
    })
});


export const collections = { staff, pages, linkcasts, projects, initiatives, partners, donations, artists, albums}
