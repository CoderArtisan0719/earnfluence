import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    email: v.string(),
    phone: v.string(),
    dob: v.string()
  }),

  talents: defineTable({
    country: v.string(),
    dob: v.string(),
    displayName: v.string(),
    email: v.string(),
    legalName: v.string(),
    follow: v.string(),
    followRange: v.string(),
    followUsername: v.string(),
    phone: v.string(),
    referralCode: v.string(),
    selected: v.union(v.number(), v.null()),
    textareaValue: v.string(),
    username: v.string(),
  }),
});