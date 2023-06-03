import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const communitiesRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        title: z.string(),
        subTitle: z.string(),
        description: z.string().max(255),
      })
    )
    .mutation(async ({ ctx, input: { title, subTitle, description } }) => {
      await ctx.prisma.community.create({
        data: {
          title,
          subTitle,
          description,
          banner: "This is banner",
          profileIamge: "This is profile Image",
        },
      });
    }),

  getRecommendedCommunities: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.community.findMany({
      take: 5,
    });
  }),

  getAllCommunities: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.community.findMany();
  }),

  newPost: protectedProcedure
    .input(
      z.object({
        title: z.string(),
        text: z.string(),
        communityId: z.string(),
      })
    )
    .mutation(({ ctx, input: { title, text, communityId } }) => {
      return ctx.prisma.post.create({
        data: {
          title,
          text,
          communityId,
          userId: ctx.session.user.id,
        },
      });
    }),
  getAllPosts: protectedProcedure.query(async ({ ctx }) => {
    return ctx.prisma.post.findMany();
  }),
});
