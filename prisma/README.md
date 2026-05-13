# Prisma Database Setup Guide

This guide explains how to set up and use the PostgreSQL database with Prisma for the portfolio admin panel.

## Prerequisites

- PostgreSQL installed and running locally or accessible via connection string
- Node.js and npm/pnpm installed
- `.env.local` file created with your DATABASE_URL

## Environment Setup

1. **Copy the environment template:**

   ```bash
   cp .env.example .env.local
   ```

2. **Update DATABASE_URL in .env.local:**

   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/portfolio_db"
   ```

   Replace:
   - `user` - your PostgreSQL username (default: postgres)
   - `password` - your PostgreSQL password
   - `localhost` - your database host
   - `5432` - your PostgreSQL port (default)
   - `portfolio_db` - your database name

   **Example:**

   ```env
   DATABASE_URL="postgresql://postgres:mypassword@localhost:5432/portfolio_dev"
   ```

## Installation

1. **Install Prisma packages:**

   ```bash
   npm install
   # or
   pnpm install
   ```

2. **Generate Prisma Client:**
   ```bash
   npm run prisma:generate
   ```

## Database Setup

1. **Create the database (if using local PostgreSQL):**

   ```bash
   createdb portfolio_db
   ```

2. **Run migrations:**

   ```bash
   npm run prisma:migrate
   ```

   This will:
   - Create all tables defined in `schema.prisma`
   - Create the migration file in `prisma/migrations/`

3. **Seed initial data (optional):**

   ```bash
   npm run prisma:seed
   ```

   This will populate the database with sample data for testing.

## Data Models

### About (Profile)

- **Singleton record** - Only one exists in the database
- Contains portfolio owner information (name, bio, social links, stats)
- Directly editable via the admin panel

### Projects

- Portfolio showcase projects
- Fields: title, description, tags, status (PRODUCTION/ACTIVE/ARCHIVED), links
- Searchable and filterable in admin panel

### Skills

- Technical skills with proficiency levels (0-100)
- Organized by category (Container Orchestration, Cloud, CI/CD, etc.)
- Can include detail notes (certifications, experience)

### Certifications

- Professional certifications and credentials
- Fields: name, issuer, year, badge code, credential ID, verification URL

### CVFile

- Uploaded CV/Resume files stored in S3
- Metadata stored in database (filename, URL, size)
- Only one can be marked as "active" at a time
- Unique constraint ensures consistency

### BlogPost

- Blog articles synced from Payload CMS or stored directly
- Fields: title, slug, content, status (DRAFT/PUBLISHED), views, tags
- Can be featured on homepage

### AdminLog (Audit Trail)

- Tracks all changes made in the admin panel
- Useful for audit purposes and rollback references

## Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm build

# Open Prisma Studio (GUI for database)
npm run prisma:studio

# Create a new migration from schema changes
npm run prisma:migrate

# Generate Prisma Client (after schema changes)
npm run prisma:generate

# Run seeder with sample data
npm run prisma:seed
```

## Prisma Studio

To visually browse and edit your database:

```bash
npm run prisma:studio
```

Then open `http://localhost:5555` in your browser.

## Schema Modifications

If you modify `prisma/schema.prisma`:

1. Make your changes to the schema file
2. Run `npm run prisma:migrate` to create a new migration
3. Follow the prompts to name your migration (e.g., "add_new_field")
4. The migration will be applied to your database

## PostgreSQL Setup (Local)

### macOS (Homebrew)

```bash
brew install postgresql
brew services start postgresql
createdb portfolio_db
```

### Linux (Ubuntu/Debian)

```bash
sudo apt-get install postgresql postgresql-contrib
sudo service postgresql start
sudo -u postgres createdb portfolio_db
```

### Windows

Download and install from https://www.postgresql.org/download/windows/

### Docker

```bash
docker run --name portfolio-db \
  -e POSTGRES_PASSWORD=password \
  -e POSTGRES_DB=portfolio_db \
  -p 5432:5432 \
  -d postgres:latest
```

## Connecting from Admin Panel

The admin components can query data using the Prisma client:

```typescript
import { prisma } from "@/lib/prisma";

// Example: Fetch all projects
const projects = await prisma.project.findMany();

// Example: Update a project
await prisma.project.update({
  where: { id: 1 },
  data: { title: "New Title" },
});
```

## Best Practices

1. **Always run migrations** before shipping to production
2. **Keep sensitive data** (passwords, API keys) in `.env.local`
3. **Version control** `schema.prisma` and migrations, not `.env.local`
4. **Use Prisma Studio** to verify data during development
5. **Index frequently queried fields** for better performance
6. **Use migrations** for schema changes, don't modify schema directly

## Troubleshooting

### "Cannot find module '@prisma/client'"

- Run `npm run prisma:generate` to regenerate the client

### "Database connection refused"

- Verify PostgreSQL is running
- Check DATABASE_URL in `.env.local`
- Test connection: `psql $DATABASE_URL`

### Migration conflicts

- If migrations conflict, resolve the conflict in the migration files
- Run `npm run prisma:migrate` again

## Resources

- [Prisma Documentation](https://www.prisma.io/docs/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Prisma Schema Reference](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference)
