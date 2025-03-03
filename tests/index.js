import { hexEncode, hexDecode, utf8ToHex, hexToUtf8 } from '../src/index.js'
import { assert, passTest } from './UnitTest.js'

function testIncompleteStrings() {

    const samples = {
		')': '29a',
		'': 'a',
		'': ''
    }

    for (let sample in samples) {
		const encodedString = samples[sample]
		const decodedString = hexToUtf8(encodedString)
		assert(decodedString, sample, 'A0')
    }
}

function testEncodingStrings() {

    const samples = {
		'Abc': '416263',
		'()=>[]': '28293d3e5b5d',
		'Привет!': 'd09fd180d0b8d0b2d0b5d18221',
    }

    for (let sample in samples) {
		const encodedString = utf8ToHex(sample)
		assert(encodedString, samples[sample], 'A0')
		const decodedString = hexToUtf8(encodedString)
		assert(decodedString, sample, 'A1')
    }
}

function testEncodingBytes() {

    const n = 1024
    const sample = []

    for (let i = 0; i < n; i ++) {
		sample.push(i % 255)
		const encodedString = hexEncode(new Uint8Array(sample).buffer)
		assert(encodedString.length, sample.length * 2, 'A0')
		const decodedBytes = Array.from(new Uint8Array(hexDecode(encodedString)))
		assert(sample.join(','), decodedBytes.join(','), 'A1')
    }
}

passTest(testEncodingStrings)
passTest(testEncodingBytes)
passTest(testIncompleteStrings)
