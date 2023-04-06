import React, { useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import animated from '@amcharts/amcharts4/themes/animated'

interface DataProps {
  dashboard: {
    group: Array<{
      totalValue: number
      averageValue: number
      year: number
      month: number
    }>
  }
}

const Chart = (data: DataProps) => {
  useEffect(() => {
    am4core.useTheme(animated)

    const chart = am4core.create('chartdiv', am4charts.XYChart)

    chart.data = data?.dashboard?.group
      ?.map((item) => ({
        category: item.month + '/' + item.year,
        value: item.totalValue,
        dateNumber: new Date(item.year, item.month - 1, 1).getTime(),
      }))
      .sort((a, b) => {
        return a.dateNumber - b.dateNumber
      })

    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    categoryAxis.dataFields.category = 'category'
    categoryAxis.renderer.grid.template.location = 0
    categoryAxis.renderer.minGridDistance = 60
    categoryAxis.tooltip.disabled = true

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.renderer.minWidth = 50
    valueAxis.min = 0
    valueAxis.cursorTooltipEnabled = false

    const series = chart.series.push(new am4charts.ColumnSeries())
    series.sequencedInterpolation = true
    series.dataFields.valueY = 'value'
    series.dataFields.categoryX = 'category'
    series.tooltipText = '[{categoryX}: bold]{valueY}[/]'
    series.columns.template.strokeWidth = 0

    series.tooltip.pointerOrientation = 'vertical'

    series.columns.template.column.cornerRadiusTopLeft = 10
    series.columns.template.column.cornerRadiusTopRight = 10
    series.columns.template.column.fillOpacity = 0.8

    // on hover, make corner radiuses bigger
    const hoverState = series.columns.template.column.states.create('hover')
    hoverState.properties.cornerRadiusTopLeft = 0
    hoverState.properties.cornerRadiusTopRight = 0

    hoverState.properties.fillOpacity = 1

    series.columns.template.adapter.add('fill', function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index)
    })

    const paretoValueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    paretoValueAxis.renderer.opposite = true
    paretoValueAxis.min = 0
    paretoValueAxis.max = 100
    paretoValueAxis.strictMinMax = true
    paretoValueAxis.renderer.grid.template.disabled = true
    paretoValueAxis.numberFormatter = new am4core.NumberFormatter()
    paretoValueAxis.numberFormatter.numberFormat = "#'%'"
    paretoValueAxis.cursorTooltipEnabled = false

    const paretoSeries = chart.series.push(new am4charts.LineSeries())
    paretoSeries.dataFields.valueY = 'pareto'
    paretoSeries.dataFields.categoryX = 'category'
    paretoSeries.yAxis = paretoValueAxis
    paretoSeries.tooltipText = "pareto: {valueY.formatNumber('#.0')}%[/]"
    paretoSeries.bullets.push(new am4charts.CircleBullet())
    paretoSeries.strokeWidth = 2
    paretoSeries.stroke = new am4core.InterfaceColorSet().getFor(
      'alternativeBackground',
    )
    paretoSeries.strokeOpacity = 0.5

    // Cursor
    chart.cursor = new am4charts.XYCursor()
    chart.cursor.behavior = 'panX'
    chart.scrollbarX = new am4core.Scrollbar()

    return () => {
      chart.dispose()
    }
  }, [data])

  return <div id="chartdiv" style={{ width: '100%', height: '500px' }}></div>
}

export default Chart
