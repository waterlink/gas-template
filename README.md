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
cp ../gas-template/.gapps.example ./
cp ../gas-template/gapps.config.json.example ./

# And update your .gitignore with:
#
#/gapps.config.json
#/gapps.config.json.bkup
#/.gapps
#/.build/

# And move all your *.gs files to src/*.js

# If you need simple test suite included in this template:
cp ../gas-template/src/0Suite*.js ./src/
```

Next step is to bootstrap required docker image - `./scripts/bootstrap`.

Next step is to go to https://script.google.com - this will create new google
apps script.

*TODO: automate this part better, to not require people to install npm and
gapps on their machine, and allow them to not edit files manually*

After doing `gapps auth /path/to/client-secret.json` you want to copy your
`~/.gapps` to `my-project/.gapps`.

You do not need to do `gapps init`, you want
just copy example config:

```bash
cp gapps.config.json.example gapps.config.json
```

And edit `fileId` in `gapps.config.json` to be equal to the google drive ID of
your google apps script.

*/TODO*

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
