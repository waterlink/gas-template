# Google Apps Script project template

This template provides basic setup for local development and CI/CD deployment.

## Prerequisites

- Docker

## Batteries included

- Local development in your favourite editor
- One-command sync with your development GAS project in the cloud (from local
  -> cloud)
- Travis CI configuration
- CD to production GAS project if travis was successful and current build is a
  git tag (i.e.: release)
- Simple test suite library for unit tests

## Development

First copy this template if you are creating new project, e.g.:

```bash
git clone https://github.com/waterlink/gas-template my-project
cd my-project
rm -rf .git && g init
```

Then change `README.md` file accordingly and start working on the code.

If you have already existin project, then:

```bash
git clone https://github.com/waterlink/gas-template
cd my-project
cp -r ../gas-template/scripts ./
cp -r ../gas-template/dockerfiles ./
cp ../gas-template/package.json ./
cp ../gas-template/.gapps.example ./
cp ../gas-template/gapps.config.json.example ./
cp ../gas-template/.travis.yml ./

# And update your .gitignore with:
#
#/gapps.config.json
#/gapps.config.json.bkup
#/.gapps
#/.build/
#/.npm/
#/node_modules

# And move all your *.gs files to src/*.js

# If you need simple test suite included in this template:
cp ../gas-template/src/0Suite*.js ./src/
```

Next step is to bootstrap required docker image - `./scripts/bootstrap`.

Next step is to go to https://script.google.com - this will create new google
apps script.

To authenticate the scripts just for you, you will need to create an API
project in google developer console (as described here:
https://github.com/danthareja/node-google-apps-script#12-independent-developer-console-project)
and call authentication script with path do the downloaded credentials file:

```bash
./scripts/auth /path/to/your/client/secrets.json
```

It will provide you a link to authenticate and then you will have to paste in
the authentication code that google will provide upon successful
authentication.

Next step is to setup your development GAS project with first deployment:

```bash
GOOGLE_DRIVE_ID=abcd-efgh ./script/deploy
```

Where `abcd-efgh` is the google drive ID of your own development project. This
will automatically create `gapps.config.json` file and all subsequent
deployments can be done without specification of `GOOGLE_DRIVE_ID`:

After that you should be able to run `scripts/deploy`, which should update code
in `script.google.com` web UI. (May require page reload or file
closing/opening).

At this point you can proceed with making changes to the code.

## Integration tests

*TODO: describe with example how one can run test suite in GAS cloud*

## Setting up Travis

In travis project you will need following environment variables defined in the
settings:

- GOOGLE_CLIENT_ID
- GOOGLE_CLIENT_SECRET
- GOOGLE_REFRESH_TOKEN
- GOOGLE_DRIVE_ID

First 3 are obtained through `gapps auth path/to/client/secret.json`, and file
`~/.gapps` will contain these values. Last one is obtained as part of the url
of your production GAS project.

## Contributing

1. Fork it
2. Make a feature branch, commit and push to Github
3. Create a Pull Request

## Contributors

- [waterlink](https://github.com/waterlink) - Oleksii Fedorov, creator, maintainer
