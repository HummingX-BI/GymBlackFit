# Gym Black

Sitio estático del gimnasio Gym Black, ubicado en San Martín de las Pirámides, Estado de México.

## Levantar en local

Dado que el proyecto utiliza módulos de JavaScript (`type="module"`) y variables de CSS compartidas, es necesario levantar un servidor HTTP local para poder previsualizarlo correctamente (evitando bloqueos de CORS con el protocolo `file://`).

Ejecuta el siguiente comando en la raíz del proyecto:

```bash
python3 -m http.server
```

O si utilizas Node.js:
```bash
npx serve .
```

Luego, abre `http://localhost:8000` (o el puerto que te indique la terminal) en tu navegador.

## Configuración y Datos

Toda la información clave del gimnasio está centralizada en `data/contenido.json`. Si necesitas modificar precios, horarios, teléfono o redes sociales, hazlo únicamente en ese archivo. Los enlaces a WhatsApp se actualizan automáticamente leyendo la información de este JSON.

**Nota:** Los precios que se despliegan en el HTML (estático) deben mantenerse sincronizados con `data/contenido.json`.

## Elementos Pendientes de Confirmar

Los siguientes elementos deben ser validados y actualizados con el cliente:

1. **Dirección exacta:** Actualmente dice `PENDIENTE_CONFIRMAR` en el objeto JSON y requiere un ajuste fino en el sitio (en HTML aparece como "Av. 16 de Septiembre Nte. 16, San Martín Centro").
2. **Número de WhatsApp:** Configurado como `PENDIENTE_NUMERO`. Los botones no funcionarán hasta que se provea un número de 10 dígitos (ej. `5512345678`).
3. **Nombre del coach de Box:** Verificar si "Emilio 'Chipocle' Venegas" es correcto.
4. **Fotografías reales:** Reemplazar las descripciones de fotos por imágenes del gimnasio.

## Imágenes Requeridas

El HTML esperará las siguientes imágenes en la carpeta `img/` cuando se incorporen (rutas sugeridas):

- `img/hero/hero-bg.jpg`
- `img/instalaciones/pesas.jpg`
- `img/instalaciones/cardio.jpg`
- `img/clases/box.jpg`
- `img/texturas/noise.png`
- `img/og/og-image.jpg` (Imagen para compartir por redes sociales)

## Build para Producción

En esta etapa el proyecto carga múltiples archivos CSS a través de `@import`. Para un entorno de producción de mayor tráfico, se recomienda agregar un bundler como Vite o configurar `postcss-import` para concatenar y minificar el CSS, reduciendo las peticiones en cascada.
