# xBoard

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/f493c855556648c7ae95e69b0036e400)](https://app.codacy.com/manual/mareksl/xBoard?utm_source=github.com&utm_medium=referral&utm_content=mareksl/xBoard&utm_campaign=Badge_Grade_Dashboard)
[![buddy pipeline](https://app.buddy.works/xboard-app/xboard/pipelines/pipeline/236598/badge.svg?token=3bd7174e11b1b81b22592205b9c0fb7503f186046e3abad0bc86c15015e744f8 "buddy pipeline")](https://app.buddy.works/xboard-app/xboard/pipelines/pipeline/236598)

Project team management board for efficient allocation of developer resources to ongoing and upcoming projects

## Table of contents

- [Getting started](#getting-started)
  - [Setup](#setup)
  - [Compiling protocol buffers](#compiling-protocol-buffers)
- [Running tests](#running-tests)
  - [Unit tests](#unit-tests)
  - [E2E Tests](#e2e-tests)
- [Deployment](#deployment)
- [Built With](#built-with)
- [Contributing](#contributing)
- [License](#license)

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Setup

To run this project on a local machine, simply run

```sh
docker-compose up --build
```

from the project's root directory.

### Compiling protocol buffers

Each change to the _.proto_ files in the services requires a compilation of the protocol buffers into Angular code.

Instructions:

1. Install `protoc` according to [these instructions](https://github.com/protocolbuffers/protobuf#protocol-compiler-installation).
2. Run `yarn proto:generate` in frontend folder.

## Running tests

### Unit tests

To run tests locally, run

```
yarn test
```

in the frontend or any of the services directories.

### E2E Tests

#### Cypress

- `yarn cy:run`
- `yarn cy:open`

## Deployment

TBD

## Built With

- [Nest.js](https://nestjs.com) on the backend, using microservices
- [gRPC](https://grpc.io/) for service and client communication
- [Angular](https://angular.io/) on the frontend
- [Envoy](https://www.envoyproxy.io/) proxy
- [ngx-grpc](https://github.com/ngx-grpc/core)

## Contributing

TBD

## License

TBD
