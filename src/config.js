const config = {
    s3: {
        REGION: "us-east-2",
        BUCKET: "andromeda-code-notes-app-upload",
    },
    apiGateway: {
        REGION: "us-east-2",
        URL: "https://upjt2jje42.execute-api.us-east-2.amazonaws.com/prod/notes",
    },
    cognito: {
        REGION: "us-east-2",
        USER_POOL_ID: "us-east-2_l2dy5nh0y",
        APP_CLIENT_ID: "3kkijmgehn61qnnjh1p1a0dpae",
        IDENTITY_POOL_ID: "us-east-2:2c66c66c-2abe-4a7a-873b-f10a02a42944",
    },
};

export default config;