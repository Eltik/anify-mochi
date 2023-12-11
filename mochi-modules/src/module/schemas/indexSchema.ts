import { z } from "zod";

const indexSchema = z.object({
    url: z.string(),
});

export default indexSchema;
