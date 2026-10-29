import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";

test("API reference documents every agent endpoint", () => {
  const api = readFileSync("docs/API.md", "utf8");
  for (const path of [
    "GET /bounties`",
    "GET /bounties/{id}`",
    "POST /bounties/{id}/claim`",
    "POST /bounties/{id}/release-claim`",
    "POST /pr-drafts`",
    "GET /pr-drafts/{id}`",
  ]) {
    assert.ok(api.includes(path), `docs/API.md is missing ${path}`);
  }
});

test("repo ships a license and contributing guide", () => {
  assert.ok(existsSync("LICENSE"));
  assert.ok(existsSync("CONTRIBUTING.md"));
});
