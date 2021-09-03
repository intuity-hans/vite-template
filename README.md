# new project

this is a project template for react x viteJS:

- ViteJS
- reactJS
    - chakra-ui
    - react-router-dom
    - zustand
- Typescript
- ESLint


## vite aliases

we use aliases for importing modules which turns this:

`import Test from ../../../../components/Test`

into this

`import { Test } from @components` 

🤓

```json
"paths": {
    "@components/*": ["./components/*"],
    "@components": ["./components"],
    "@routes/*": ["./routes/*"],
    "@types": ["./types"],
    "@store": ["./store"],
    "@theme": ["./theme"],
    "@theme/*": ["./theme/*"]
}
```
