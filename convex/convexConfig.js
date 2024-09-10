import { ConvexReactClient } from 'convex/react';

// Ensure the URL is properly set in your environment variables
// const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;
// console.log('convexUrl', convexUrl);
// if (!convexUrl) {
//   console.error("Convex URL is not set in environment variables");
//   throw new Error("Convex URL is required");
// }

const convexClient = new ConvexReactClient('https://calculating-barracuda-888.convex.cloud');

export default convexClient;
