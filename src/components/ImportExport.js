import React from 'react';
import {
  Box,
  Button,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';

const ImportExport = () => {
  const handleImport = () => {
    // In a real application, this would open a file picker
    console.log('Importing data...');
  };

  const handleExport = (format) => {
    // In a real application, this would trigger a file download
    console.log('Exporting data in format:', format);
  };

  const exportFormats = [
    {
      name: 'CSV',
      description: 'Export data as comma-separated values',
    },
    {
      name: 'JSON',
      description: 'Export data in JSON format',
    },
    {
      name: 'Excel',
      description: 'Export data as Excel spreadsheet',
    },
  ];

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h5" gutterBottom>
        Import/Export Data
      </Typography>

      <Paper sx={{ mb: 3, p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Import Data
        </Typography>
        <Button variant="contained" color="primary" onClick={handleImport}>
          Import Data File
        </Button>
      </Paper>

      <Paper>
        <Typography variant="h6" sx={{ p: 2, pb: 1 }}>
          Export Data
        </Typography>
        <List>
          {exportFormats.map((format, index) => (
            <React.Fragment key={format.name}>
              <ListItem>
                <ListItemText
                  primary={format.name}
                  secondary={format.description}
                />
                <Button
                  variant="outlined"
                  onClick={() => handleExport(format.name)}
                >
                  Export
                </Button>
              </ListItem>
              {index < exportFormats.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default ImportExport;
