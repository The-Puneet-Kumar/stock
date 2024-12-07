const express = require('express');

const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());

// Endpoint 1: Calculate the Returns of the Stocks added
app.get('/calculate-returns', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let marketPrice = parseFloat(req.query.marketPrice);
  let quantity = parseFloat(req.query.quantity);

  let result = parseFloat((marketPrice - boughtAt) * quantity);
  res.send(result.toString());
});

// Endpoint 2: Calculate the Total Returns
app.get('/total-returns', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);

  let totalReturn = stock1 + stock2 + stock3 + stock4;
  res.send(totalReturn.toString());
});

//Endpoint 3: Calculate the Return Percentage

app.get('/calculate-return-percentage', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let returns = parseFloat(req.query.returns);
  let returnPercentage = (returns / boughtAt) * 100;
  res.send(returnPercentage.toString());
});

// Endpoint 4: Calculate the Total Return Percentage
app.get('/total-return-percentage', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);

  let totalReturnPercentage = stock1 + stock2 + stock3 + stock4;
  res.send(totalReturnPercentage.toString());
});

// Endpoint 5: Identify the Status of Stocks based on their Return Value
function stockStatus(returnPercentage) {
  if (returnPercentage > 0) {
    return 'Profit';
  } else {
    return 'Loss';
  }
}

app.get('/status', (req, res) => {
  let returnPercentage = parseFloat(req.query.returnPercentage);
  res.send(stockStatus(returnPercentage).toString());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
