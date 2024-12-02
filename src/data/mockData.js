export const tables = {
  customers: {
    name: 'Customers',
    records: 15000,
    columns: ['ID', 'Name', 'Email', 'Phone', 'Address'],
    data: [
      { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', address: '123 Main St' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '098-765-4321', address: '456 Oak Ave' },
      // More data would be added here
    ]
  },
  orders: {
    name: 'Orders',
    records: 12000,
    columns: ['Order ID', 'Customer ID', 'Product', 'Amount', 'Date'],
    data: [
      { id: 1, customerId: 1, product: 'Laptop', amount: 999.99, date: '2024-01-15' },
      { id: 2, customerId: 2, product: 'Phone', amount: 699.99, date: '2024-01-16' },
    ]
  },
  products: {
    name: 'Products',
    records: 5000,
    columns: ['Product ID', 'Name', 'Category', 'Price', 'Stock'],
    data: [
      { id: 1, name: 'Laptop Pro', category: 'Electronics', price: 1299.99, stock: 50 },
      { id: 2, name: 'Smartphone X', category: 'Electronics', price: 799.99, stock: 100 },
    ]
  },
  employees: {
    name: 'Employees',
    records: 3000,
    columns: ['ID', 'Name', 'Department', 'Position', 'Salary'],
    data: [
      { id: 1, name: 'Alice Johnson', department: 'Sales', position: 'Manager', salary: 75000 },
      { id: 2, name: 'Bob Wilson', department: 'IT', position: 'Developer', salary: 85000 },
    ]
  },
  inventory: {
    name: 'Inventory',
    records: 4000,
    columns: ['ID', 'Product ID', 'Location', 'Quantity', 'Last Updated'],
    data: [
      { id: 1, productId: 1, location: 'Warehouse A', quantity: 100, lastUpdated: '2024-01-15' },
      { id: 2, productId: 2, location: 'Warehouse B', quantity: 150, lastUpdated: '2024-01-16' },
    ]
  },
  suppliers: {
    name: 'Suppliers',
    records: 1000,
    columns: ['ID', 'Name', 'Contact', 'Country', 'Rating'],
    data: [
      { id: 1, name: 'Tech Supplies Inc', contact: 'contact@techsupplies.com', country: 'USA', rating: 4.5 },
      { id: 2, name: 'Global Parts Ltd', contact: 'info@globalparts.com', country: 'UK', rating: 4.8 },
    ]
  },
  transactions: {
    name: 'Transactions',
    records: 2000,
    columns: ['ID', 'Order ID', 'Amount', 'Status', 'Date'],
    data: [
      { id: 1, orderId: 1, amount: 999.99, status: 'Completed', date: '2024-01-15' },
      { id: 2, orderId: 2, amount: 699.99, status: 'Pending', date: '2024-01-16' },
    ]
  },
  shipping: {
    name: 'Shipping',
    records: 1500,
    columns: ['ID', 'Order ID', 'Carrier', 'Status', 'Tracking'],
    data: [
      { id: 1, orderId: 1, carrier: 'FedEx', status: 'Delivered', tracking: 'FX123456789' },
      { id: 2, orderId: 2, carrier: 'UPS', status: 'In Transit', tracking: 'UP987654321' },
    ]
  },
  categories: {
    name: 'Categories',
    records: 500,
    columns: ['ID', 'Name', 'Description', 'Parent Category'],
    data: [
      { id: 1, name: 'Electronics', description: 'Electronic devices and accessories', parentCategory: null },
      { id: 2, name: 'Computers', description: 'Desktop and laptop computers', parentCategory: 'Electronics' },
    ]
  },
  reviews: {
    name: 'Reviews',
    records: 500,
    columns: ['ID', 'Product ID', 'Customer ID', 'Rating', 'Comment'],
    data: [
      { id: 1, productId: 1, customerId: 1, rating: 5, comment: 'Excellent product!' },
      { id: 2, productId: 2, customerId: 2, rating: 4, comment: 'Good value for money' },
    ]
  },
  returns: {
    name: 'Returns',
    records: 300,
    columns: ['ID', 'Order ID', 'Reason', 'Status', 'Date'],
    data: [
      { id: 1, orderId: 1, reason: 'Defective', status: 'Approved', date: '2024-01-20' },
      { id: 2, orderId: 2, reason: 'Wrong Size', status: 'Pending', date: '2024-01-21' },
    ]
  },
  warranties: {
    name: 'Warranties',
    records: 200,
    columns: ['ID', 'Product ID', 'Duration', 'Terms', 'Status'],
    data: [
      { id: 1, productId: 1, duration: '2 years', terms: 'Standard coverage', status: 'Active' },
      { id: 2, productId: 2, duration: '1 year', terms: 'Limited coverage', status: 'Active' },
    ]
  },
};

export const sampleQueries = [
  {
    name: 'Top Selling Products',
    query: 'SELECT p.name, COUNT(o.id) as sales_count FROM products p JOIN orders o ON p.id = o.product_id GROUP BY p.id ORDER BY sales_count DESC LIMIT 10',
    description: 'Shows the top 10 selling products'
  },
  {
    name: 'Customer Orders Summary',
    query: 'SELECT c.name, COUNT(o.id) as order_count, SUM(o.amount) as total_spent FROM customers c JOIN orders o ON c.id = o.customer_id GROUP BY c.id',
    description: 'Summary of orders and spending by customer'
  },
  {
    name: 'Low Stock Alert',
    query: 'SELECT name, stock FROM products WHERE stock < 20 ORDER BY stock ASC',
    description: 'Products with low stock (less than 20 units)'
  }
];
