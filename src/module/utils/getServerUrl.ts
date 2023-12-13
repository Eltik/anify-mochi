import { Source } from "../models";

export async function getServerSources(url: string): Promise<Source> {
    console.log("Fetching from " + url + "...")
    const data: Source = await (await request.get(url)).json();
    return data;
}
