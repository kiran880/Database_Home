import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Grid,
  Paper,
  Container,
} from "@mui/material";
import { tables } from "./data/mockData";
import TableViewer from "./components/TableViewer";
import QueryRunner from "./components/QueryRunner";
import ImportExport from "./components/ImportExport";
import ReportGenerator from "./components/ReportGenerator";

const App = () => {
  const [currentView, setCurrentView] = useState("home");
  const [selectedTable, setSelectedTable] = useState(null);

  const renderContent = () => {
    switch (currentView) {
      case "tables":
        return selectedTable ? (
          <TableViewer tableData={tables[selectedTable]} />
        ) : (
          <Grid container spacing={3}>
            {Object.entries(tables).map(([key, table]) => (
              <Grid item xs={12} sm={6} md={4} key={key}>
                <Paper
                  elevation={3}
                  sx={{ p: 2, cursor: "pointer" }}
                  onClick={() => setSelectedTable(key)}
                >
                  <Typography variant="h6">{table.name}</Typography>
                  <Typography variant="body2">
                    Records: {table.records}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        );
      case "queries":
        return <QueryRunner />;
      case "import-export":
        return <ImportExport />;
      case "reports":
        return <ReportGenerator />;
      default:
        return (
          <>
            <Typography variant="h4" gutterBottom>
              Welcome to Your Database
            </Typography>
            <Typography variant="body1" gutterBottom>
              Manage your data, run queries, and generate reports efficiently.
            </Typography>

            <Grid container spacing={3} sx={{ marginTop: 2 }}>
              <Grid item xs={12} sm={6} md={3}>
                <Paper
                  elevation={3}
                  sx={{ padding: 2, textAlign: "center", cursor: "pointer" }}
                  onClick={() => setCurrentView("tables")}
                >
                  <Typography variant="h6">View Tables</Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ marginTop: 2 }}
                  >
                    Go
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Paper
                  elevation={3}
                  sx={{ padding: 2, textAlign: "center", cursor: "pointer" }}
                  onClick={() => setCurrentView("queries")}
                >
                  <Typography variant="h6">Run Queries</Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ marginTop: 2 }}
                  >
                    Go
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Paper
                  elevation={3}
                  sx={{ padding: 2, textAlign: "center", cursor: "pointer" }}
                  onClick={() => setCurrentView("import-export")}
                >
                  <Typography variant="h6">Import/Export Data</Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ marginTop: 2 }}
                  >
                    Go
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Paper
                  elevation={3}
                  sx={{ padding: 2, textAlign: "center", cursor: "pointer" }}
                  onClick={() => setCurrentView("reports")}
                >
                  <Typography variant="h6">Generate Reports</Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ marginTop: 2 }}
                  >
                    Go
                  </Button>
                </Paper>
              </Grid>
            </Grid>

            <Box sx={{ marginTop: 4 }}>
              <Typography variant="h5">Database Overview</Typography>
              <Typography variant="body2" sx={{ marginTop: 1 }}>
                Total Tables: {Object.keys(tables).length} | Records:{" "}
                {Object.values(tables).reduce(
                  (sum, table) => sum + table.records,
                  0
                )}{" "}
                | Last Updated: Today
              </Typography>
            </Box>
          </>
        );
    }
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Database Homepage
          </Typography>
          <Button
            color="inherit"
            onClick={() => {
              setCurrentView("home");
              setSelectedTable(null);
            }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              setCurrentView("tables");
              setSelectedTable(null);
            }}
          >
            Tables
          </Button>
          <Button
            color="inherit"
            onClick={() => setCurrentView("queries")}
          >
            Queries
          </Button>
          <Button
            color="inherit"
            onClick={() => setCurrentView("import-export")}
          >
            Import/Export
          </Button>
          <Button
            color="inherit"
            onClick={() => setCurrentView("reports")}
          >
            Reports
          </Button>
        </Toolbar>
      </AppBar>

      <Container>
        <Box sx={{ padding: 4 }}>{renderContent()}</Box>
      </Container>

      <Box
        sx={{
          textAlign: "center",
          padding: 2,
          backgroundColor: "#f5f5f5",
          marginTop: 4,
        }}
      >
        <Typography variant="body2">
          2024 Your Database. All rights reserved.
        </Typography>
      </Box>
    </div>
  );
};

export default App;
