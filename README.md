Exercises
----------------------------------------------------------------- 

## Code Exercise
- React.js SPA that uses https://github.com/arose/ngl and can load/display a PDB

## Definition of Done:
- Actually working, testing/documentation, a 12factor app. (12factor.net)
- Can load and run locally on any machine (*nix, windows, mac)
- If UI, mobile first/responsive

## Notes

This is a node package, run npm install to download appropriate dependencies for development.

### Development with React

This repository was built from  [create-react-app](https://github.com/facebook/create-react-app), a useful framework for JavaScript-based development.

__"Create React App requires Node 8 or higher.__
(AWS Cloud9 usees an old version of node, upgrade to v10 LTS):

The [Node Version Manager](https://github.com/creationix/nvm/blob/master/README.md) helps with installing recent versions of node.

```
nvm install lts/dubnium
nvm alias default lts/dubnium
```

This repository was created with:
```
npx create-react-app react-ngl-demo
```

Other Dependencies:
```
cd react-ngl-demo
npm install --save ngl
```

Run with:
```
npm start
```

Suggested development with TDD:
```
npm test
```
