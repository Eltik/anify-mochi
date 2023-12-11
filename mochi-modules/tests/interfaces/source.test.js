import { test } from 'vitest'
import runner from "@mochiapp/runner";
import Source from "../../src/module";

const source = runner(Source)

test("provides correct search info", async () => {
  console.log(await source.search({ query: "Test", page: 1, filters: [] }))
})

test("provides discover listings", async () => {
  console.log(await source.discoverListings())
})


test("provides playlist details", async () => {
  console.log(await source.playlistDetails("mushoku-tensei-ii-isekai-ittara-honki-dasu"))
})
