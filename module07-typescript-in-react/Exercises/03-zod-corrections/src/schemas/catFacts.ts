import z from 'zod';

const CatFactsSchema = z.object({
  fact: z.string(),
  length: z.number(),
  //   length: z.number().catch((ctx) => 42),
  //   thumbnail: z.url().catch(() => 'https://placeholder.com/300x400'),
});

export { CatFactsSchema };
