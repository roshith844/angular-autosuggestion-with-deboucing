var express = require('express');
var router = express.Router();
const items = [
  'Apple',
  'Apricot',
  'Banana',
  'Blackberry',
  'Blueberry',
  'Cherry',
  'Coconut',
  'Grapes',
  'Mango',
  'Orange',
  'Papaya',
  'Pineapple',
  'Strawberry'
];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/autosuggest", async (req, res)=>{
  const query = req.query.q || '';

  if (!query) {
    return res.json([]);
  }

  const result = items.filter(item =>
    item.toLowerCase().startsWith(query.toLowerCase())
  );

  // Simulate API latency
  setTimeout(() => {
    res.json(result);
  }, 300);
})

module.exports = router;
