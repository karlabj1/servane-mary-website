# Setup Instructions for Servane Mary's Website

## Getting Started

This website is built with Gatsby and uses Contentful as a Content Management System (CMS).

## Prerequisites

- Node.js installed on your computer
- Access to the Contentful account (Space ID: `hcaq4mgu4ubb`)

## Setup Steps

### 1. Install Dependencies

```bash
npm install
```

### 2. Get Your Contentful API Key

You need the Contentful API key to run the website locally:

1. Go to: https://app.contentful.com/spaces/hcaq4mgu4ubb/api/keys
2. Log in with the Contentful account credentials
3. Find the **Content Delivery API - access token**
4. Copy the token

### 3. Configure Environment Variables

Open the `.env.development` file in the root directory and replace the placeholder with your actual API key:

```
CONTENTFUL_API_KEY=your_actual_api_key_here
```

### 4. Run the Development Server

```bash
npm run develop
```

The website will be available at:
- **Website:** http://localhost:8000
- **GraphQL Playground:** http://localhost:8000/___graphql

## Available Commands

- `npm run develop` - Start development server
- `npm run build` - Build for production
- `npm run serve` - Serve production build locally
- `npm run clean` - Clean Gatsby cache

## Website Structure

### Pages
- **Home** (`/`) - Shows years and featured artwork
- **Works** (`/works`) - Browse artworks by year (also shows exhibitions)
- **Biography** (`/biography`) - Artist biography
- **Essays & Press** (`/essays-press`) - Publications and press coverage

### Content Types (in Contentful)
- **Works** - Individual artworks with images, descriptions, and exhibition history
- **Exhibitions** - Exhibition details with installation images and works shown
- **Home Page** - Controls what appears on the homepage
- **Biography & Press** - Text content for those pages

## Making Content Changes

All content (text, images, artworks, exhibitions) is managed through **Contentful**:

1. Log in to Contentful: https://app.contentful.com
2. Navigate to the Content section
3. Edit or add new content
4. Publish your changes
5. The website will automatically pull the new content

## Troubleshooting

### "accessToken is required" error
- Make sure the `.env.development` file exists in the root directory
- Verify you've replaced `REPLACE_WITH_YOUR_ACTUAL_API_KEY` with the real API key
- No spaces around the `=` sign in the .env file

### Website not loading content
- Check that you're logged into the correct Contentful space
- Verify the API key has the correct permissions
- Try running `npm run clean` and then `npm run develop` again

### Need help?
Contact the original developer or check the Gatsby documentation: https://www.gatsbyjs.com/docs/

