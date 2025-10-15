#!/bin/bash

# Exit on error
set -e

# Variables
DOCKER_USERNAME="chamikadamith"  # Replace with your Docker Hub username
IMAGE_NAME="mentalmotionx"
IMAGE_TAG="latest"
FULL_IMAGE_NAME="$DOCKER_USERNAME/$IMAGE_NAME:$IMAGE_TAG"
CONTAINER_NAME="mentalmotionx"
DOMAIN="mentalmotionx.com"

# Update system and install dependencies if not already installed
echo "Updating system and installing dependencies..."
apt-get update
apt-get install -y docker.io docker-compose nginx certbot python3-certbot-nginx

# Start Docker if not running
echo "Ensuring Docker is running..."
systemctl start docker
systemctl enable docker

# Pull the latest image
echo "Pulling the latest image from Docker Hub..."
docker pull $FULL_IMAGE_NAME

# Stop and remove existing container if it exists
echo "Stopping existing container if it exists..."
docker stop $CONTAINER_NAME 2>/dev/null || true
docker rm $CONTAINER_NAME 2>/dev/null || true

# Run the new container
echo "Starting new container..."
docker run -d \
  --name $CONTAINER_NAME \
  -p 3000:3000 \
  --restart unless-stopped \
  $FULL_IMAGE_NAME

# Configure Nginx as a reverse proxy
echo "Configuring Nginx..."
cat > /etc/nginx/sites-available/$DOMAIN << EOF
server {
    listen 80;
    server_name $DOMAIN www.$DOMAIN;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF

# Enable the site
ln -sf /etc/nginx/sites-available/$DOMAIN /etc/nginx/sites-enabled/

# Test Nginx configuration
nginx -t

# Reload Nginx
systemctl reload nginx

# Setup SSL with Certbot
echo "Setting up SSL with Let's Encrypt..."
certbot --nginx -d $DOMAIN -d www.$DOMAIN --non-interactive --agree-tos --email chamikadamith@gmail.com

echo "Deployment completed successfully!"
echo "Your application is now running at https://$DOMAIN"
