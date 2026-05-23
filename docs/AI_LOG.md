# AI Usage

## Tool
Claude

## Log
Date: 14/05/2026
Purpose: Structuring Design_Specifications.md into a clean overview based on the specifications I gave Claude.
Outcome: Well structured Design_Specifications.md that is easy to work with.

Date: 14/05/2026
Purpose: Figma uses % for line-spacing, not px. Wanted to know how it's calculated by asking AI.
Outcome: AI gave me the formula to calculate these: letter spacing px divided by font size px multiplied by 100.

Date: 23/05/2026
Purpose: The card grid (originally: grid-template-columns: repeat(auto-fit, minmax(min(100%, 155px), 1fr))) resulted in 
more than 4 cards per row. I wanted to cap it at 4 cards per row only. I struggled with figuring out the appropriate 
formula for this in CSS, so I consulted AI for assistance.
Outcome: AI gave me the formula for capping columns at maximum 4 while keeping the responsive behaviour of my original line.
By calculating (100% - amount of gaps * 1 rem gap in my case) divided by 4 as the minimum column size.

I first learned the auto-fit, minmax trick from this video https://www.youtube.com/watch?v=8MrggH3yLH8