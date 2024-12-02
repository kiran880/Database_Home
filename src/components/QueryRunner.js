import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Alert,
  CircularProgress,
} from '@mui/material';
import { sampleQueries, tables } from '../data/mockData';

const QueryRunner = () => {
  const [query, setQuery] = useState('');
  const [queryResult, setQueryResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Function to parse and execute the SQL-like query
  const executeQuery = (queryString) => {
    setLoading(true);
    setError(null);
    setQueryResult(null);

    try {
      // Simple SQL parser for demonstration
      const queryLower = queryString.toLowerCase();
      
      // Parse SELECT queries
      if (queryLower.startsWith('select')) {
        const fromIndex = queryLower.indexOf('from');
        if (fromIndex === -1) throw new Error('Invalid SELECT query: Missing FROM clause');
        
        const tableName = queryLower.substring(fromIndex + 5).trim().split(' ')[0];
        const table = Object.entries(tables).find(([key, value]) => 
          key.toLowerCase() === tableName || value.name.toLowerCase() === tableName
        );

        if (!table) throw new Error(`Table "${tableName}" not found`);

        // For demonstration, we'll return all data from the table
        const result = {
          columns: table[1].columns,
          rows: table[1].data
        };

        setQueryResult(result);
      }
      // Parse COUNT queries
      else if (queryLower.includes('count(*)')) {
        const fromIndex = queryLower.indexOf('from');
        if (fromIndex === -1) throw new Error('Invalid COUNT query: Missing FROM clause');
        
        const tableName = queryLower.substring(fromIndex + 5).trim().split(' ')[0];
        const table = Object.entries(tables).find(([key, value]) => 
          key.toLowerCase() === tableName || value.name.toLowerCase() === tableName
        );

        if (!table) throw new Error(`Table "${tableName}" not found`);

        setQueryResult({
          columns: ['COUNT(*)'],
          rows: [{ 'COUNT(*)': table[1].records }]
        });
      }
      // Add support for JOIN operations
      else if (queryLower.includes('join')) {
        throw new Error('JOIN operations are not implemented in this demo');
      }
      else {
        throw new Error('Only SELECT and COUNT queries are supported in this demo');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRunQuery = () => {
    if (!query.trim()) {
      setError('Please enter a query');
      return;
    }
    executeQuery(query);
  };

  const renderQueryResult = () => {
    if (!queryResult) return null;

    return (
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              {queryResult.columns.map((column, index) => (
                <TableCell key={index}>{column}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {queryResult.rows.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {Object.values(row).map((cell, cellIndex) => (
                  <TableCell key={cellIndex}>{cell}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h5" gutterBottom>
        Query Runner
      </Typography>

      <Paper sx={{ p: 2, mb: 2 }}>
        <TextField
          fullWidth
          multiline
          rows={4}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter your SQL query here..."
          sx={{ mb: 2 }}
          error={!!error}
          helperText={error}
        />
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleRunQuery}
          disabled={loading}
          startIcon={loading && <CircularProgress size={20} color="inherit" />}
        >
          {loading ? 'Running Query...' : 'Run Query'}
        </Button>
      </Paper>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {queryResult && (
        <Alert severity="success" sx={{ mb: 2 }}>
          Query executed successfully!
        </Alert>
      )}

      {renderQueryResult()}

      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Sample Queries
      </Typography>
      <Paper>
        <List>
          {sampleQueries.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem 
                button 
                onClick={() => setQuery(item.query)}
                sx={{ flexDirection: 'column', alignItems: 'flex-start' }}
              >
                <ListItemText
                  primary={item.name}
                  secondary={item.description}
                />
                <Typography 
                  variant="body2" 
                  component="pre" 
                  sx={{ 
                    mt: 1, 
                    p: 1, 
                    backgroundColor: '#f5f5f5', 
                    width: '100%',
                    borderRadius: 1,
                    overflowX: 'auto'
                  }}
                >
                  {item.query}
                </Typography>
              </ListItem>
              {index < sampleQueries.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default QueryRunner;
