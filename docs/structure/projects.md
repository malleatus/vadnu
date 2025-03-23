# Projects

Each file in `/projects/` contains information about a specific project. The
word project here is a pretty loose term. The main thing that differentiates a
project from a reference is that a project has a logical end.

## Structure

Project documents follow a standard structure:

```markdown
# Project Name

- [ ] [[#Something Inflight]]

### Something Inflight

Detailed notes here about the inflight item.

## Log

### 2025-03-05 archived thing
```

### Active

Everything above the `## Log` section is considered "active". Typically, there is a task list at the very top, then any number of H3 subsections for more details. The task list can then use wikilinks style to the subsections.

### Log

The `## Log` section is where completed items are archived. When using within Neovim this section is commonly folded closed.

When an active subsection is no longer in flight (e.g. it's done), it moves down into the log section. Typically, it is prefixed with the current date.

For example, to move the `Something Inflight` section from the example above into the historical log, you would change it to:

```markdown
## Log

### 2025-03-23 / Something Inflight

Detailed notes here about the inflight item.
```

## Neovim Marks

- Use `c` to mark the `## Log` section (this allows quick navigation)
