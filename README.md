# ci-cd-do-zero

## Pipeline CI Básica

Para implementar uma pipeline de CI básica, você pode usar GitHub Actions. Crie um arquivo `.github/workflows/ci.yml` com o seguinte conteúdo:

```yaml
name: CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '14'
    - run: npm install
    - run: npm test
```