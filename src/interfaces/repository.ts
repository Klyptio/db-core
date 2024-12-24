export interface QueryOptions {
    where?: Record<string, any>;
    select?: string[];
    limit?: number;
    offset?: number;
    orderBy?: Record<string, any>;
    [key: string]: any; // Allow additional query options
  }
  
  export interface Repository<T extends Record<string, any>> {
    findById(id: string | number): Promise<T | null>;
    findMany(options?: QueryOptions): Promise<T[]>;
    create(data: Omit<T, 'id'>): Promise<T>;
    update(id: string | number, data: Partial<T>): Promise<T>;
    delete(id: string | number): Promise<boolean>;
    query<R = any>(query: string, params?: any[]): Promise<R>;
  }