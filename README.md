"# sevenSegmentDisplay - Conor Shortt #"

- Written using p5.js, p5.js is a JavaScript library which has draw and graphics functions.
- Each segment is either on or off (0 or 1). Taking an 8 bit number we can determine which
  segments should be on or off for numbers 0 - 9. Information taken from https://en.wikipedia.org/wiki/Seven-segment_display
- I chose the colour green, which is either multiplied by 0 or 1. If it is multiplied by 0 then
  the segment will lack colour, if multiplied by 1 it will remain at 255 and be coloured green.
- The array of 8-bit numbers is as follows 0x7E, 0x30, 0x6D, 0x79, 0x33, 0x5B, 0x5F, 0x70, 0x7F, 0x7B.
  By taking each of these hex numbers in binary form we can take each digit and pass it to the getColour
  function.
