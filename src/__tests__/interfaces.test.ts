import { DatabaseConnection, Repository, DatabaseError, ConnectionError } from '../';

// Test implementation classes
class TestConnection implements DatabaseConnection {
  private connected = false;

  async connect(config: any): Promise<void> {
    this.connected = true;
  }

  async disconnect(): Promise<void> {
    this.connected = false;
  }

  isConnected(): boolean {
    return this.connected;
  }

  async execute<T>(query: string, params?: any[]): Promise<T> {
    if (!this.connected) throw new ConnectionError('Not connected');
    return [] as any;
  }
}

interface TestEntity {
  id: number;
  name: string;
}

class TestRepository implements Repository<TestEntity> {
  constructor(private connection: DatabaseConnection) {}

  async findById(id: number): Promise<TestEntity | null> {
    return { id, name: 'test' };
  }

  async findMany(): Promise<TestEntity[]> {
    return [{ id: 1, name: 'test' }];
  }

  async create(data: Omit<TestEntity, 'id'>): Promise<TestEntity> {
    return { id: 1, ...data };
  }

  async update(id: number, data: Partial<TestEntity>): Promise<TestEntity> {
    return { id, name: 'test', ...data };
  }

  async delete(id: number): Promise<boolean> {
    return true;
  }

  async query<R = any>(query: string, params?: any[]): Promise<R> {
    return this.connection.execute(query, params);
  }
}

describe('Database Interfaces', () => {
  let connection: TestConnection;
  let repository: TestRepository;

  beforeEach(() => {
    connection = new TestConnection();
    repository = new TestRepository(connection);
  });

  describe('DatabaseConnection', () => {
    it('should manage connection state', async () => {
      expect(connection.isConnected()).toBeFalsy();
      
      await connection.connect({});
      expect(connection.isConnected()).toBeTruthy();
      
      await connection.disconnect();
      expect(connection.isConnected()).toBeFalsy();
    });

    it('should throw ConnectionError when executing without connection', async () => {
      await expect(connection.execute('SELECT 1')).rejects.toThrow(ConnectionError);
    });
  });

  describe('Repository', () => {
    it('should implement CRUD operations', async () => {
      const created = await repository.create({ name: 'test' });
      expect(created.id).toBeDefined();
      
      const found = await repository.findById(created.id);
      expect(found).toBeDefined();
      
      const updated = await repository.update(created.id, { name: 'updated' });
      expect(updated.name).toBe('updated');
      
      const deleted = await repository.delete(created.id);
      expect(deleted).toBeTruthy();
    });
  });
});