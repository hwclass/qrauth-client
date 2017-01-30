# qrauth-client
Client-side Library Implementation of qrauth for Web Browsers

## Developer Setup Steps

```bash
# Clone the repository
$ git clone git@github.com:hwclass/qrauth-client.git

# Go to root folder
$ cd qrauth-client

# Install Dependencies
$ npm install

# Run Development Server
$ npm run start

# Open web browser and hit localhost:8084

```

## Implementation Steps in Vanilla JS

```bash
# Include it into your file with a script tag
<script src="node_modules/qrauth-client/qrauth-1.0.0.min.js"></script>

# Init the library by invoking init() method with two arguments : appId, appSecret
qrauth.init(<APP_ID>, <APP_SECRET>);
```

## Implementation Steps with React

```bash
# Import Qrauth component
import Qrauth from 'qrauth-client';

# Init the library by invoking init() method with two arguments : appId, appSecret
<Qrauth appId={<APP_ID>} appSecret={<APP_SECRET>} />
```

## Contributors
- [Barış Sönmez](https://www.github.com/barissonmez)
- [Barış Güler](https://www.github.com/hwclass)
