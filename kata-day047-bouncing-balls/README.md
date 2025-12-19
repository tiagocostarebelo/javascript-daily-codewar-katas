# Bouncing Balls - `bouncingBalls(h, b, w)`
The challenge: 
A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known.

He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

His mother looks out of a window 1.5 meters from the ground.

How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing)?

Three conditions must be met for a valid experiment:
- Float parameter "h" in meters must be greater than 0
- Float parameter "bounce" must be greater than 0 and less than 1
- Float parameter "window" must be less than h.
- If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

Note:
The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

**Problem source:** [Codewars - Bouncing Balls](https://www.codewars.com/kata/5544c7a5cb454edb3c000047)

## Examples

```
bouncingBalls(2.0, 0.5, 1) // -> Result: 1
```

## Approach

This challenge is a simulation problem where the ball’s height changes over time, and we need to count how many times it passes in front of the window.

Before doing any calculations, the input must be validated. The experiment is only valid if:

- h > 0
- 0 < bounce < 1
- window < h

If any of these conditions fail, the function immediately returns -1.

Once the input is valid, the logic is:

1. Start with the initial height h.
2. While the ball’s height is strictly greater than the window height:
- Count one pass when the ball is falling.
- Apply the bounce (h *= bounce) to calculate the new height.
- If the new height is still above the window, count another pass when the ball is bouncing up.
3. Repeat until the ball no longer reaches above the window.

This loop-based approach mirrors the real behavior of the ball and keeps the logic easy to follow.


## Final Solution

```
function bouncingBall(h,  bounce,  window) {
  if( h <= 0 || bounce >= 1 || bounce <= 0 || window >= h) return -1
  let seen = 0;
  
  while(h > window){
    seen += 1
    h *= bounce
    if(h > window) seen += 1
  }
  
  return seen;
}
```

## Edge Cases & Validation

- Counts only passes where the ball’s height is strictly greater than the window.
- Handles cases where the ball is seen only once (initial drop).
- Works with floating-point values for height, bounce, and window.
- Ensures the loop terminates because the height decreases on every bounce.


## Tests - How to run

This repo includes a minimal test file using Jest

```
npm install
```

```
npm test
```
