# Pre-required installs for desktop execution
- Install the AWS CLI 
    - https://docs.aws.amazon.com/cli/latest/userguide/getting-started-prereqs.html
- Install the SAM toolkit 
    - https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-getting-started.html
- Create an AWS user account in the respective AWS account with appropriate role/permissions to create resources in the cloud formation yaml template. (Out of scope to walk through this...)
- Configure AWS CLI credentials to use the client access key and secret provided for the created user in the above step. (Note that the AWS CLI credentials used for the default profile are found in the *~/.aws/credentials* file)

# Install
- Clone the repo into a working directory
    - insert Git Repo URL here


# Deploy

- Use the SAM cli commands to build and deploy into the AWS account (*using the AWS credentials already configured*)
    ``` 
    sam build
    sam deploy
    ```

# Test
- Run this from command line
    ```
    curl --location --request POST 'https://pya253jpt9.execute-api.ca-central-1.amazonaws.com' --header 'Content-Type: application/json' \
    --data-raw '{
        "Detail":{
            "message": "This is my test"
        }
    }'
    ```
- From postman...


# Cleanup
- Use the AWS CLI cloudformation command to delete the stack
    ```
    aws cloudformation delete-stack --stack-name eventbus-poc
    ```