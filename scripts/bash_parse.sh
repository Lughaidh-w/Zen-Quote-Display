#!/bin/bash

### This file isn't used right now

ENV_FILE="config/.env"

# Parses .env
while IFS='=' read -r key value; do
    if [[ ! -z "$key" && ! -z "$value" ]]; then
        export "$key"="$value"
    fi
done < "$ENV_FILE"