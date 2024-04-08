#!/bin/bash

ENV_FILE="config/.env"

# Parses .env
while IFS='=' read -r key value; do
    if [[ ! -z "$key" && ! -z "$value" ]]; then
        export "$key"="$value"
    fi
done < "$ENV_FILE"