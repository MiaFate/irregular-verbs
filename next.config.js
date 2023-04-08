/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  scope: '/app',
  sw: 'service-worker.js',
});

const nextConfig = {
  experimental: {
    appDir: true,
  },
}

module.exports = withPWA({
  experimental: {
    appDir: true,
  },
}) 
