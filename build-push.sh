#!/bin/bash

# Exit on error
set -e

# Variables
DOCKER_USERNAME="chamikadamith"  # Replace with your Docker Hub username
IMAGE_NAME="mentalmotionx"
IMAGE_TAG="latest"
FULL_IMAGE_NAME="$DOCKER_USERNAME/$IMAGE_NAME:$IMAGE_TAG"

echo "Building Docker image: $FULL_IMAGE_NAME"
docker build -t $FULL_IMAGE_NAME .

echo "Logging in to Docker Hub"
echo "Please enter your Docker Hub password when prompted"
docker login -u $DOCKER_USERNAME

echo "Pushing image to Docker Hub"
docker push $FULL_IMAGE_NAME

echo "Image successfully pushed to Docker Hub"
echo "You can pull it using: docker pull $FULL_IMAGE_NAME"
