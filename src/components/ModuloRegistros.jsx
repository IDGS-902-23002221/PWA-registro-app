import { useState } from 'react';
import Container from '@mui/material/Container';
import Header from './Header';
import Footer from './Footer';
import FormularioRegistro from './FormularioRegistro';
import TablaRegistros from './TablaRegistros';
import FormularioEdicion from './FormularioEdicion';
import DetalleUsuario from './DetalleUsuario'

function ModuloRegistros() {
  
  const [registros, setRegistros] = useState([]);
  //editar 
  const[editandoId, setEditandoId] = useState(null);
  // detalle 
  const [detalleId, setDetalleId] = useState(null);


  const agregarRegistro = (nuevoRegistro) => {
    setRegistros((registrosPrevios) => [...registrosPrevios, nuevoRegistro]);
  };

  const eliminarRegistro = (idAEliminar) => {
    setRegistros((registrosPrevios) =>
      registrosPrevios.filter((registro) => registro.id !== idAEliminar)
    );
  };

  const actualizarRegistro = (registroActualizado) => {
    
    setRegistros((registrosPrevios) => 
      
      registrosPrevios.map((registro) => 
        registro.id === registroActualizado.id ? registroActualizado : registro
      )
    );
    setEditandoId(null);   
  };

  const registroEnEdicion = registros.find((registro) => registro.id === editandoId);

  const registroDetalle = registros.find((registro) => registro.id === detalleId);


  return (
    <>
      <Header titulo="Modulo de invalidos" totalRegistros={registros.length} />
      <Container maxWidth="md">
        { registroEnEdicion ? (
          <FormularioEdicion
            registro={registroEnEdicion}
            onActualizar={actualizarRegistro}
            onCancelar={() => setEditandoId(null)}
          />
        ) : (
          <FormularioRegistro onAgregar={agregarRegistro}/>
        )}
        <TablaRegistros
          registros={registros}
          onEliminar={eliminarRegistro}
          onEditar={setEditandoId}
          onVerDetalle={setDetalleId}
        />

        <DetalleUsuario
          registro={registroDetalle}
          abierto={Boolean(registroDetalle)}
          onCerrar={() => setDetalleId(null)}
        />
      </Container>
      <Footer />
    </>
  );
}

export default ModuloRegistros;
