/**
 * to-bitmex-timeframe
 * Convert a TradingView timeframe to a BitMEX timeframe
 */

import ow from 'ow'

/**
 * Convert a TradingView timeframe to a BitMEX timeframe.
 * Valid inputs are: '1', '5', '1H', '1D'.
 * @param timeframe - The TradingView timeframe to convert
 * @returns Representation of timeframe accepted by BitMEX API.
 */
export default function toBitmexTimeframe(timeframe: string): string {
    ow(timeframe, ow.string.oneOf(['1', '5', '1H', '1D']))

    let result = ''
    if (timeframe === '1') {
       result = '1m'
    } else if (timeframe === '5') {
        result = '5m'
    } else if (timeframe === '1H') {
        result = '1h'
    } else if (timeframe === '1D') {
        result = '1d'
    } else {
        throw new Error(`Could not translate given timeframe: ${timeframe}`)
    }
    return result
}
