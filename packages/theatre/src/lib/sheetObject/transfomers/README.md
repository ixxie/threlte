# Transformers

Transformers are used to transform the data from the source to the target. The source is usually a property of a Three.js object, the target is a property of a Theatre.js `ISheetObject`.

## Usage

To create a transformer, you are provided a utility function:

```ts
import { createTransformer } from '@threlte/theatre'
import { types } from '@theatre/core'

const color = createTransformer({
  transform(value) {
    return types.rgba({ r: value.r, g: value.g, b: value.b, a: 1 })
  },
  apply(target, path, value) {
    target[path].r = value.r
    target[path].g = value.g
    target[path].b = value.b
  }
})
```

- The `transform` function is used to transform the value of a certain Three.js objects proerty to a property that Theatre.js can use in an `ISheetObject`. To ensure compatibility with the rest of the package, the return value must be any one of the functions available at Theatre.js' `types`.

- The `apply` function is used to apply the value to the target. `target` is the parent object of the property (usually a Three.js object), `path` is the name of the property and `value` is the value to apply.

## Usage in built-in components

- `<Sync>` uses transformers to transform arbitrary props that are *discovered* by a property path to a value that Theatre.js can handle.

- `<Transform>` uses transformers to transform the properties `position`, `rotation` and `scale` of a Three.js object to a value that Theatre.js can handle.