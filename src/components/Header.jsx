import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AssignmentIcon from '@mui/icons-material/Assignment';

function Header({ titulo, totalRegistros }) {
  return (
    <AppBar position="static" sx={{ mb: 3 }}>
      <Toolbar>
        <AssignmentIcon sx={{ mr: 1 }} />
        <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
          {`${titulo} — ${totalRegistros} registro(s)`}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
