import React, { useEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

const PieChart = () => {
    useEffect(() => {
        am4core.useTheme(am4themes_animated);
        let chart = am4core.create('myPieChart', am4charts.PieChart);

        chart.data = [
            { category: 'Poupança', value: 1200 },
            { category: 'SELIC', value: 1500 },
            { category: 'CDB', value: 1000 },
            { category: 'LCI', value: 1800 },
            { category: 'Renda Fixa', value: 2000 },
            { category: 'Mazzotini', value: 2300 },
        ];

        chart.innerRadius = am4core.percent(50);

        let series = chart.series.push(new am4charts.PieSeries());
        series.dataFields.value = 'value';
        series.dataFields.category = 'category';
        series.slices.template.stroke = am4core.color('#fff');
        series.slices.template.strokeWidth = 2;
        series.slices.template.strokeOpacity = 1;
        series.labels.template.disabled = true;
        series.ticks.template.disabled = true;
        series.colors.step = 2;

        series.slices.template.adapter.add('fill', function (fill, target) {
            return chart.colors.getIndex(target.dataItem.index);
        });

        chart.legend = new am4charts.Legend();
        chart.legend.position = 'right';
        chart.legend.valueLabels.template.disabled = true;
        chart.legend.itemContainers.template.paddingTop = 5;
        chart.legend.itemContainers.template.paddingBottom = 5;

        chart.cursor = new am4charts.Cursor();
    }, []);

    return (
        <div>
            <div id="myPieChart" style={{ width: '100%', height: '500px' }}></div>
        </div>
    );
};

export default PieChart;
