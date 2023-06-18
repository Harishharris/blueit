import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const communitiesRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        title: z.string(),
        subTitle: z.string(),
        description: z.string().max(255),
        communityImage: z.string(),
      })
    )
    .mutation(
      async ({
        ctx,
        input: { title, subTitle, description, communityImage },
      }) => {
        await ctx.prisma.community.create({
          data: {
            title,
            subTitle,
            description,
            banner: "This is banner",
            profileIamge: communityImage,
          },
        });
      }
    ),

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
        image: z.string(),
      })
    )
    .mutation(({ ctx, input: { title, text, communityId, image } }) => {
      return ctx.prisma.post.create({
        data: {
          title,
          text,
          communityId,
          image,
          userId: ctx.session.user.id,
        },
      });
    }),
  getAllPosts: publicProcedure.query(async ({ ctx }) => {
    return ctx.prisma.post.findMany();
  }),

  getAllPostsRelatedToCommunity: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const data = ctx.prisma.post.findMany({
        where: {
          communityId: input,
        },
      });
      return data;
    }),

  getSinglePost: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      return ctx.prisma.post.findUnique({
        where: {
          id: input,
        },
      });
    }),

  getCorrespondingUser: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      return ctx.prisma.user.findFirst({
        where: {
          id: input,
        },
      });
    }),

  getCommunityName: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      return ctx.prisma.community.findFirst({
        where: {
          id: input,
        },
      });
    }),
});
