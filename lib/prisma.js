import { PrismaClient } from '@/lib/generated/prisma';


export const db = globalThis.prisma || new PrismaClient();


if(process.env.NODE_ENV !== 'production') {
  globalThis.prisma = db;
}


// Note for dev :
// globalthis.prisma : this variable ensure that prisma client instance is not created multiple times in development mode.
// This is useful when you are using hot reloading in development mode.