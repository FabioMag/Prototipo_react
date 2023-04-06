import React, { useEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

const LineChart = () => {
    useEffect(() => {
        am4core.useTheme(am4themes_animated);

        let chart = am4core.create('myLineChart', am4charts.XYChart);

        chart.data = [
            { category: 'Poupança', value: 1200 },
            { category: 'SELIC', value: 1500 },
            { category: 'CDB', value: 1000 },
            { category: 'LCI', value: 1800 },
            { category: 'Renda Fixa', value: 2000 },
            { category: 'Mazzotini', value: 2300 }
        ];

        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = 'category';
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.minGridDistance = 20;

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.renderer.minWidth = 50;

        let series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.categoryX = 'category';
        series.dataFields.valueY = 'value';
        series.strokeWidth = 3;
        series.tensionX = 0.8;

        let bullet = series.bullets.push(new am4charts.CircleBullet());
        bullet.circle.fill = am4core.color('#8BC34A');
        bullet.circle.stroke = am4core.color('#8BC34A');
        bullet.circle.strokeWidth = 1;
        bullet.tooltipText = '{categoryX}: [bold]{valueY}[/]';

        chart.cursor = new am4charts.XYCursor();
    }, []);

    return (
        <div>
            <div id="myLineChart" style={{ width: '100%', height: '500px' }}></div>
        </div>
    );
};

export default LineChart;
