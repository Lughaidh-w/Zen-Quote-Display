#!/bin/bash

# This file is run with a cron job every 10 minutes

# not using parse right now
#source scripts/bash_parse.sh
#echo "path is $folder_path"

# update image
node scripts/image_get.js

# commit and push
node scripts/git_push.js