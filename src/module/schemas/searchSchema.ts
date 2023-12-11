import { z } from "zod";

const searchSchema = z.object({
    results: z.array(
        z.object({
            id: z.string(),
            title: z.string(),
            url: z.string(),
            image: z.string(),
        })
    ),
    hasNextPage: z.boolean(),
    currentPage: z.string(),
});

export default searchSchema;
