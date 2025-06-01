# Herbal Aura Frontend

This repository contains the frontend code for the Herbal Aura e-commerce site.

## Project Structure

The actual Next.js project is located in the `herbalaura` subdirectory. All development should take place within that folder.

## Development

You can run the development server in two ways:

### Option 1: From the root directory

```bash
npm run dev
```

This will automatically change to the herbalaura directory and run the dev server.

### Option 2: From the herbalaura directory

```bash
cd herbalaura
npm run dev
```

## Building for Production

```bash
npm run build
```

## Other Commands

- `npm run start`: Start the production server
- `npm run lint`: Run the linter

## Note

The root package.json simply delegates commands to the herbalaura subdirectory. If you need to install new dependencies or modify package.json configuration, make sure to do so in the `herbalaura/package.json` file. 