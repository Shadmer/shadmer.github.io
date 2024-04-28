// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require(`path`);

module.exports = {
    webpack: {
        alias: {
            '@src': path.resolve(__dirname, 'src/'),
        },
    },
};
