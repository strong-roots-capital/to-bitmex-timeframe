
to-bitmex-timeframe [![Build status](https://travis-ci.org/strong-roots-capital/to-bitmex-timeframe.svg?branch=master)](https://travis-ci.org/strong-roots-capital/to-bitmex-timeframe) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/to-bitmex-timeframe.svg?style=flat)](https://www.npmjs.com/package/@strong-roots-capital/to-bitmex-timeframe) [![codecov](https://codecov.io/gh/strong-roots-capital/to-bitmex-timeframe/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/to-bitmex-timeframe)
===================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================

> Convert a TradingView timeframe to a BitMEX timeframe

Install
-------

```shell
npm install @strong-roots-capital/to-bitmex-timeframe
```

Use
---

```typescript
import toBitmexTimeframe from '@strong-roots-capital/to-bitmex-timeframe'

toBitmexTimeframe('1')
//=> '1m'

toBitmexTimeframe('5')
//=> '5m'

toBitmexTimeframe('1H')
//=> '1h'

toBitmexTimeframe('1D')
//=> '1d'

toBitmextimeframe('1W')
//=> { ArgumentError: Expected string to be one of `["1","5","1H","1D"]`, got `1W` }
```

Note: for convenience in conjunction with `bitmex-node`, the type of return type is `'1m' \| '5m' \| '1h' \| '1d'`.

Related
-------

*   [bitmex-node](https://www.npmjs.com/package/bitmex-node)

## Index

### Functions

* [toBitmexTimeframe](#tobitmextimeframe)

---

## Functions

<a id="tobitmextimeframe"></a>

###  toBitmexTimeframe

▸ **toBitmexTimeframe**(timeframe: *`string`*): "1m" \| "5m" \| "1h" \| "1d"

*Defined in [to-bitmex-timeframe.ts:15](https://github.com/strong-roots-capital/to-bitmex-timeframe/blob/897d33a/src/to-bitmex-timeframe.ts#L15)*

Convert a TradingView timeframe to a BitMEX timeframe. Valid inputs are: '1', '5', '1H', '1D'.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| timeframe | `string` |  The TradingView timeframe to convert |

**Returns:** "1m" \| "5m" \| "1h" \| "1d"
Representation of timeframe accepted by BitMEX API.

___

