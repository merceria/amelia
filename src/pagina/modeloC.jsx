import React from 'react';
import '../assets/MC/styles.css';
import dte from '../assets/MC/DTE.jpg';
import ER from '../assets/MC/ER.png';
import DFD from '../assets/MC/DFD.png';

export default function MC() {
  return (
    <div className="container modelo-comportamiento">
      <div className="row">
        <header className="poo-header">
          <h1 className="poo-main-title">Modelo de Comportamiento</h1>
        </header>
      </div>

      <div className="row mb-4">
        <div className="col-12">
          <div className="card shadow-sm border-0">
            <div className="card-header bg-gradient">
              <h2 className="h4 mb-0">
                <i className="bi bi-diagram-3-fill me-2"></i>
                Diagrama de Flujo de Datos
              </h2>
            </div>
            <div className="card-body">
              <div className="diagram-placeholder text-center p-5">
                <img src={DFD} className="img-fluid diagram-image" alt="Diagrama de Flujo de Datos" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-12">
          <div className="card shadow-sm border-0">
            <div className="card-header bg-gradient">
              <h2 className="h4 mb-0">
                <i className="bi bi-arrow-left-right me-2"></i>
                Diagrama de Transición de Estados
              </h2>
            </div>
            <div className="card-body">
              <div className="card-body text-center">
                <img src={dte} className="img-fluid rounded shadow-sm" alt="Diagrama de Transición de Estados" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-12">
          <div className="card shadow-sm border-0">
            <div className="card-header bg-gradient">
              <h2 className="h4 mb-0">
                <i className="bi bi-diagram-3 me-2"></i>
                Diagrama Entidad-Relación
              </h2>
            </div>
            <div className="card-body">
              <div className="diagram-placeholder text-center p-5">
                <img src={ER} className="img-fluid diagram-image" alt="Diagrama Entidad-Relación" />
              </div>
              <div className="diagram-info mt-4 p-3">
                <h5 className="text-primary-custom">
                  Diccionario de Datos
                </h5>
                <div class="container">
        <div class="table-section">
            <h2 class="table-title">Usuario</h2>
            <div class="table-responsive">
                <table class="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Atributo</th>
                            <th>Tipo</th>
                            <th>Dominio</th>
                            <th>Nulo</th>
                            <th>Regla</th>
                            <th>Descripción</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>id</strong></td>
                            <td><span class="badge-type">Int</span></td>
                            <td>&gt;0</td>
                            <td>No</td>
                            <td><span class="badge-rule">Único</span></td>
                            <td>Identificador del usuario</td>
                        </tr>
                        <tr>
                            <td><strong>nombre</strong></td>
                            <td><span class="badge-type">String</span></td>
                            <td>20</td>
                            <td>No</td>
                            <td>—</td>
                            <td>Nombre</td>
                        </tr>
                        <tr>
                            <td><strong>apellido</strong></td>
                            <td><span class="badge-type">String</span></td>
                            <td>50</td>
                            <td>No</td>
                            <td>—</td>
                            <td>Apellido Paterno</td>
                        </tr>
                        <tr>
                            <td><strong>correo</strong></td>
                            <td><span class="badge-type">String</span></td>
                            <td>100</td>
                            <td>No</td>
                            <td><span class="badge-rule">Único</span> <span class="badge-rule">Válido</span></td>
                            <td>Correo de Acceso</td>
                        </tr>
                        <tr>
                            <td><strong>password</strong></td>
                            <td><span class="badge-type">String (hash)</span></td>
                            <td>—</td>
                            <td>No</td>
                            <td><span class="badge-rule">Seguridad</span></td>
                            <td>Hash de contraseña</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="table-section">
            <h2 class="table-title">Cliente</h2>
            <div class="table-responsive">
                <table class="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Atributo</th>
                            <th>Tipo</th>
                            <th>Dominio/Formato</th>
                            <th>Nulo</th>
                            <th>Regla</th>
                            <th>Descripción</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>metodoPago</strong></td>
                            <td><span class="badge-type">String</span></td>
                            <td>Opciones (Físico, QR, Transferencia…)</td>
                            <td>No</td>
                            <td>—</td>
                            <td>Preferencia del cliente</td>
                        </tr>
                        <tr>
                            <td><strong>dirección</strong></td>
                            <td><span class="badge-type">String</span></td>
                            <td>calle/nro/zona/ciudad</td>
                            <td>Si</td>
                            <td>—</td>
                            <td>Dirección de envío</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="table-section">
            <h2 class="table-title">Vendedor</h2>
            <div class="table-responsive">
                <table class="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Atributo</th>
                            <th>Tipo</th>
                            <th>Dominio/Formato</th>
                            <th>Nulo</th>
                            <th>Regla</th>
                            <th>Descripción</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>sueldo</strong></td>
                            <td><span class="badge-type">Double</span></td>
                            <td>&gt;=0</td>
                            <td>Si</td>
                            <td>—</td>
                            <td>Sueldo Mensual</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="table-section">
            <h2 class="table-title">Producto</h2>
            <div class="table-responsive">
                <table class="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Atributo</th>
                            <th>Tipo</th>
                            <th>Dominio/Formato</th>
                            <th>Nulo</th>
                            <th>Regla</th>
                            <th>Descripción</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>idProducto</strong></td>
                            <td><span class="badge-type">String</span></td>
                            <td>[A-Z0-9]</td>
                            <td>No</td>
                            <td><span class="badge-rule">Único</span> <span class="badge-rule">Inmutable</span></td>
                            <td>Llave identificadora del hilado</td>
                        </tr>
                        <tr>
                            <td><strong>nombre</strong></td>
                            <td><span class="badge-type">String</span></td>
                            <td>120</td>
                            <td>No</td>
                            <td>—</td>
                            <td>Nombre comercial</td>
                        </tr>
                        <tr>
                            <td><strong>precio</strong></td>
                            <td><span class="badge-type">Double</span></td>
                            <td>&gt;0</td>
                            <td>No</td>
                            <td><span class="badge-rule">Con 2 decimales</span></td>
                            <td>Precio de venta</td>
                        </tr>
                        <tr>
                            <td><strong>stock</strong></td>
                            <td><span class="badge-type">Int</span></td>
                            <td>&gt;=0</td>
                            <td>No</td>
                            <td>—</td>
                            <td>Unidades disponibles</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="table-section">
            <h2 class="table-title">Compra</h2>
            <div class="table-responsive">
                <table class="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Atributo</th>
                            <th>Tipo</th>
                            <th>Dominio/Formato</th>
                            <th>Nulo</th>
                            <th>Regla</th>
                            <th>Descripción</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>idCompra</strong></td>
                            <td><span class="badge-type">String</span></td>
                            <td>UUID</td>
                            <td>No</td>
                            <td><span class="badge-rule">Único</span></td>
                            <td>Identificador de compra</td>
                        </tr>
                        <tr>
                            <td><strong>estado</strong></td>
                            <td><span class="badge-type">String</span></td>
                            <td>Opciones (creada, pagada, facturada, enviada, cancelada)</td>
                            <td>No</td>
                            <td><span class="badge-rule">Transacciones válidas</span></td>
                            <td>Estado actual de la compra</td>
                        </tr>
                        <tr>
                            <td><strong>detalleCompras</strong></td>
                            <td><span class="badge-type">List&lt;Detalle_Compra&gt;</span></td>
                            <td>1 … n</td>
                            <td>No</td>
                            <td><span class="badge-rule">Composición</span></td>
                            <td>Ítems de la compra</td>
                        </tr>
                        <tr>
                            <td><strong>total</strong></td>
                            <td><span class="badge-type">Double</span></td>
                            <td>&gt;=0</td>
                            <td>No</td>
                            <td><span class="badge-rule">Subtotales</span></td>
                            <td>Importe total</td>
                        </tr>
                        <tr>
                            <td><strong>fecha</strong></td>
                            <td><span class="badge-type">Date</span></td>
                            <td>DD/MM/AAAA</td>
                            <td>No</td>
                            <td>—</td>
                            <td>Fecha de creación</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="table-section">
            <h2 class="table-title">Detalle_Compra</h2>
            <div class="table-responsive">
                <table class="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Atributo</th>
                            <th>Tipo</th>
                            <th>Dominio/Formato</th>
                            <th>Nulo</th>
                            <th>Regla</th>
                            <th>Descripción</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>producto</strong></td>
                            <td><span class="badge-type">Producto (ref)</span></td>
                            <td>existente</td>
                            <td>No</td>
                            <td>—</td>
                            <td>Producto comprado</td>
                        </tr>
                        <tr>
                            <td><strong>cantidad</strong></td>
                            <td><span class="badge-type">Int</span></td>
                            <td>&gt;=1</td>
                            <td>No</td>
                            <td><span class="badge-rule">Entero positivo</span></td>
                            <td>Unidades del producto</td>
                        </tr>
                        <tr>
                            <td><strong>precio</strong></td>
                            <td><span class="badge-type">Double</span></td>
                            <td>&gt;0</td>
                            <td>No</td>
                            <td><span class="badge-rule">Snapshot al agregar</span></td>
                            <td>Precio unitario</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="table-section">
            <h2 class="table-title">Pago</h2>
            <div class="table-responsive">
                <table class="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Atributo</th>
                            <th>Tipo</th>
                            <th>Dominio/Formato</th>
                            <th>Nulo</th>
                            <th>Regla</th>
                            <th>Descripción</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>idPago</strong></td>
                            <td><span class="badge-type">String</span></td>
                            <td>UUID</td>
                            <td>No</td>
                            <td><span class="badge-rule">Único</span></td>
                            <td>Identificador de pago</td>
                        </tr>
                        <tr>
                            <td><strong>monto</strong></td>
                            <td><span class="badge-type">Double</span></td>
                            <td>&gt;=0</td>
                            <td>No</td>
                            <td><span class="badge-rule">= Compra.total()</span></td>
                            <td>Importe cobrado</td>
                        </tr>
                        <tr>
                            <td><strong>fecha</strong></td>
                            <td><span class="badge-type">Date</span></td>
                            <td>DD/MM/AAAA</td>
                            <td>No</td>
                            <td>—</td>
                            <td>Fecha de confirmación</td>
                        </tr>
                        <tr>
                            <td><strong>estado</strong></td>
                            <td><span class="badge-type">Boolean</span></td>
                            <td>true/false</td>
                            <td>No</td>
                            <td><span class="badge-rule">true = confirmado</span> <span class="badge-rule">false = pendiente</span></td>
                            <td>Estado del pago</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="table-section">
            <h2 class="table-title">Factura</h2>
            <div class="table-responsive">
                <table class="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Atributo</th>
                            <th>Tipo</th>
                            <th>Dominio/Formato</th>
                            <th>Nulo</th>
                            <th>Regla</th>
                            <th>Descripción</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>idFactura</strong></td>
                            <td><span class="badge-type">String</span></td>
                            <td>UUID</td>
                            <td>No</td>
                            <td><span class="badge-rule">Único</span></td>
                            <td>Identificador interno</td>
                        </tr>
                        <tr>
                            <td><strong>nroFactura</strong></td>
                            <td><span class="badge-type">Int</span></td>
                            <td>secuencia</td>
                            <td>No</td>
                            <td><span class="badge-rule">Nomenclatura clara</span></td>
                            <td>Número fiscal</td>
                        </tr>
                        <tr>
                            <td><strong>fechaEmision</strong></td>
                            <td><span class="badge-type">Date</span></td>
                            <td>DD/MM/AAAA</td>
                            <td>No</td>
                            <td><span class="badge-rule">&gt;= fecha de pago</span></td>
                            <td>Fecha de emisión</td>
                        </tr>
                        <tr>
                            <td><strong>total</strong></td>
                            <td><span class="badge-type">Double</span></td>
                            <td>&gt;=0</td>
                            <td>No</td>
                            <td><span class="badge-rule">= Compra.total()</span></td>
                            <td>Importe facturado</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="table-section">
            <h2 class="table-title">Proveedor</h2>
            <div class="table-responsive">
                <table class="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Atributo</th>
                            <th>Tipo</th>
                            <th>Dominio/Formato</th>
                            <th>Nulo</th>
                            <th>Regla</th>
                            <th>Descripción</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>idProveedor</strong></td>
                            <td><span class="badge-type">String</span></td>
                            <td>UUID</td>
                            <td>No</td>
                            <td><span class="badge-rule">Único</span></td>
                            <td>Identificador del proveedor</td>
                        </tr>
                        <tr>
                            <td><strong>razonSocial</strong></td>
                            <td><span class="badge-type">String</span></td>
                            <td>200 chars</td>
                            <td>No</td>
                            <td>—</td>
                            <td>Nombre legal</td>
                        </tr>
                        <tr>
                            <td><strong>correo</strong></td>
                            <td><span class="badge-type">String</span></td>
                            <td>100 chars</td>
                            <td>No</td>
                            <td><span class="badge-rule">Correo válido</span></td>
                            <td>Contacto principal</td>
                        </tr>
                        <tr>
                            <td><strong>catalogo</strong></td>
                            <td><span class="badge-type">List&lt;Producto&gt;</span></td>
                            <td>0 … n</td>
                            <td>Si</td>
                            <td><span class="badge-rule">Agregación</span></td>
                            <td>Productos que ofrece</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="table-section">
            <h2 class="table-title">Pedido_Proveedor</h2>
            <div class="table-responsive">
                <table class="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Atributo</th>
                            <th>Tipo</th>
                            <th>Dominio/Formato</th>
                            <th>Nulo</th>
                            <th>Regla</th>
                            <th>Descripción</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>idPedidoProveedor</strong></td>
                            <td><span class="badge-type">String</span></td>
                            <td>UUID</td>
                            <td>No</td>
                            <td><span class="badge-rule">Único</span></td>
                            <td>Identificador del pedido</td>
                        </tr>
                        <tr>
                            <td><strong>fecha</strong></td>
                            <td><span class="badge-type">Date</span></td>
                            <td>DD/MM/AAAA</td>
                            <td>No</td>
                            <td>—</td>
                            <td>Fecha de creación</td>
                        </tr>
                        <tr>
                            <td><strong>proveedor</strong></td>
                            <td><span class="badge-type">Proveedor (ref)</span></td>
                            <td>Proveedor existente</td>
                            <td>No</td>
                            <td>—</td>
                            <td>Proveedor elegido</td>
                        </tr>
                        <tr>
                            <td><strong>detallePedido</strong></td>
                            <td><span class="badge-type">List&lt;Detalle_Pedido_Proveedor&gt;</span></td>
                            <td>1 … n</td>
                            <td>No</td>
                            <td><span class="badge-rule">Composición</span></td>
                            <td>Items solicitados</td>
                        </tr>
                        <tr>
                            <td><strong>estado</strong></td>
                            <td><span class="badge-type">String</span></td>
                            <td>Opcional (Pendiente, enviado, recibido, cancelado)</td>
                            <td>No</td>
                            <td><span class="badge-rule">Transiciones válidas</span></td>
                            <td>Estado del pedido</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="table-section">
            <h2 class="table-title">Detalle_Pedido_Proveedor</h2>
            <div class="table-responsive">
                <table class="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Atributo</th>
                            <th>Tipo</th>
                            <th>Dominio/Formato</th>
                            <th>Nulo</th>
                            <th>Regla</th>
                            <th>Descripción</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>producto</strong></td>
                            <td><span class="badge-type">Producto (ref)</span></td>
                            <td>Producto existente</td>
                            <td>No</td>
                            <td>—</td>
                            <td>Producto solicitado</td>
                        </tr>
                        <tr>
                            <td><strong>precio</strong></td>
                            <td><span class="badge-type">Double</span></td>
                            <td>&gt;=0</td>
                            <td>Si</td>
                            <td>—</td>
                            <td>Costo del proveedor</td>
                        </tr>
                        <tr>
                            <td><strong>cantidad</strong></td>
                            <td><span class="badge-type">Int</span></td>
                            <td>&gt;= 1</td>
                            <td>No</td>
                            <td><span class="badge-rule">Entero positivo</span></td>
                            <td>Unidades pedidas</td>
                        </tr>
                        <tr>
                            <td><strong>descuento</strong></td>
                            <td><span class="badge-type">Double</span></td>
                            <td>0 … 100 %</td>
                            <td>Si</td>
                            <td><span class="badge-rule">Valor porcentual</span></td>
                            <td>Descuento aplicado</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}