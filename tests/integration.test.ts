// eslint is bugged in tests, reports errors that aren't there
/* eslint-disable @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment */

import { GuildBuilder } from "../src/frontend/api";
import { resetLib } from "../src/runtime/util.js";

function loadTestFile(path: string): GuildBuilder {
  return new GuildBuilder(`./samples/${path}.lua`);
}

async function runTest(path: string) {
  const builder = loadTestFile(path);
  const config = await builder.evaluateConfiguration();

  expect(config).toMatchSnapshot();
}

describe("Integrations", () => {
  beforeEach(() => resetLib());

  it("runs minimal.lua", async () => {
    return await runTest("minimal");
  });

  it("runs lib-minimal.lua", async () => {
    return await runTest("lib-minimal");
  });

  it("runs roles.lua", async () => {
    return await runTest("roles");
  });

  it("runs channels.lua", async () => {
    return await runTest("channels");
  });

  it("runs channels-with-overrides.lua", async () => {
    return await runTest("channels-with-overrides");
  });

  it("runs categories.lua", async () => {
    return await runTest("categories");
  });

  it("runs lint-fails.lua", async () => {
    return await runTest("lint-fails");
  });

  it("runs inheritance-role.lua", async () => {
    return await runTest("inheritance-role");
  });

  it("runs inheritance-category.lua", async () => {
    return await runTest("inheritance-category");
  });

  // Lib
  it("runs lib-roles.lua", async () => {
    return await runTest("lib-roles");
  });

  it("runs lib-visit.lua", async () => {
    return await runTest("lib-visit");
  });
});
