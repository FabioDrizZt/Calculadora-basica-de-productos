document.productoForm = (event) => {
  event.preventDefault()

  // Obtener valores del formulario
  const nombre = document.nombre.value
  const precio = parseFloat(document.precio.value)
  const cantidad = parseInt(document.cantidad.value)
  const categoria = document.categoria.value

  // Validar entrada
  if (!nombre || isNaN(precio) || isNaN(cantidad) || !categoria) {
    window.alert('Por favor, complete todos los campos correctamente')
    return
  }

  // Calcular subtotal
  const subtotal = precio * cantidad

  // Calcular descuento basado en cantidad
  let descuento = 0
  if (cantidad >= 10) {
    descuento = subtotal * 0.1 // 10% de descuento
  } else if (cantidad >= 5) {
    descuento = subtotal * 0.05 // 5% de descuento
  }

  // Calcular impuesto basado en categoría
  let impuesto = 0
  switch (categoria) {
    case 'electronica':
      impuesto = subtotal * 0.16 // 16% de impuesto
      break
    case 'alimentos':
      impuesto = subtotal * 0.04 // 4% de impuesto
      break
    case 'ropa':
      impuesto = subtotal * 0.08 // 8% de impuesto
      break
    case 'hogar':
      impuesto = subtotal * 0.12 // 12% de impuesto
      break
  }

  // Calcular total
  const total = subtotal - descuento + impuesto

  // Mostrar resultados
  document.resultados.innerHTML = `
            <h2>Resumen de la Compra</h2>
            <p><strong>Producto:</strong> ${nombre}</p>
            <p><strong>Precio unitario:</strong> $${precio.toFixed(2)}</p>
            <p><strong>Cantidad:</strong> ${cantidad}</p>
            <p><strong>Subtotal:</strong> $${subtotal.toFixed(2)}</p>
            <p><strong>Descuento:</strong> $${descuento.toFixed(2)}</p>
            <p><strong>Impuesto (${categoria}):</strong> $${impuesto.toFixed(2)}</p>
            <p><strong>Total:</strong> $${total.toFixed(2)}</p>
        `

  // Limpiar formulario
  window.form.reset()
}
