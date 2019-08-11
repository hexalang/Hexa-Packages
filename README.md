# packages

If you're looking for IDE packages visit [this link](https://github.com/hexalang/hexa#tools--ide)

How to use package manager: ... :)

Preview online: https://hexalang.github.io/packages/

List: https://hexalang.github.io/packages/packages.json

## Adding your package

Open [`_includes/packages.json`](https://github.com/hexalang/packages/blob/master/_includes/packages.json)
and click on "Edit this file" button:

![Edit this file](edit.png?raw=true)

This will create your own copy of the packages repository.

### Edit packages structure:

Add new `{}` JSON object to the array of `packages.json` with at least this contents:

- `name` - name of the package, for example `my-good-package`
- `url` - address of github repo, for example [`https://github.com/PeyTy/hexa-demo-package`](https://github.com/PeyTy/hexa-demo-package)
- `description` - short description of the package, like `Random number generator`

### Finish editing:

![Propose](propose.png?raw=true)

![Comparing](comparing.png?raw=true)

![Create](create.png?raw=true)

![Done](done.png?raw=true)

Well done! :tada:

## Notes

- [`packages.json`](https://github.com/hexalang/packages/blob/master/packages.json) file in a root folder
just statically includes
[`_includes/packages.json`](https://github.com/hexalang/packages/blob/master/_includes/packages.json)
into itself via Jekyll website builder, so it's [available online](https://hexalang.github.io/packages/packages.json)
for any purpose
