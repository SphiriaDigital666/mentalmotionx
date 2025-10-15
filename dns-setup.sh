#!/bin/bash

# Exit on error
set -e

# Add instructions for DNS setup with mentalmotionx.com domain
echo "DNS Configuration Guide for mentalmotionx.com"
echo "============================================="
echo ""
echo "To point your domain to your VPS, follow these steps:"
echo ""
echo "1. Log in to your domain registrar (where you purchased mentalmotionx.com)"
echo ""
echo "2. Navigate to the DNS management section"
echo ""
echo "3. Create the following A records:"
echo "   * Type: A"
echo "   * Host: @"
echo "   * Value: YOUR_VPS_IP_ADDRESS"  # Replace with your VPS IP address
echo "   * TTL: 3600 (or as recommended)"
echo ""
echo "4. Create a second A record for the www subdomain:"
echo "   * Type: A"
echo "   * Host: www"
echo "   * Value: YOUR_VPS_IP_ADDRESS"  # Replace with your VPS IP address
echo "   * TTL: 3600 (or as recommended)"
echo ""
echo "5. Optionally, set up an MX record if you plan to use email with this domain"
echo ""
echo "6. Wait for DNS propagation (can take up to 48 hours, but usually much faster)"
echo ""
echo "After DNS propagation is complete, your website should be accessible at:"
echo "http://mentalmotionx.com and http://www.mentalmotionx.com"
echo ""
echo "The deployment script will then set up HTTPS automatically."
