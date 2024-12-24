# @klypt/db-core

A flexible and type-safe database abstraction layer for TypeScript applications.

## Features

- Type-safe database operations
- Standardized repository pattern implementation
- Configurable database connections
- Comprehensive error handling
- Promise-based async/await API

## Installation

```bash
npm install @klypt/db-core
```

## Quick Start

### Database Connection

The package provides a standardized way to manage database connections:

```typescript
import { DatabaseConnection, DatabaseConfig } from '@klypt/db-core';

const config: DatabaseConfig = {
  host: 'localhost',
  port: 5432,
  database: 'mydb',
  username: 'user',
  password: 'password'
};

// Implement for your database of choice
class PostgresConnection implements DatabaseConnection {
  // Implementation details
}
```

### Repository Pattern

Create type-safe repositories for your entities:

```typescript
import { Repository } from '@klypt/db-core';

interface User {
  id: string;
  name: string;
  email: string;
}

class UserRepository implements Repository<User> {
  // Implementation details
}
```
### Error Handling

The package includes specialized error classes for different scenarios:

```typescript
import { DatabaseError, ConnectionError, QueryError } from '@klypt/db-core';

try {
  await repository.findById('123');
} catch (error) {
  if (error instanceof ConnectionError) {
    // Handle connection errors
  } else if (error instanceof QueryError) {
    // Handle query errors
  }
}
```

## Development


# Install dependencies
```bash
npm install
```

# Run tests
```bash
npm run test
```

# Build the package
```bash
npm run build
```

## License

[License Type] - See LICENSE file for details

## Author

Priyajit Mukherjee

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Support

For support, please open an issue in the GitHub repository.