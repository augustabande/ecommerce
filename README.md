# E-commerce Headless Stack

## Architettura
- **Backend**: Medusa.js (Node.js + Express + PostgreSQL + Redis)
- **Frontend**: Next.js (React + TailwindCSS)
- **CMS**: Strapi
- **Pagamenti**: Stripe + Redsys
- **Search**: Algolia
- **Hosting**: Vercel (Frontend) + Render (Backend)

## Struttura Progetto
```
├── backend/          # Medusa.js API
├── frontend/         # Next.js storefront
├── cms/             # Strapi CMS
├── shared/          # Tipi TypeScript condivisi
└── docker-compose.yml
```

## Quick Start
1. `git clone https://github.com/TUO_USERNAME/ecommerce-headless.git`
2. `cd ecommerce-headless`
3. `docker-compose up -d postgres redis`
4. `cd backend && npx medusa db:migrate`
5. `npx medusa user -e admin@test.com -p supersecret`
6. `npm run dev` (backend)
7. `cd ../frontend && npm install && npm run dev`
8. Admin: http://localhost:9000/app/login
9. Frontend: http://localhost:3000

## Servizi
- Backend API: http://localhost:9000
- Frontend: http://localhost:3000
- CMS Admin: http://localhost:1337
- PostgreSQL: localhost:5432
- Redis: localhost:6379