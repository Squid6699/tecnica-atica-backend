# Técnica Ática - Backend

API REST para administrar el catálogo de productos. Está construida con
[NestJS](https://nestjs.com/), TypeScript, Sequelize y PostgreSQL.

## Configuración

Instala las dependencias:

```bash
npm install
```

Crea un archivo `.env` en la raíz del backend con las credenciales de
PostgreSQL:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=tu_contraseña
DB_DATABASE=productos
PORT=3000
```

El esquema de la base de datos está en [`database.sql`](./database.sql).
Ejecuta ese archivo en la base de datos configurada antes de iniciar la API.

## Ejecución

```bash
# desarrollo
npm run start:dev

# producción
npm run build
npm run start:prod
```

La API queda disponible por defecto en `http://localhost:3000`.

## Endpoints

Todos los endpoints de productos usan el prefijo `/api/products`.

| Método | Ruta | Descripción |
| --- | --- | --- |
| `GET` | `/api/products` | Devuelve todos los productos. |
| `GET` | `/api/products/:id` | Devuelve el producto cuyo `id` coincide con el parámetro. Si no existe, la respuesta es `null`. |
| `POST` | `/api/products` | Crea un producto. Rechaza códigos repetidos con `409 Conflict`. |
| `PUT` | `/api/products/:id` | Actualiza parcialmente un producto existente. Devuelve `404 Not Found` si no existe. |
| `DELETE` | `/api/products/:id` | Elimina y devuelve un producto existente. Devuelve `404 Not Found` si no existe. |

### Crear o actualizar un producto

El cuerpo JSON acepta estas propiedades:

```json
{
  "codigo": "A1234",
  "nombre": "Producto de ejemplo",
  "descripcion": "Descripción opcional",
  "precio": 99.9,
  "stock": 10
}
```

- `codigo`: obligatorio, texto de exactamente 5 caracteres y único.
- `nombre`: obligatorio, texto.
- `descripcion`: texto opcional.
- `precio`: obligatorio y numérico.
- `stock`: numérico opcional; su valor predeterminado es `0`.
- `disponible`: no se envía al crear o actualizar; su valor predeterminado es `true`.

Las validaciones fallidas devuelven `400 Bad Request` con una propiedad
`errors` que contiene el campo y el mensaje correspondiente.



El backend permite solicitudes CORS desde `http://localhost:5173`, que es la
dirección de desarrollo del frontend.
