#!/bin/bash
sudo chmod 0644 -R /var/.cloud66_env
touch /tmp/cap_deploy_works
echo $RAILS_ENV >> /tmp/cap_deploy_works