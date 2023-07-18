#! /bin/bash

set -e

PROJECT_ID=digital-ucdavis-edu
CONTAINER_NAME=ae-test-worker
IMAGE=gcr.io/ucdlib-pubreg/$CONTAINER_NAME

gcloud config set project $PROJECT_ID
gcloud builds submit --tag $IMAGE