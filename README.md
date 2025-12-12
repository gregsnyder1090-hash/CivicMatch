# CivicMatch

CivicMatch is a lightweight web app that helps users discover political action committees (PACs) that align with their values. Users can select their location and the issues important to them, then view a personalized results page listing relevant PACs (local first, then national).

## Features

- **State Selection**: Choose your state (or select "Prefer not to say") to see local PACs
- **Issue Selection**: Multi-select from 10 different cause areas
- **Local-First Results**: Shows local PACs for your state, then national options
- **Direct Links**: All PAC cards link directly to their websites for donations
- **Informational Only**: We do not process donations—users donate directly through PAC websites

## Tech Stack

- **Next.js 14+** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Static JSON data** (no database required)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone or download this repository

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables (optional):
   Create a `.env.local` file in the root directory:
   ```
   NEXT_PUBLIC_FEEDBACK_URL=https://your-feedback-form-url.com
   ```
   If not set, the app will use a default placeholder URL.

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Updating PAC Data

The PAC data is stored in a static JSON file at `data/pacs.json`. To add, remove, or modify PACs:

1. Open `data/pacs.json`

2. Each PAC entry follows this structure:
   ```json
   {
     "issue_key": "climate_environment",
     "issue_label": "Climate & Environment",
     "name": "PAC Name",
     "website": "https://example.com",
     "description": "One sentence description.",
     "level": "local",
     "states": ["CA", "NY"]
   }
   ```

3. **Fields:**
   - `issue_key`: Must match one of the keys in `config/constants.ts` (ISSUES array)
   - `issue_label`: Display name for the issue (should match the label in constants)
   - `name`: PAC name
   - `website`: Full URL to the PAC's website
   - `description`: One sentence description of the PAC
   - `level`: Either `"local"` or `"national"`
   - `states`: Array of state codes (e.g., `["CA", "NY"]`) for local PACs, empty array `[]` for national PACs

4. Save the file—changes will be reflected on the next page load (or restart the dev server)

## Available Issues

The app currently supports these 10 issue areas:

1. Climate & Environment
2. Reproductive Rights
3. Voting Rights & Democracy
4. Criminal Justice & Policing
5. Gun Safety
6. LGBTQ+ Equality
7. Housing & Economic Justice
8. Education
9. Immigration
10. Labor & Workers' Rights

To add new issues, update both:
- `config/constants.ts` (ISSUES array)
- `data/pacs.json` (add PACs with the new issue_key)

## Deployment

### Deploying to Vercel

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)

2. Import your repository in [Vercel](https://vercel.com)

3. Configure environment variables:
   - Go to your project settings in Vercel
   - Add `NEXT_PUBLIC_FEEDBACK_URL` with your feedback form URL

4. Deploy! Vercel will automatically build and deploy your Next.js app

### Manual Build

To build for production:

```bash
npm run build
npm start
```

## Feedback URL Configuration

The app includes feedback links throughout (footer, results page, about page). To configure the feedback URL:

1. **Development**: Create a `.env.local` file:
   ```
   NEXT_PUBLIC_FEEDBACK_URL=https://your-feedback-form-url.com
   ```

2. **Production (Vercel)**: Add the environment variable in your Vercel project settings

3. **Supported Services**: Works with any hosted form service:
   - Tally
   - Typeform
   - Google Forms
   - Any other form service that provides a public URL

If not configured, the app will use a default placeholder URL.

## Project Structure

```
/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with Header/Footer
│   ├── page.tsx           # Landing page (/)
│   ├── quiz/              # Quiz page (/quiz)
│   ├── results/           # Results page (/results)
│   └── about/             # About page (/about)
├── components/            # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── StateSelector.tsx
│   ├── IssueSelector.tsx
│   └── PACCard.tsx
├── config/                # Configuration
│   └── constants.ts       # Issues, states, feedback URL
├── data/                  # Static data
│   └── pacs.json          # PAC database
├── lib/                   # Utilities
│   ├── types.ts           # TypeScript interfaces
│   └── utils.ts           # Filtering and data processing
└── public/                # Static assets (if any)
```

## License

This is a passion project MVP. Feel free to use and modify as needed.

## Support

For questions, feedback, or suggestions, use the feedback links throughout the app or open an issue in the repository.

