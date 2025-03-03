# hexcoding

Кодирование данных в шестнадцатеричном представлении.

## Установка

`npm install hexcoding`

## Использование

Библиотека предоставляет в виде ECMAScript модуля. Пример использования:

```javascript
import { hexEncode, hexDecode, utf8ToHex, hexToUtf8 } from 'hexcoding'

hexString = hexEncode(arrayBuffer) // кодировать буфер в строку
arrayBuffer = hexDecode(hexString) // декодировать строку в буфер

hexString = utf8ToHex(utf8String) // кодировать utf-8 строку в hex строку
utf8String = hexToUtf8(hexString) // декодировать hex строку в utf-8 строку
```

## Описание API

Библиотека предоставляет следующие функции:

- `hexEncode(arrayBuffer)` - кодировать буфер `arrayBuffer` в строку в шестнадцатеричном представлении, возвращает содержимое буфера, закодированное в виде строки в шестнадцатеричном представлении
- `hexDecode(hexString)` - декодировать строку `hexString` в двоичные данные, возвращает экземпляр класса `ArrayBuffer` с декодированными данными
- `utf8ToHex(utf8String)` - кодировать строку `utf8String` из кодировки `utf-8` в строку в шестнадцатеричном представлении, возвращает строку в шестнадцатеричном представлении
- `hexToUtf8(hexString)` - декодировать строку `hexString` в строку в `utf-8` кодировке, возвращает строку в `utf-8` кодировке
