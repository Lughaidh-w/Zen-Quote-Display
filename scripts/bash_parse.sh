#!/bin/bash

ENV_FILE="../config/.env"

# Parse .env file and set environment variables
while IFS='=' read -r key value; do
    if [[ ! -z "$key" && ! -z "$value" ]]; then
        export "$key"="$value"
    fi
done < "$ENV_FILE"