/*
 * LightningChartJS example that showcases creation and styling of radial-gauge.
 */
// Import LightningChartJS
const lcjs = require('@arction/lcjs')

// Extract required parts from LightningChartJS.
const {
    lightningChart,
    GaugeChartTypes,
    SolidLine,
    SolidFill,
    ColorRGBA,
    UIOrigins 
} = lcjs

// Initialize gauge
const gauge = lightningChart().Gauge({ type: GaugeChartTypes.Solid })
    .setTitle('Annual sales goal')
    .setThickness(80)
    .setDataLabelFormater(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }))
    .setGaugeStrokeStyle(new SolidLine().setFillStyle(new SolidFill()).setThickness(1))
    .setAngleInterval(225, -45)

// Create slice
const slice = gauge
    .getDefaultSlice()
    .setInterval(0, 400000)
    .setValue(329000)
    .setFillStyle(new SolidFill({ color: ColorRGBA(12, 213, 87) }))
    .setName('2019 sales')

// Add LegendBox and define the position in the chart
const legend = gauge.addLegendBox()
.setPosition({ x: 0, y: 0 })
.setOrigin(UIOrigins.LeftBottom)
.setMargin({ top: 5, right: 5, bottom: 5, left: 5 })

// Add gaugeChart to LegendBox
legend.add(gauge)
