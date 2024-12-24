"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryError = exports.ConnectionError = exports.DatabaseError = void 0;
class DatabaseError extends Error {
    constructor(message, code, originalError) {
        super(message);
        this.code = code;
        this.originalError = originalError;
        this.name = 'DatabaseError';
    }
}
exports.DatabaseError = DatabaseError;
class ConnectionError extends DatabaseError {
    constructor(message, originalError) {
        super(message, 'CONNECTION_ERROR', originalError);
        this.name = 'ConnectionError';
    }
}
exports.ConnectionError = ConnectionError;
class QueryError extends DatabaseError {
    constructor(message, originalError) {
        super(message, 'QUERY_ERROR', originalError);
        this.name = 'QueryError';
    }
}
exports.QueryError = QueryError;
