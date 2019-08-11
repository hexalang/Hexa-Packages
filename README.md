# packages <img align="left" width="48px" height="48px" src="https://hexalang.github.io/favicon/favicon-96x96.png" />

[Hexa](https://github.com/hexalang) package manager is a tool for easy code sharing between developers.
This repo contains list of freely downloadable packages. [Add yours!](#adding-your-package)

If you're looking for IDE packages visit [this link](https://github.com/hexalang/hexa#tools--ide)

How to use package manager: [...](TODO) :)

Preview online: https://hexalang.github.io/packages/

List: https://hexalang.github.io/packages/packages.json

[Discuss with community](https://github.com/hexalang/hexa#hexa)

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

### Add initial release

You should add a release with `v1.0.0` version tag to your package repo:

![releases](releases.png?raw=true)

![create_release](create_release.png?raw=true)

![publish_release](publish_release.png?raw=true)

Verify that tag properly created:

![verify_release](verify_release.png?raw=true)

[More information about how to create and manage your packages](TODO book)

## Notes

- Version numbers are `vx.y.z`, not `vx.y` neither any other format
- Links to GitLab/etc should work, but not tested yet
- [`packages.json`](https://github.com/hexalang/packages/blob/master/packages.json) file in a root folder
just statically includes
[`_includes/packages.json`](https://github.com/hexalang/packages/blob/master/_includes/packages.json)
into itself via Jekyll website builder, so it's [available online](https://hexalang.github.io/packages/packages.json)
for any purpose
