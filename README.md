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
import { get, post } from 'request';

async function main() {
  const response = await get('https://api.github.com');
  console.log(JSON.parse(response));

  const success = await post('https://your.tld/resource', {
    data: {
      field: 'value'
    }
  });
  console.log(success);
}

main();
```

## License

[MIT © Olmo Maldonado](../LICENSE)
