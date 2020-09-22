import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Amplify from 'aws-amplify';

Amplify.configure({    
  "aws_project_region": "eu-west-1",
  "aws_cognito_identity_pool_id": "eu-west-1:766f3384-fd7c-4472-95e0-3e4a9fe11c08",
  "aws_cognito_region": "eu-west-1",
  "aws_user_pools_id": "eu-west-1_mG301YzUr",
  "aws_user_pools_web_client_id": "1h0lcj1d83k2m4ddn6pdfsbic4",
  "oauth": {},
  "aws_appsync_graphqlEndpoint": "https://hq7kqlp6q5czbncosk6l6gx6wu.appsync-api.eu-west-1.amazonaws.com/graphql",
  "aws_appsync_region": "eu-west-1",
  "aws_appsync_authenticationType": "API_KEY",
  "aws_appsync_apiKey": "da2-i3bdxgjwwrgpfkurebw25xgtvi",
  "aws_user_files_s3_bucket": "bucket103628-dev",
  "aws_user_files_s3_bucket_region": "eu-west-1"
  }
  );

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
