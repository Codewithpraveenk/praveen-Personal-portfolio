# Hosting This Portfolio Outside ChatGPT

This portfolio is ready for standard Next.js hosting.

## Recommended: Vercel

1. Create a GitHub repository for this folder.
2. Push the `praveen-portfolio` folder to that repository.
3. Go to https://vercel.com/new and import the GitHub repository.
4. Keep the default Vercel settings:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Install Command: `npm install`
   - Output Directory: leave empty
5. Click Deploy.

Vercel will give you a public link like:

```text
https://your-project-name.vercel.app
```

## Local Commands

```bash
npm install
npm run dev
npm run build
npm start
```

## Notes

- The portfolio image and resume placeholder are stored in `public/`.
- The 3D hero uses the local `three` package, so it works on Vercel without loading Three.js from a CDN.
- The contact form opens an email draft to `codewithpraveenk@gmail.com`.
- The existing ChatGPT Sites deployment can stay live while you deploy this version somewhere else.
