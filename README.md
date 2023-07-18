# ae-workflow-example
Example GC Workflow for Aggie Experts integration into Fin

This example will:
  - Create GC workflow that will:
    - Create google cloud run job that will:
      - Connect to a PG database running in a GCE VM
      - Read user data from the database
      - Write a jsonld file to a GCS bucket
    - Run the cloud run job
    - Delete the cloud run job if it was successful
  - GcsSync will then sync the `/user/[id]` jsonld file to the LDP

Notes:  
 - On Start GcsSync will pull all `/user` files from the GCS Bucket to any instance that is started
 - If you re-run a workflow and not changes are made to the jsonld file in GCS, GcsSync will not sync the file to the LDP as the MD5 hash will be the same.

# Run

  - Grab the .env file
    - `gcloud secrets versions access latest --secret=ae-workflow-example-env > .env`
  - Build the custom init container
    - `docker compose build`
  - Start the cluster
    - `docker compose up`
  - Login CLI
    - `fin auth login`
  - Run a workflow
    - `fin workflow start -f /user/2 harvest`

