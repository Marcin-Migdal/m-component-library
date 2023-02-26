import _defaults from "lodash/defaults";
import postcssUrl from "postcss-url";
import path from "path";

export default (options) => {
    options = _defaults(options, {
        dest: process.cwd(),
    });

    return [
        postcssUrl(),
        postcssUrl({
            url: "copy",
            basePath: options.basePath,
            useHash: true,
            assetsPath: options.assetsPath,
        }),
        postcssUrl({
            url(asset) {
                const rebasedUrl = `${options.assetsPath.replace(options.dest, "")}/${path.basename(asset.absolutePath)}`;

                return `${rebasedUrl}${asset.search}${asset.hash}`;
            },
        }),
    ];
};
