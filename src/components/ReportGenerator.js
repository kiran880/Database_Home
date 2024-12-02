import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from '@mui/material';

const ReportGenerator = () => {
  const [open, setOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState('');
  const [dateRange, setDateRange] = useState({
    start: '',
    end: '',
  });

  const reports = [
    {
      name: 'Sales Summary',
      description: 'Overview of sales performance including total revenue, top products, and growth trends',
    },
    {
      name: 'Inventory Status',
      description: 'Current inventory levels, low stock alerts, and inventory turnover metrics',
    },
    {
      name: 'Customer Analysis',
      description: 'Customer demographics, purchase patterns, and loyalty metrics',
    },
    {
      name: 'Financial Report',
      description: 'Revenue, expenses, profit margins, and financial forecasts',
    },
  ];

  const handleGenerateReport = () => {
    // In a real application, this would generate and download the report
    console.log('Generating report:', selectedReport, dateRange);
    setOpen(false);
  };

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h5" gutterBottom>
        Report Generator
      </Typography>

      <Paper>
        <List>
          {reports.map((report, index) => (
            <ListItem key={report.name}>
              <ListItemText
                primary={report.name}
                secondary={report.description}
              />
              <Button
                variant="outlined"
                onClick={() => {
                  setSelectedReport(report.name);
                  setOpen(true);
                }}
              >
                Generate
              </Button>
            </ListItem>
          ))}
        </List>
      </Paper>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Generate {selectedReport}</DialogTitle>
        <DialogContent>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel>Report Format</InputLabel>
            <Select
              value="pdf"
              label="Report Format"
            >
              <MenuItem value="pdf">PDF</MenuItem>
              <MenuItem value="excel">Excel</MenuItem>
              <MenuItem value="csv">CSV</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Start Date"
            type="date"
            value={dateRange.start}
            onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
            sx={{ mt: 2 }}
            fullWidth
            InputLabelProps={{ shrink: true }}
          />

          <TextField
            label="End Date"
            type="date"
            value={dateRange.end}
            onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
            sx={{ mt: 2 }}
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleGenerateReport} variant="contained">
            Generate
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ReportGenerator;
