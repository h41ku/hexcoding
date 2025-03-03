export const hexEncode = arrayBuffer => [ ...new Uint8Array(arrayBuffer) ]
    .map(b => b.toString(16).padStart(2, '0')).join('')

export const hexDecode = hexString => {
    const arrayBuffer = new ArrayBuffer(Math.floor(hexString.length / 2))
    const bytes = new Uint8Array(arrayBuffer)
    for (let i = 0, j = 0; i < hexString.length; i += 2, j ++) {
        bytes[j] = parseInt(
            hexString.charAt(i) + hexString.charAt(i + 1),
            16
        )
    }
    return arrayBuffer
}

export const utf8ToHex = utf8String => hexEncode(new TextEncoder().encode(utf8String).buffer)

export const hexToUtf8 = hexString => new TextDecoder().decode(new Uint8Array(hexDecode(hexString)))
