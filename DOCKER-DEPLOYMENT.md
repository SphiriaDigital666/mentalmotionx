# MentalMotionX Docker Deployment

This guide explains how to deploy the MentalMotionX Next.js application using Docker, push it to Docker Hub, and deploy it on a Hostinger VPS with the domain mentalmotionx.com.

## Prerequisites

- Docker installed on your local machine
- Docker Hub account
- Hostinger VPS with SSH access
- Domain name (mentalmotionx.com) with access to DNS settings

## Local Development and Testing

1. Build and run the Docker container locally:

```bash
# Build and run with Docker Compose
docker-compose up --build
```

2. Access the application at http://localhost:3000

## Build and Push to Docker Hub

1. Update the Docker Hub username in the `build-push.sh` script if needed.

2. Run the build and push script:

```bash
./build-push.sh
```

3. Enter your Docker Hub credentials when prompted.

## Deployment to Hostinger VPS

1. Update the VPS details in the `remote-deploy.sh` script:
   - VPS_USER
   - VPS_HOST
   - Optionally adjust DEPLOY_PATH

2. Run the remote deployment script:

```bash
./remote-deploy.sh
```

3. The script will generate an SSH key if needed and copy it to your VPS.

## Domain Configuration

1. Make sure your domain's DNS records point to your VPS IP:

```bash
./dns-setup.sh
```

2. Follow the instructions to set up your DNS records with your domain registrar.

3. The deployment script will automatically configure Nginx and set up SSL with Let's Encrypt.

## Manually Deploying to VPS

If you prefer to deploy manually:

1. Copy the `deploy.sh` script to your VPS.
2. Make it executable: `chmod +x deploy.sh`
3. Run it: `./deploy.sh`

## Maintenance

- To update the application, make changes locally, rebuild the Docker image, push to Docker Hub, and run the remote deployment script again.
- SSL certificates will auto-renew via Let's Encrypt's Certbot.

## Troubleshooting

- Check Docker container logs: `docker logs mentalmotionx`
- Check Nginx logs: `/var/log/nginx/error.log` and `/var/log/nginx/access.log`
- Check SSL certificate issues: `certbot certificates`
