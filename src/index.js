/*
 * LightningChartJS example that showcases creation and styling of radial-gauge.
 */
// Import LightningChartJS
const lcjs = require('@arction/lcjs')

// Extract required parts from LightningChartJS.
const { lightningChart, GaugeChartTypes, Themes } = lcjs

// Initialize gauge
const gauge = lightningChart()
    .Gauge({
        // theme: Themes.darkGold
        type: GaugeChartTypes.Solid,
    })
    .setTitle('Annual sales goal')
    .setThickness(80)
    .setDataLabelFormatter(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }))
    .setAngleInterval(225, -45)

// Create slice
const slice = gauge
    .getDefaultSlice()
    .setInterval(0, 400000)
    .setValue(329000)
    // .setFillStyle(new SolidFill({ color: ColorRGBA(12, 213, 87) }))
    .setName('2019 sales')

// Add LegendBox and define the position in the chart
const legend = gauge
    .addLegendBox()
    // Dispose example UI elements automatically if they take too much space. This is to avoid bad UI on mobile / etc. devices.
    .setAutoDispose({
        type: 'max-width',
        maxWidth: 0.3,
    })

// Add gaugeChart to LegendBox
legend.add(gauge)
