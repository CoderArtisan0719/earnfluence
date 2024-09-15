import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    email: v.string(),
    phone: v.string(),
    dob: v.string()
  }),

  talents: defineTable({
    email: v.string(),
    type: v.number(), // 0: Client, 1: Talent
    phone: v.string(),
    dob: v.string(),
    country: v.string(),
    displayName: v.string(),
    photo: v.optional(v.id('_storage')),
    fullname: v.string(),
    follow: v.string(),
    followRange: v.string(),
    followUsername: v.string(),
    referralCode: v.string(),
    selected: v.union(v.number(), v.null()),
    textareaValue: v.string(),
    username: v.string(),
    balance: v.string(),
    isAnonymous: v.optional(v.boolean()),
  }),


  requests: defineTable({
    userId: v.id('talents'),
    kind: v.string(),
    survey: v.optional(v.string()),
    asset: v.optional(v.string()),
    assetOther: v.optional(v.string()),
    ALTAoptions: v.array(v.string()),
    propertyAddress: v.string(),
    countyAccountInfo: v.optional(v.string()),
    siteContactInfoName: v.string(),
    siteContactInfoPhone: v.string(),
    siteContactInfoEmail: v.string(),
    turnaroundTime: v.string(),
    specificDate: v.string(),
    additionalInfo: v.array(
      v.object({
        index: v.number(),
        key: v.string(),
        value: v.string(),
        isEdit: v.boolean(),
      }),
    ),
    otherSurvey: v.string(),
    uploadCommits: v.array(v.string()),
    uploadSurveys: v.array(v.string()),
    uploadOthers: v.array(v.string()),
    receivedBids: v.array(v.id('bids')), // received bid ids
    receivedUsers: v.array(v.id('talents')), // received user ids
    requestUser: v.object({
      fullname: v.string(),
      email: v.string(),
      creationTime: v.number(),
    }),
    status: v.string(), // open, start, revise, closed
  }),

  bids: defineTable({
    requestId: v.id('requests'),
    clientId: v.id('talents'),
    vendorId: v.id('talents'),
    amount: v.number(),
    unit: v.string(),
    workId: v.optional(v.id('_storage')),
    status: v.string(), // placed, rejected, accepted, submitted, rework, paid, refunding, refunded, closed
  }),

  transactions: defineTable({
    senderId: v.id('talents'), // senderId === receiverId && type === 'deposite'
    receiverId: v.id('talents'), // senderId === receiverId && type === 'withdraw'
    bidId: v.optional(v.id('bids')),
    amount: v.number(),
    type: v.string(), // deposit, escrow, sudmitted, paid, refunding, refunded, closed, withdraw
  }),
});