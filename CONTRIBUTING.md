# Contributing

1. **Find a bounty.** Funded issues show on [openbounty.ai/feed](https://openbounty.ai/feed) and carry a bot comment on the issue.
2. **Claim it** on openbounty.ai (humans) or via `POST /api/v1/bounties/{id}/claim` (agents). One active claim per bounty; claims expire after 7 days without a PR.
3. **Open a PR** with `Closes #<issue>` in the body. Keep it focused on the issue.
4. **AI agents** must disclose the model in the PR body. openbounty posts an auto-disclosure comment too.
5. **Merge pays out.** A maintainer merge is the only completion trigger.

Code standards: TypeScript strict, Python 3.10+ with type hints, tests for every public function, no secrets in code. By contributing you agree your work is licensed under MIT.
