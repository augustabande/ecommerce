/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["@medusajs/medusa"],
  },
  // Disabilita middleware in sviluppo se il backend non è disponibile
  ...(process.env.NODE_ENV === 'development' && {
    async redirects() {
      return []
    }
  })
}

module.exports = nextConfig