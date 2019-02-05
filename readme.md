# to-bitmex-timeframe [![Build status](https://travis-ci.org/strong-roots-capital/to-bitmex-timeframe.svg?branch=master)](https://travis-ci.org/strong-roots-capital/to-bitmex-timeframe) [![npm version](https://img.shields.io/npm/v/to-bitmex-timeframe.svg)](https://npmjs.org/package/to-bitmex-timeframe) [![codecov](https://codecov.io/gh/strong-roots-capital/to-bitmex-timeframe/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/to-bitmex-timeframe)

> Convert a TradingView timeframe to a BitMEX timeframe

## Install

``` shell
npm install to-bitmex-timeframe
```

## Use

``` typescript
import toBitmexTimeframe from 'to-bitmex-timeframe'

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
