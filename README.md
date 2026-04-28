## Structure

```
shared-lib/   - Workspace package with `pinia` in `dependencies`
host/         - Host app that initializes pinia and shares it as a singleton to remotes.
                Both pinia and shared-lib must be shared so that remotes use the very
                same pinia instance the host created.
remote/       - Remote/extension sharing the same packages with `import: false`
```

## Steps to reproduce

```bash
pnpm install
cd remote && pnpm dev
```

Then open http://localhost:5201 in the browser (or `curl http://localhost:5201`).

The remote's dev server terminal will show:

```
Internal server error: Failed to resolve import
  "__mf__virtual/__mfe_internal__remote__prebuild__pinia__prebuild__.js"
  from ".__mf__temp/remote/localSharedImportMap.js". Does the file exist?
```

## Why `pinia` must be shared separately

Simply removing `pinia` from the shared config is not an option. The host app
creates and installs the pinia instance, and remotes must receive the very same
instance via module federation's shared singleton mechanism. If `pinia` is not
shared, each remote would get its own pinia instance, breaking shared state.
