#!/bin/bash

# This file is run with a cron job every 10 minutes

# not using parse right now
#source scripts/bash_parse.sh
#echo "path is $folder_path"

node scripts/image_get.js


node scripts/git_push.js


#node push_with_cron


#node git_push.js