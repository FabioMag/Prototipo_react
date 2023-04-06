import React, { useEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

const RadarChart = () => {
    useEffect(() => {
        am4core.useTheme(am4themes_animated);

        let chart = am4core.create('myRadarChart', am4charts.RadarChart);
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

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

        let series = chart.series.push(new am4charts.RadarSeries());
        series.dataFields.categoryX = 'category';
        series.dataFields.valueY = 'value';
        series.strokeWidth = 3;
        series.tooltipText = '{categoryX}: [bold]{valueY}[/]';

        chart.cursor = new am4charts.RadarCursor();
    }, []);

    return (
        <div>
            <div id="myRadarChart" style={{ width: '100%', height: '500px' }}></div>
        </div>
    );
};

export default RadarChart;
