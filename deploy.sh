#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Deploy to Vercel
echo "Deploying to Vercel..."
npx vercel --prod

echo "Deployment completed!" 