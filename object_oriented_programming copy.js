var arr = {
  accounts: [
    {
      label: "Income",
      item_name: "commission from services offered",
    },
    {
      label: "Income",
      item_name: "consultancy / professional services",
    },
    {
      label: "Expense",
      item_name: "rent",
    },
    {
      label: "Expense",
      item_name: "salaries",
    },
    {
      label: "Expense",
      item_name: "utilities",
    },
    {
      label: "Non Current Asset",
      item_name: "motor vehicle",
    },
    {
      label: "Non Current Asset",
      item_name: "machinery",
    },
    {
      label: "Non Current Asset",
      item_name: "land",
    },
    {
      label: "Non Current Asset",
      item_name: "building",
    },
    {
      label: "Current Asset",
      item_name: "computer and equipment",
    },
    {
      label: "Current Asset",
      item_name: "liquid assets",
    },
    {
      label: "Non Current Liability",
      item_name: "long-term loan",
    },
    {
      label: "Current Liability",
      item_name: "short-term loan",
    },
    {
      label: "Equity",
      item_name: "equity",
    },
    {
      label: "Draw Cash",
      item_name: "draw cash",
    },
  ],
};

// Return Distinct labels:
function labels() {
  return this.accounts.reduce((seed, current) => {
    return Object.assign(seed, {
      [current.label]: current,
    });
  }, {});
}
// invoke the function
console.log(labels());
