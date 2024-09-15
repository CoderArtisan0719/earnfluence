/* eslint-disable no-console */
import { v } from 'convex/values';

import { mutation } from './_generated/server';

export const profile = mutation({
  args: { userId: v.id('talents'), fullname: v.string(), email: v.string() },

  handler: async (ctx, args) => {
    ctx.db.patch(args.userId, { fullname: args.fullname, email: args.email });
  },
});

export const photo = mutation({
  args: { userId: v.id('talents'), photo: v.id('_storage') },

  handler: async (ctx, args) => {
    ctx.db.patch(args.userId, { photo: args.photo });
  },
});

export const password = mutation({
  args: {
    userId: v.id('talents'),
    oldPassword: v.string(),
    newPassword: v.string(),
  },

  handler: async (ctx, args) => {
    const user = await ctx.db.get(args.userId);

    // if (!user) {
    //   throw new Error('User not found');
    // }
  },
});
