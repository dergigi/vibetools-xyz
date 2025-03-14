# VibeTools

Just vibe it into existence. VibeTools provides creative solutions for all your digital needs. It helps you shape memorable experiences and build amazing products that resonate with your audience.

Visit the live site: [VibeTools](https://vibetools.xyz)  
GitHub Repository: [https://github.com/dergigi/vibetools-xyz](https://github.com/dergigi/vibetools-xyz)

![VibeTools Website](./public/images/vibetools-screenshot.png)

## 🚀 Project Structure

Inside of this Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── images/
│       └── clients/
├── src/
│   ├── components/
│   ├── layouts/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

Components are organized in the `src/components/` directory.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `npm install`          | Installs dependencies                              |
| `npm run dev`          | Starts local dev server at `localhost:4321`        |
| `npm run build`        | Build your production site to `./dist/`            |
| `npm run preview`      | Preview your build locally, before deploying       |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `npm run astro --help` | Get help using the Astro CLI                       |
| `./deploy.sh`          | Deploy the site to Vercel production               |

## 🚀 Deployment

This site is configured for deployment on [Vercel](https://vercel.com). To deploy:

### Option 1: Using the Deployment Script

1. Install the Vercel CLI globally: `npm install -g vercel`
2. Login to Vercel: `vercel login`
3. Run the deployment script: `./deploy.sh`

### Option 2: Deploy from GitHub

1. Go to [Vercel](https://vercel.com) and sign up/login
2. Import your GitHub repository
3. Configure as follows:
   - Framework Preset: Astro
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Click Deploy

### Option 3: Manual Deployment

1. Install Vercel CLI: `npm install -g vercel`
2. Login to Vercel: `vercel login`
3. Build the site: `npm run build`
4. Deploy: `vercel --prod`

## 💬 Prompts

Pro tip: if your vibe agent refuses to create graphics for you, ask it to generate the graphics as svg files and offer to convert svg to png via cli. It will oblige and the only thing you'll have to do is spam "Accept all".

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👀 Learn More About Astro

Feel free to check [Astro documentation](https://docs.astro.build) or jump into the [Astro Discord server](https://astro.build/chat).

## Made With 🧡 and Vibes

Made with 🧡 and vibes by [Gigi](https://dergigi.com) during [SEC-04](https://sovereignengineering.io) 🏴‍☠️
