import test from 'ava'

/**
 * Library under test
 */

import toBitmexTimeframe from '../src/to-bitmex-timeframe'

test('1 turns into 1m', t => {
    t.is(toBitmexTimeframe('1'), '1m')
})

test('5 turns into 5m', t => {
    t.is(toBitmexTimeframe('5'), '5m')
})

test('1H turns into 1h', t => {
    t.is(toBitmexTimeframe('1H'), '1h')
})

test('1D turns into 1d', t => {
    t.is(toBitmexTimeframe('1D'), '1d')
})

test('return an error on any other timeframe inputs', t=> {
    const badInput = [
        '!!',
        '@#$@#%#$',
        'booger',
        'squish',
        'mo',
        '55',
        'm5',
        '..',
        '*',
        '4H'
    ]
    badInput.forEach((input) => {
        const error = t.throws(() => {
            toBitmexTimeframe(input)
        }, Error)
        t.is(error.name, 'ArgumentError')
    })
})
