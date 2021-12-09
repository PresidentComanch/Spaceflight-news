# Single Page Application with React.

[DEMO](https://presidentcomanch.github.io/codebridge-test-task/)

The following Figma low-fidelity prototype should be used as a basis: [link](http://url9962.codebridge.tech/ls/click?upn=-2FvC57-2FMAHhWp1AHf776h8ElBOsgL-2FFWKIV-2BROL2MfW11aZGYorUXE-2Fxw3gpmlKsSlBmYMZT9m7ZQWq-2BY-2BerG0yOKrzyR3b3mF2FQrYT-2Ff1RvRe584Z-2Fk9NvQxym-2FaNm-2B71QF_i75O1e91SdcqlIWG3MHcl08AHOFVhU2KGUsF-2BCed9f1vukI784mUqOmSeKPhZ5wFbUccxjwfDs-2BIjoADUB8VSgnKkrqwUpfga4OvdFb1dY-2Bh9JKHIazRAgSBbZEYQxuTDhkLzKeZnFB7CpZ4NAiIfdU7uVWMD-2BlVxZcGLekDc1NcoSngaJi1TU5YtPO5dR5PPGsyxJreuY8nZhj9HIOWlEw3vO71KDqaumtEdU82rbMkUWetufXuJkOpTdn8qaE-2Fc6m5HpjgRgB0SlZ-2BaYYdQSXyuPuW9aOwSJOcQJtdyWkofyAyvFv-2BB9Y4HS43trudZCc4ufMxXt7W4FNeXBDyoNlML-2BQS0KJ6rxgJ0-2FrbprA-3D).

Use any open API to get article names and descriptions. For example:

https://spaceflightnewsapi.net/
Home page should contain:

1. Cards with article titles and descriptions for 100 characters. The user can click on the card to go to an article page that contains the title and full description of the selected article.

2. A field to filter by keyword. The user enters keywords into the field and the system displays all articles containing at least one of the keywords in the name or/and description.

The priority of fields: (1) names; and (2) description. The article with one match in the name is higher than the article with one match in the description.

The matched keywords should be highlighted with yellow color.

What do we expect?

+ Please use TypeScript as the main language.
+ CSS preprocessors should be used.
+ Please use Material UI.
+ Showing an example of a custom hook will be a plus.
+ howing an example of state management will be a big plus.
