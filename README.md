# Solid Gauge

This demo application belongs to the set of examples for LightningChart JS, data visualization library for JavaScript.

LightningChart JS is entirely GPU accelerated and performance optimized charting library for presenting massive amounts of data. It offers an easy way of creating sophisticated and interactive charts and adding them to your website or web application.

The demo can be used as an example or a seed project. Local execution requires the following steps:

- Make sure that relevant version of [Node.js](https://nodejs.org/en/download/) is installed
- Open the project folder in a terminal:

        npm install              # fetches dependencies
        npm start                # builds an application and starts the development server

- The application is available at *http://localhost:8080* in your browser, webpack-dev-server provides hot reload functionality.

### Description

This example shows solid gauge chart.

The chart can be created with a simple line of code.

```javascript
// Create a new Gauge chart.
const gauge = lightningChart().Gauge({ type: GaugeChartTypes.Solid })
```

After creating the Gauge Chart the value for it can be set simply.

```javascript
gauge
    // Get default slice, this is the only slice there is and it should be manipulated to set wanted value to the Gauge Chart.
    .getDefaultSlice()
    // Set start and end values.
    .setInterval(0, 400000)
    // Set the displayed value.
    .setValue(329000)
```

### API links

* Gauge chart types: [GaugeChartTypes][],
* RGBA color factory: [ColorRGBA][],
* Solid gauge: [SolidGauge][],
* Solid LineStyle: [SolidLine][],
* Solid FillStyle: [SolidFill][]


### Support

If you notice an error in the example code, please open an issue on [GitHub][0] repository of the entire example.

Official [API documentation][1] can be found on [Arction][2] website.

If the docs and other materials do not solve your problem as well as implementation help is needed, ask on [StackOverflow][3] (tagged lightningchart).

If you think you found a bug in the LightningChart JavaScript library, please contact support@arction.com.

Direct developer email support can be purchased through a [Support Plan][4] or by contacting sales@arction.com.

© Arction Ltd 2009-2019. All rights reserved.

[0]: https://github.com/Arction/
[1]: https://www.arction.com/lightningchart-js-api-documentation/
[2]: https://www.arction.com
[3]: https://stackoverflow.com/questions/tagged/lightningchart
[4]: https://www.arction.com/support-services/

[ColorRGBA]: https://www.arction.com/lightningchart-js-api-documentation/v1.0.0/globals.html#colorrgba
[GaugeChartTypes]: https://www.arction.com/lightningchart-js-api-documentation/v1.0.0/globals.html#gaugecharttypes
[SolidFill]: https://www.arction.com/lightningchart-js-api-documentation/v1.0.0/classes/solidfill.html
[SolidGauge]: https://www.arction.com/lightningchart-js-api-documentation/v1.0.0/classes/solidgauge.html
[SolidLine]: https://www.arction.com/lightningchart-js-api-documentation/v1.0.0/classes/solidline.html