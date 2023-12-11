import { z } from "zod";

export const discoverListingsResponseSchema = z.object({
    currentPage: z.string(),
    hasNextPage: z.boolean(),
    results: z.array(
        z.object({
            id: z.string(),
            title: z.string(),
            image: z.string(),
            url: z.string(),
            genres: z.array(z.string()),
        })
    ),
});
