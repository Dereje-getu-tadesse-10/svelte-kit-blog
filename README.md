# Svelte mdx blog

### Configuration File

The `src/lib/conf.ts` file holds various configuration settings for your website, including the website title, description, and other metadata for all pages. You can customize these settings by replacing the existing content with your own data.

### Blog Posts Folder

The `src/posts` folder is where all your Markdown (md) blog posts are stored. You can add, edit, or remove posts in this folder as needed.

### Data.json File

The `src/lib/data.json` file contains data used on the resources page of your website. If you don't need the resources page, you can safely delete the `data.json` file and the corresponding resources page located in the `src/routes/resources` folder.

### Deploying the Project

[Cloudflare Workers Adapter Documentation](https://kit.svelte.dev/docs/adapter-cloudflare-workers)

To add the Cloudflare Workers adapter to your project, run the following command:

`pnpm add -D @sveltejs/adapter-cloudflare-workers`

Then, import and configure the adapter in your `svelte.config.js file:

```
import adapter from '@sveltejs/adapter-cloudflare-workers';

export default {
  kit: {
    // Other kit options...
    adapter: adapter(),
    // ...
  },
};
```

Next, create a new file named wrangler.toml in the root of your project with the following content:

```
name = "project-name"
account_id = "your-account-id"
main = "./.cloudflare/worker.js"

build.command = "npm run build"
site.bucket = "./.cloudflare/public"
compatibility_date = "2023-08-20"
workers_dev = true

[vars]
VITE_SPOTIFY_CLIENT_ID = "your-spotify-client-id"
VITE_SPOTIFY_CLIENT_SECRET = "your-spotify-client-secret"
VITE_SPOTIFY_REFRESH_TOKEN = "your-spotify-refresh-token"
VITE_SPOTIFY_BASIC = "your-spotify-base-64"
```

In the wrangler.toml file, replace the placeholders with your actual project name, account ID, and Spotify credentials.

To encode your Spotify client ID and client secret in base64 format, you can use online tools like [Base64 Decode](https://www.base64decode.org/fr/). Enter your SPOTIFY_CLIENT_ID:SPOTIFY_CLIENT_SECRET and encode it to base64.
