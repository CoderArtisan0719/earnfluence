import { mutation, query } from './_generated/server';
import { v } from 'convex/values';

function generateRandomNumber() {
  const min = 10000; 
  const max = 100000;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

export const signUp = mutation({
  args: { email: v.string(), dob: v.string(), phone: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db.insert('users', { email: args.email, dob: args.dob, phone: args.phone });
  },
});

export const photo = mutation({
  args: { userId: v.id('users'), photo: v.id('_storage') },

  handler: async (ctx, args) => {
    ctx.db.patch(args.userId, { avatar: args.photo });
    const user = await ctx.db.get(args.userId);
    return user;
  },
});

export const updateInfo = mutation({
  args: { 
    userId: v.id('users'), 
    name: v.string(),
    email: v.string(),
    username: v.string(),
    bio: v.string(),
    twitter: v.string(),
    phone: v.string()
  },

  handler: async (ctx, args) => {
    ctx.db.patch(args.userId, { 
      email: args.email,
      name: args.name,
      username: args.username,
      phone: args.phone,
      bio: args.bio,
      twitter: args.twitter,
    });
    const user = await ctx.db.get(args.userId);
    return user;
  },
});

export const verifyCode = mutation({
  args: { email: v.string(), code: v.string() },
  handler: async (ctx, { email, code }) => {
    const verifyCode = await ctx.db.query("verifycodes").filter((q) => q.eq(q.field("email"), email)).first();
    if (!verifyCode) {
      return {error: 404}
    } else if (verifyCode.code !== code) {
      return {error: 403}
    } else {
      await ctx.db.delete(verifyCode._id);
      const users = await ctx.db.query("users").filter((q) => q.eq(q.field("email"), email)).first();
      return {success: true, users}
    }
  }
});

export const signIn = mutation({
  args: { email: v.string() },
  handler: async (ctx, { email }) => {
    const users = await ctx.db.query("users").filter((q) => q.eq(q.field("email"), email)).first();
    if (!users) {
      return {error: 404}
    } else {
      const code = generateRandomNumber().toString();
      const id = await ctx.db.insert('verifycodes', { email: email, code});
      return {id, code}
    }
  }
});

export const checkEmailExists = query({
  args: { email: v.string() },
  handler: async (ctx, { email }) => {
    const users = await ctx.db.query("users").filter((q) => q.eq(q.field("email"), email)).first();
    return !!users;
  }
});