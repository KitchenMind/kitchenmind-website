# CI/CD Setup Guide for Next.js Project

## Overview
This project includes GitHub Actions CI/CD pipeline for automated build and deployment.

## Workflow Features

### Build Job
- ✅ **Multi-version testing**: Tests on Node.js 18.x and 20.x
- ✅ **Dependency caching**: Uses npm cache for faster builds
- ✅ **Code quality checks**: Runs linting and type checking
- ✅ **Build artifacts**: Uploads build files for deployment

### Deploy Options

#### 1. GitHub Pages (Default)
The workflow is configured to deploy to GitHub Pages by default.

**Setup Steps:**
1. Go to repository Settings → Pages
2. Select "GitHub Actions" as source
3. The workflow will automatically deploy to GitHub Pages

#### 2. Vercel (Alternative)
To use Vercel deployment, uncomment the `deploy-vercel` job in `.github/workflows/deploy.yml`

**Required Secrets:**
- `VERCEL_TOKEN`: Your Vercel API token
- `VERCEL_ORG_ID`: Your Vercel organization ID  
- `VERCEL_PROJECT_ID`: Your Vercel project ID

#### 3. Custom Server (Alternative)
To deploy to a custom server, uncomment the `deploy-server` job in `.github/workflows/deploy.yml`

**Required Secrets:**
- `SSH_PRIVATE_KEY`: Private SSH key for server access
- `SERVER_USER`: Username for server login
- `SERVER_IP`: Server IP address
- `SERVER_PATH`: Deployment path on server

## Workflow Triggers

### Automatic Triggers
- ✅ **Push to main**: Builds and deploys automatically
- ✅ **Pull requests**: Runs build and tests (no deployment)

### Manual Triggers
- You can manually trigger workflows from GitHub Actions tab

## Environment Variables

### GitHub Pages
- `DOMAIN`: Optional custom domain (set in repository variables)

### Custom Server
- Ensure your server has:
  - Node.js installed
  - PM2 for process management
  - SSH access configured

## Build Process

1. **Checkout**: Downloads source code
2. **Setup Node.js**: Installs Node.js with npm cache
3. **Install Dependencies**: Runs `npm ci` for clean install
4. **Lint**: Runs `npm run lint` for code quality
5. **Type Check**: Runs `npm run type-check` for TypeScript validation
6. **Build**: Runs `npm run build` to create production build
7. **Deploy**: Deploys to selected platform

## Troubleshooting

### Common Issues

1. **Build Fails on Linting**
   ```bash
   # Fix linting errors locally
   npm run lint --fix
   ```

2. **Type Check Fails**
   ```bash
   # Check TypeScript errors locally
   npm run type-check
   ```

3. **Deployment Fails**
   - Check secrets are properly configured
   - Verify server access and permissions
   - Check GitHub Pages settings

### Debugging

1. **View Logs**: Go to Actions tab in GitHub repository
2. **Check Artifacts**: Download build artifacts for inspection
3. **Local Testing**: Run `npm run build` locally to test

## Security Notes

- Never commit secrets to repository
- Use GitHub Secrets for sensitive data
- Regularly rotate SSH keys and tokens
- Enable branch protection rules for main branch

## Performance Optimization

- Uses npm cache for faster builds
- Matrix strategy tests multiple Node versions
- Build artifacts are retained for 7 days
- Parallel job execution for efficiency

## Support

For issues with CI/CD pipeline:
1. Check GitHub Actions logs
2. Verify all secrets are configured
3. Test build process locally
4. Review workflow configuration
