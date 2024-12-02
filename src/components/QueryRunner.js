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
} from '@mui/material';
import { sampleQueries } from '../data/mockData';

const QueryRunner = () => {
  const [query, setQuery] = useState('');

  const handleRunQuery = () => {
    // In a real application, this would send the query to a backend server
    console.log('Running query:', query);
  };

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h5" gutterBottom>
        Query Runner
      </Typography>
      <TextField
        fullWidth
        multiline
        rows={4}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter your SQL query here..."
        sx={{ mb: 2 }}
      />
      <Button variant="contained" color="primary" onClick={handleRunQuery}>
        Run Query
      </Button>

      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Sample Queries
      </Typography>
      <Paper>
        <List>
          {sampleQueries.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem button onClick={() => setQuery(item.query)}>
                <ListItemText
                  primary={item.name}
                  secondary={
                    <>
                      <Typography variant="body2" color="textSecondary">
                        {item.description}
                      </Typography>
                      <Typography variant="body2" component="pre" sx={{ mt: 1, backgroundColor: '#f5f5f5', p: 1 }}>
                        {item.query}
                      </Typography>
                    </>
                  }
                />
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
