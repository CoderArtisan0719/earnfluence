import { mutation, query } from './_generated/server';
import { v } from 'convex/values';

export const signUp = mutation({
  args: { email: v.string(), dob: v.string(), phone: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db.insert('users', { email: args.email, dob: args.dob, phone: args.phone });
  },
});

export const signIn = mutation({
  args: { email: v.string() },
  handler: async (ctx, { email }) => {
    const users = await ctx.db.query("users").filter((q) => q.eq(q.field("email"), email)).first();
    return users;
  }
});


export const checkEmailExists = query({
  args: { email: v.string() },
  handler: async (ctx, { email }) => {
    const users = await ctx.db.query("users").filter((q) => q.eq(q.field("email"), email)).first();
    return !!users;
  }
});