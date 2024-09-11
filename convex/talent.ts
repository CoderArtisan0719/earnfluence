import { mutation, query } from './_generated/server';
import { v } from 'convex/values';

export const signUp = mutation({
  args: { 
    country: v.string(),
    dob: v.string(),
    displayName: v.string(),
    email: v.string(),
    fullname: v.string(),
    follow: v.string(),
    followRange: v.string(),
    followUsername: v.string(),
    phone: v.string(),
    referralCode: v.string(),
    selected: v.union(v.number(), v.null()),
    textareaValue: v.string(),
    username: v.string(),
    type: v.number(),
    balance: v.string(),
    isAnonymous: v.optional(v.boolean()),
   },
  handler: async (ctx, args) => {
    const talentId = await ctx.db.insert('talents', {
      country: args.country,
      dob: args.dob,
      displayName: args.displayName,
      email: args.email,
      fullname: args.fullname,
      follow: args.follow,
      followRange: args.followRange,
      followUsername: args.followUsername,
      phone: args.phone,
      referralCode: args.referralCode,
      selected: args.selected,
      textareaValue: args.textareaValue,
      username: args.username,
      type: args.type,
      balance: args.balance,
      isAnonymous: args.isAnonymous,
    });

    const talentData = await ctx.db.get(talentId);

    return talentData;
  },
});

export const getTalent = mutation({
  args: { userId: v.id('talents') },

  handler: async (ctx, args) => {
    try {
      const result = await ctx.db.get(args.userId);

      return { ...result };
    } catch (error) {
      throw new Error('Unable to fetch request.');
    }
  },
});