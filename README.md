
# Next.js Application Deployment Guide

This is a [Next.js](https://nextjs.org) project with Docker containerization and AWS ECS deployment.

## Local Development

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Docker Setup

### Building the Docker Image

```bash
# Build the Docker image
docker build -t nextjs-app .

# Run the container locally
docker run -p 3000:3000 nextjs-app
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## AWS ECS Deployment

### Prerequisites

1. AWS Account with appropriate permissions
2. AWS CLI configured
3. GitHub repository with the application code
4. GitHub Actions configured

### Infrastructure Setup (Using Terraform)

1. ECS Cluster
2. ECR Repository
3. Task Definition
4. ECS Service
5. Load Balancer
6. VPC and Security Groups

### Deployment Process

1. **GitHub Actions Setup**
   - Add AWS credentials to GitHub secrets:
     - AWS_ACCESS_KEY_ID
     - AWS_SECRET_ACCESS_KEY

2. **Automated Deployment Flow**
   - Push to main branch triggers the workflow
   - Docker image is built
   - Image is pushed to ECR
   - ECS task definition is updated
   - New deployment is initiated

### Monitoring Deployment

1. Check GitHub Actions tab for deployment status
2. Monitor ECS service in AWS Console
3. View CloudWatch logs for container output

## Project Structure

```
├── app/                  # Next.js application files
├── .github/workflows/    # GitHub Actions workflow
├── Dockerfile           # Docker configuration
└── next.config.ts      # Next.js configuration
```

## Environment Variables

Configure the following environment variables in AWS ECS task definition:

- `NODE_ENV`: production
- `PORT`: 3000
- Add any other application-specific variables

## Troubleshooting

1. **Docker Build Issues**
   - Check Dockerfile syntax
   - Verify node_modules are properly handled
   - Ensure all required files are included

2. **Deployment Issues**
   - Verify AWS credentials
   - Check ECS service logs
   - Monitor task definition updates

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [AWS ECS Documentation](https://aws.amazon.com/ecs/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

## Next Steps
1. Remove Vercel GitHub Integration
Since Vercel is managing your deployment through GitHub Apps, do the following:

Step 1: Remove GitHub Integration from Vercel
Go to Vercel Dashboard.
Select your project.
Go to Settings > Git.
Under "Git Integration," click "Remove GitHub App".
Step 2: Remove Vercel App from GitHub
Go to GitHub → Open your repository.
Navigate to Settings > Integrations > GitHub Apps.
Find Vercel in the list.
Click Configure → Click Uninstall.
Now, GitHub will no longer trigger Vercel deployments.

Step 3: Remove Vercel Deployment from GitHub
Go to your GitHub repository.
Open Settings > Environments.
Look for an environment named "Production" or related to Vercel.
Delete the environment.


# Create a folder
$ mkdir actions-runner && cd actions-runner
# Download the latest runner package
$ curl -o actions-runner-osx-x64-2.322.0.tar.gz -L https://github.com/actions/runner/releases/download/v2.322.0/actions-runner-osx-x64-2.322.0.tar.gz
# Optional: Validate the hash
$ echo "aa0fc262363912167dcdbc746ffcdf7b8996bc587f51cf1bab38ad86cf70b6ea  actions-runner-osx-x64-2.322.0.tar.gz" | shasum -a 256 -c
# Extract the installer
$ tar xzf ./actions-runner-osx-x64-2.322.0.tar.gz
Configure
# Create the runner and start the configuration experience
$ ./config.sh --url https://github.com/devopscodelab/nextjs-boilerplate --token BD5L3I2LOQLK3K6PDSKCLLDHXGFLG
# Last step, run it!
$ ./run.sh
Copied!
Using your self-hosted runner
# Use this YAML in your workflow file for each job
runs-on: self-hosted

# Since your GitHub Runner runs on AWS EC2, install Docker manually.

For Ubuntu/Debian-based instances:

sudo apt update
sudo apt install -y docker.io
sudo systemctl enable docker
sudo systemctl start docker
sudo usermod -aG docker $USER
newgrp docker

# install AWS CLI on UBUNTU runner

curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
sudo apt install unzip -y
unzip awscliv2.zip
sudo ./aws/install
