# ScriptSafe Supabase workspaces

This repository has three independent Supabase projects. Each directory is an isolated CLI workdir so linking or operating on one project does not silently retarget another.

| Workspace | Hosted project | Project ref | Region |
| --- | --- | --- | --- |
| `app` | ScriptSafe-App | `ksfcdpdsfsnqkshoythh` | `us-west-2` |
| `website` | ScriptSafe Website | `lcsqkbpixndcicgxnroh` | `us-east-2` |
| `demo` | ScriptSafe-Demo | `loshmkyloaikbrtcrzaz` | `us-east-1` |

Run Supabase commands from the repository root with an explicit workdir:

```bash
npx supabase@latest projects list --workdir supabase-workspaces/app
npx supabase@latest projects list --workdir supabase-workspaces/website
npx supabase@latest projects list --workdir supabase-workspaces/demo
```

Use the same `--workdir` argument for database, migration, function, and configuration commands. The generated `.temp` directories contain machine-local link metadata and are intentionally ignored by Git.

The three local configurations use Supabase's default ports, so run at most one local stack at a time unless the port assignments are changed.
