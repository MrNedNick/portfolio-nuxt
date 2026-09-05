import { $fetch, setup } from "@nuxt/test-utils/e2e";
import { describe, expect, test } from "vitest";

describe("portfolio routes", async () => {
  await setup({});

  test.each([
    ["home", "/", "Nikita Nedyalkov"],
    ["projects", "/projects", "Projects"],
    ["blog", "/blog", "Blog"],
  ])("renders the %s page", async (_name, path, expectedText) => {
    const html = await $fetch<string>(path);

    expect(html).toContain(expectedText);
  });
});
