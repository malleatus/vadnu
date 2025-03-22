# vadnu

What now? A repo for supporting and documenting the personal knowledge management system for [@hjdivad](https://github.com/hjdivad) and [@rwjblue](https://github.com/rwjblue).

We both use this system for project tracking, keeping track of relationships, tracking references and details, &c.

## Why "vad nu?"?

"Vad nu?" means "what now?" in Swedish. David (@hjdivad), who speaks Swedish, came up with the name. The name is essentially the purpose of our knowledge management system: organizing information to determine what to do next.

## Info Dump

Follow-ups, project tracking, todos

Folder structure:

- `projects/`
- `ref/`
- `ref/p/`
- `someday/`
- `TODO.md`

### Projects

What are projects? Projects are things that "can end". Could be work projects, could be meetings with people, etc.

#### Organization

All documents should start with:

```markdown
# Project Name | Person Name | etc

## Log

### 2025-03-05 archived thing
```

Items under `Log` are affectively just archived / finished.

Make `## Log` the `c` mark.

### References

References are things I want to remember. Things like:

- how do I use X tool?
- general knowledge stuff for people that I interact with (e.g. birthdays, anniversaries, relationships, etc)

#### /ref/p/

- Facts about people
- things I've promised
- history of 1:1 notes and whatnot

### Someday

This is a place for brainstorming and fleshing out projects/ideas/etc.

### Marks

#### Global

- `A` -> Set inside the H1 (to force expansion of the fold) for the `TODO.md`
- `B` -> Set inside the H3 for the current week for the current week (e.g. `projects/fy25/fy25q3.md`)
- `C` -> Set on the line for feedbacks within `projects/fy25.md`

#### Local

##### TODO.md

- `b` -> The end of the TODOs (e.g. the newline just above the next H2 **OR** the end of the file)

##### projects/

- `a` -> Reserved temporary local mark
- `b` -> Reserved temporary local mark
- `c` -> Set to the `## Log`
