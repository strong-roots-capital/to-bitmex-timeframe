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
export default function toBitmexTimeframe(timeframe: string): '1m' | '5m' | '1h' | '1d' {
    ow(timeframe, ow.string.oneOf(['1', '5', '1H', '1D']))

    let result: '1m' | '5m' | '1h' | '1d' = '1m'
    if (timeframe === '1') {
       result = '1m'
    } else if (timeframe === '5') {
        result = '5m'
    } else if (timeframe === '1H') {
        result = '1h'
    } else if (timeframe === '1D') {
        result = '1d'
    }
    return result
}
