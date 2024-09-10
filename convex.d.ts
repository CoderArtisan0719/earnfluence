declare module 'convex/server' {
    export function mutation<T>(func: (context: any, ...args: any[]) => Promise<T>): any;
}