# request

> Node 7+, Chrome 50+  (or babel :O)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Install

To get started:

```sh
yarn add @ibolmo/request
```

## Usage

```js
import { get } from 'request';

async function main() {
  console.log(await get('https://api.github.com'));
}

main();
```

## License

[MIT © Olmo Maldonado](../LICENSE)
