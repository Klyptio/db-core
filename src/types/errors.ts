export class DatabaseError extends Error {
    constructor(
      message: string,
      public code: string,
      public originalError?: Error
    ) {
      super(message);
      this.name = 'DatabaseError';
    }
  }
  
  export class ConnectionError extends DatabaseError {
    constructor(message: string, originalError?: Error) {
      super(message, 'CONNECTION_ERROR', originalError);
      this.name = 'ConnectionError';
    }
  }
  
  export class QueryError extends DatabaseError {
    constructor(message: string, originalError?: Error) {
      super(message, 'QUERY_ERROR', originalError);
      this.name = 'QueryError';
    }
  }