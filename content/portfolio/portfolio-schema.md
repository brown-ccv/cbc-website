# Portfolio Data Schema

## Project Schema

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | ✅ | Project title |
| `image` | string | ❌ | Image path/URL |
| `slug` | string | ✅ | URL slug for the project |
| `description` | string | ✅ | Project description |
| `project-type` | string | ✅ | Type of project (Software Engineering, Data Science, etc.) |
| `starred` | boolean | ✅ | Boolean for featured projects |
| `groups` | string[] | ❌ | Array of group affiliations |
| `languages` | string[] | ❌ | Array of programming languages used |
| `tags` | string[] | ❌ | Array of tags |
| `developers` | Developer[] | ❌ | Array of developer objects |
| `links` | Link[] | ❌ | Array of link objects |
| `department` | string[] | ❌ | Array of department affiliations (some projects) |
| `investigators` | Investigator[] | ❌ | Array of PI objects |

### Developer Object
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | ✅ | Developer name |
| `github_user` | string | ✅ | GitHub username |

### Link Object
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `display_text` | string | ✅ | Text to display for link (e.g., "website", "github") |
| `url` | string | ✅ | Link URL |

### Investigator Object
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | ✅ | Investigator name |
| `link` | string | ✅ | Investigator profile link |

## Workshop Schema

Same as Project schema, but without `department` and `investigators` fields.