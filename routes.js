const express = require("express");
const stripefuncs = require("./functions");

const router = express.Router();

router.get("/", async (req, res) => {
  console.log(req.query.url);
  url = req.query.url;
  if (!url) {
    res.send({ error: "url not found" });
    return;
  }
  [pk, urlx] = await stripefuncs.getStripePK(url);
  if (!pk) {
    res.send({ error: "unknown error" });
    return;
  }
  amount = await stripefuncs.getAmountDue(urlx, pk);
  email = await stripefuncs.getCustomerEmail(urlx, pk);
  cs = await stripefuncs.getCheckoutSession(urlx, pk);
  curr = await stripefuncs.getCheckoutCurrency(urlx, pk);
  res.send({
    pk: pk,
    amount: amount,
    email: email,
    checkout: cs,
    currency: curr,
  });
  return;
});

module.exports = router;
