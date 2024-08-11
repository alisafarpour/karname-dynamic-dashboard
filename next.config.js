/** @type {import('next').NextConfig} */
const withFonts = require('next-fonts');
const withPlugins = require('next-compose-plugins');

const httpsHostnames = ['jsonplaceholder.typicode.com']
const httpHostnames = ['api.localhost', '127.0.0.1',]

const nextConfig = {
    images: {
        remotePatterns: [
            ...httpsHostnames.map(hostname => ({
                protocol: 'https',
                hostname
            })),
            ...httpHostnames.map(hostname => ({
                protocol: 'http',
                hostname
            })),
        ],
    },
};

module.exports = withPlugins([withFonts], nextConfig,);
