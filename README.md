Counter challenge 

HTML:

Full HTML code
https://github.com/witzakr/Counter/blob/0cccb461409870052af6a46092892ab12c9c5074/index.html#L1-L16

- These are the elements that will be modified using JavaScript
https://github.com/witzakr/Counter/blob/0cccb461409870052af6a46092892ab12c9c5074/index.html#L11-L14


CSS:

Full CSS code
https://github.com/witzakr/Counter/blob/0cccb461409870052af6a46092892ab12c9c5074/styles.css#L1-L49

- Modyfing the way text looks, making sure it will be visible while put on each other.
https://github.com/witzakr/Counter/blob/0cccb461409870052af6a46092892ab12c9c5074/styles.css#L14-L34

- Modyfing the way text looks, making sure it will be visible while put on each other.
https://github.com/witzakr/Counter/blob/0cccb461409870052af6a46092892ab12c9c5074/styles.css#L36-L49


JavaScript

FULL JavaScript code:
https://github.com/witzakr/Counter/blob/0cccb461409870052af6a46092892ab12c9c5074/script.js#L1-L61
- Loading DOM content before executing
https://github.com/witzakr/Counter/blob/0cccb461409870052af6a46092892ab12c9c5074/script.js#L1
- Selecting elements form the domain that will be modified using JS, h3 is a counter and p is the text hello world
https://github.com/witzakr/Counter/blob/0cccb461409870052af6a46092892ab12c9c5074/script.js#L10-L12
- Initializing variables
https://github.com/witzakr/Counter/blob/0cccb461409870052af6a46092892ab12c9c5074/script.js#L10-L12
  - var counter value sets the counter to 0
  - var translastions creates an array that will store translations from API in the later stages
  - var TranslationIndex will start from index 0 and keep track of the current translation
Getting data from API
- The JSON list:
  ### Translations

  - **English**: "Hello World"
  - **Spanish**: "Hola Mundo"
  - **French**: "Bonjour le monde"
  - **German**: "Hallo Welt"
  - **Italian**: "Ciao mondo"
  - **Portuguese**: "Olá Mundo"
  - **Russian**: "Привет, мир"
  - **Chinese (Simplified)**: "你好，世界"
  - **Japanese**: "こんにちは世界"
  - **Arabic**: "مرحبا بالعالم"
- Fetching data from API function
  https://github.com/witzakr/Counter/blob/0cccb461409870052af6a46092892ab12c9c5074/script.js#L16-L25
