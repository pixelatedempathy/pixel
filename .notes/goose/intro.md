Run a typescript check on the `src/` folder. Address issues incrementally, tackling 5% of errors or warnings at a time, without interrupting workflow or seeking confirmation.

Log all progress and issues encountered. For unsolvable problems after three attempts, document them in `.notes/tasks/undone-zombies.md` and move on.

After resolving issues, rerun the typescript check to ensure at least a 5% improvement.
- Stage involved files.
- Commit changes with meaningful messages.

Maintain organized logs and update `weekly-log` as part of the ongoing documentation process.

Always:
- Reference OpenMemory for context.
- Follow the guidelines in `.notes/clean-code.md`.

Finally, if the session's context reaches its limit, summarize progress in a new note under `.notes/goose`, streamline current context, and reference the summary for continuity.

When you go to run a new typecheck, when you get the number of errors and warnings -- before you begin analying and fixing them -- make a small one line check-in here in this file, with that number, who you are, and the date.

---

Errors: 10
Warnings: 5
Who: Goose
Date: 2025-07-15
