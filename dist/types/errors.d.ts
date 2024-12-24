export declare class DatabaseError extends Error {
    code: string;
    originalError?: Error | undefined;
    constructor(message: string, code: string, originalError?: Error | undefined);
}
export declare class ConnectionError extends DatabaseError {
    constructor(message: string, originalError?: Error);
}
export declare class QueryError extends DatabaseError {
    constructor(message: string, originalError?: Error);
}
