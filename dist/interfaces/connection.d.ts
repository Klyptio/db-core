export interface DatabaseConfig {
    connectionString?: string;
    host?: string;
    port?: number;
    database?: string;
    username?: string;
    password?: string;
    ssl?: boolean;
    [key: string]: any;
}
export interface DatabaseConnection<TConfig extends DatabaseConfig = DatabaseConfig> {
    connect(config: TConfig): Promise<void>;
    disconnect(): Promise<void>;
    isConnected(): boolean;
    execute<T = any>(query: string, params?: any[]): Promise<T>;
}
