import { defineCollection, z } from 'astro:content';
import { glob } from 'astro:loaders'; // Import the native lookup glob loader

const safeSchema = defineCollection({
    // Using the modern directory glob loader forces Astro to index files properly
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/tools' }),
    schema: z.object({
        title: z.string().default(''),
        eyebrow: z.string().default(''),
        summary: z.string().default(''),
        statusTone: z.string().default('neutral'),
        icon: z.string().default('document'),
        label: z.string().default(''),
        status: z.string().default(''),
        order: z.number().default(0),
        destination: z.string().default(''),
        vehicle: z.string().default(''),
        missionWindow: z.string().default('')
    }).passthrough(),
});

export const collections = {
    pages: safeSchema,
    capstone: safeSchema,
    infrastructure: safeSchema,
    tools: safeSchema,
    operations: safeSchema,
    news: safeSchema,
    departures: safeSchema,
    docs: safeSchema,
};