# TypeScript Functional Extensions

The goal of this repository is to add functional extensions to various built in prototypes in JavaScript/TypeScript. The hope is to add functional extensions to Object, Array, Function, String, Number and Boolean. Currently, it only adds functional extensions to the Array prototype. I will add more functional extensions as frequently as time permits.

**I know about the stigma around adding or making changes to the built-in prototypes. Currently this package only modifies built-in prototypes, but I eventually want to give users the option to decide to modify the built-in prototypes, or to instead add external functions that will do the same thing and not modify the built-in prototypes.**

Pull requests are always welcome and encouraged! Please feel free to make requests to add functions and to fix bugs. Issues, of course, are welcome as well, but know that I'm quite busy and it might take a while to respond to every Issue request that comes it.

## Installation

`npm install ts-functional-extensions`

```
// In one of your .ts files (you really only need to add this in a single file in a build, as it should affect the prototype in all of your files directly connected to the build)
import 'ts-functional-extensions';
```