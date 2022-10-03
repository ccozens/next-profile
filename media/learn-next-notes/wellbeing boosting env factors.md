

- reduce is the swiss army knife of arrays, but hard to understand where you get the result.
- chaining array methods often easier (esp for debugging / readability).

What's input and output?

If both arrays, map (or filter, depending on function).  
If input array and output object: reduce (think about reducing data down into an object or single variable).  
If counting: reduce (reducing to single number).  
If have data derived from an array, typically in a different form: reduce.

Performance - yes, chaining slower. But unless 10000s of items, who cares? If heavy work, likely best done in database anyway. Or cache and return return value instead of looping over again.

perf.link?


Loop over and do something with each value:  forEach.  
Orrr more often map or reduce.

forIn allows easily iterating over properties in an object.