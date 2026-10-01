import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';

function FormularioEdicion({ registro, onActualizar, onCancelar }) {
    const [nombre, setNombre] = useState(registro.nombre);
    const [email, setEmail] = useState(registro.email);
    const [edad, setEdad] = useState(registro.edad);
    const [error, setError] = useState('');
    const [idEditado, setIdEditado] = useState(registro.id);

    if (registro.id !== idEditado){
        setIdEditado(registro.id);
        setNombre(registro.nombre);
        setEmail(registro.email);
        setEdad(registro.edad);
    }

    const validarCampos = () => {

        const campos = [
            { valor: nombre, etiqueta: 'Nombre' },
            { valor: email, etiqueta: 'Email' },
            { valor: edad, etiqueta: 'Edad' },
        ];

        let mensaje = '';
        campos.forEach((campo) => {
            if (!campo.valor.trim()) {
                mensaje = `El campo "${campo.etiqueta}" es obligatorio`;
            }
        });
        return mensaje;
    };

    const manejarEnvio = (evento) => {
        evento.preventDefault();

        const mensajeError = validarCampos();
        if (mensajeError) {
            setError(mensajeError);
            return;
        }

        const registroActualizado = {
            ...registro,
            nombre,
            email,
            edad,
        };

        onActualizar(registroActualizado);
        setError('');
    };

    return (
        <Paper sx={{ p: 3, mb: 3 }} elevation={2}>
            <Typography variant="h6" sx={{ mb: 2 }}>
                Editar Invalido
            </Typography>

            {error && (
                <Alert severity="error" sx={{ mb: 2 }}>
                    {error}
                </Alert>
            )}

            <Box
                component="form"
                onSubmit={manejarEnvio}
                sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, alignItems: 'center' }}
            >
                <TextField
                    label="Nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    size="small"
                />
                <TextField
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    size="small"
                />
                <TextField
                    label="Edad"
                    type="number"
                    value={edad}
                    onChange={(e) => setEdad(e.target.value)}
                    size="small"
                    sx={{ width: 100 }}
                />
                <Button type="submit" variant="contained">
                    Guardar
                </Button>
                <Button variant="outlined" onClick={onCancelar}>
                    Cancelar
                </Button>
            </Box>
        </Paper>
    );
}

export default FormularioEdicion;