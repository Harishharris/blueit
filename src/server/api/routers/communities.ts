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
        community: z.string(),
      })
    )
    .mutation(({ ctx, { title, text, community } }) => {
      return ctx.prisma.community.post.create({
        data: {
          title,
          text,
          community
        },
      });
    }),
});
