var count_email_domains = function (emails, urls) {
  /* Approach:
        - Initialize domains with empty array
        - Extract domain from emails and urls and append to domains array 
        */
  let domains = [];

  // Traverse emails and remove characters before the domain
  // Append the remaining characters to domains
  emails.filter((el) => {
    domains.push(el.split("@")[1]);
  });

  // Traverse urls and remove characters before the domain
  // Append the remaining characters to domains
  urls.filter((el) => {
    domains.push(el.split("www.")[1]);
  });

  // Traverse domains and add prefix to each domain
  let prefix_domain = [];
  domains.filter((domain) => {
    if (urls.includes("www." + domain)) prefix_domain.push("www." + domain);
  });

  // Get object key count
  let obj = [];
  prefix_domain.forEach((domain) => {
    if (obj[domain]) return obj[domain]++;
    return (obj[domain] = 1);
  });

  // Reduce key count by 1
  let domain_count = [];
  Object.entries(obj).forEach(([k, v]) => {
    domain_count.push(k, v - 1);
  });

  return domain_count; // [ 'www.a.com': 2, 'www.b.com': 1, 'www.c.com': 0 ]
};
// invoke the function
console.log(
  count_email_domains(
    ["foo@a.com", "bar@a.com", "baz@b.com", "qux@d.com"],
    ["www.a.com", "www.b.com", "www.c.com"]
  )
);

// Multi Search: Given a string band an array of smaller strings T, design a method to search b for
// each small string in T.
// T = {"is", "ppi", "hi", "sis", "i", "ssippi"}
// b = "mississippi"

// Missing Two: You are given an array with all the numbers from 1 to N appearing exactly once,
// except for one number that is missing. How can you find the missing number in O(N) time and
// 0( 1) space? What if there were two numbers missing?