const path = require("path");
module.exports = {
	webpack: {
		alias: {
            '@widgets': path.resolve('src/widgets/'),
            '@pages': path.resolve('src/pages/'),
            '@icons': path.resolve('src/icons/'),
            '@features': path.resolve('src/features/'),
            '@shared': path.resolve('src/shared/'),
		},
	},
};
