# Example workflow using Slack and ScrapingBee API 

In this workflow I'm going to try to use Zenaton workflows and API connectors to perform a Google request with ScrapingBee API and send the result every day to a Slack Channel. 

### Run

Create a .env file with the following keys:

The API token / APP_ID can be found on Zenaton dashboard. 

```
ZENATON_API_TOKEN=YOUR_TOKEN
ZENATON_APP_ID=ID
ZENATON_APP_ENV=dev
```

```
npm install
```

Then install and launch the Zenaton agent:

```
curl https://install.zenaton.com | sh  
```

and 

```
zenaton listen --boot=boot.js 
```



