import { createTRPCRouter } from "~/server/api/trpc";
import { communitiesRouter } from "~/server/api/routers/communities";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  communities: communitiesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
