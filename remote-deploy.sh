#!/bin/bash

# Exit on error
set -e

# Variables - Update these with your VPS details
VPS_USER="root"  # Replace with your VPS username
VPS_HOST="85.31.235.215"  # Replace with your VPS IP or hostname
DEPLOY_PATH="/opt/mentalmotionx"  # Path on VPS where to store deployment files

# Local paths
LOCAL_SCRIPT_PATH="deploy.sh"

# Create SSH key if it doesn't exist
if [ ! -f ~/.ssh/id_rsa ]; then
    echo "Generating SSH key..."
    ssh-keygen -t rsa -N "" -f ~/.ssh/id_rsa
    echo "Please add this public key to your VPS authorized_keys file:"
    cat ~/.ssh/id_rsa.pub
    echo "After adding the key, press Enter to continue..."
    read
fi

# Copy deployment script to VPS
echo "Copying deployment script to VPS..."
ssh $VPS_USER@$VPS_HOST "mkdir -p $DEPLOY_PATH"
scp $LOCAL_SCRIPT_PATH $VPS_USER@$VPS_HOST:$DEPLOY_PATH/

# Run deployment script on VPS
echo "Running deployment script on VPS..."
ssh $VPS_USER@$VPS_HOST "cd $DEPLOY_PATH && chmod +x deploy.sh && ./deploy.sh"

echo "Remote deployment initiated successfully!"

