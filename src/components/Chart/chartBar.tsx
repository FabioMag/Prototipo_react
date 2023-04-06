import React, { useEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

const BarChart = () => {
    useEffect(() => {
        am4core.useTheme(am4themes_animated);

        let chart = am4core.create('myBarChart', am4charts.XYChart);

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

        let series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.categoryX = 'category';
        series.dataFields.valueY = 'value';
        series.columns.template.tooltipText = '{categoryX}: [bold]{valueY}[/]';
        series.columns.template.width = am4core.percent(95);
        series.columns.template.fill = am4core.color('#8BC34A');
        series.columns.template.stroke = am4core.color('#8BC34A');
        series.columns.template.strokeWidth = 1;
        series.columns.template.column.cornerRadiusTop = 10;

        // Define as cores das colunas com base no índice
        let colors = ['#8BC34A', '#2196F3', '#FFC107', '#795548', '#E91E63', '#9C27B0'];
        series.columns.template.adapter.add('fill', function (fill, target) {
            let color = colors[target.dataItem.index];
            return color || fill;
        });
        series.columns.template.adapter.add('stroke', function (stroke, target) {
            let color = colors[target.dataItem.index];
            return color || stroke;
        });

        chart.cursor = new am4charts.XYCursor();
    }, []);

    return (
        <div>
            <div id="myBarChart" style={{ width: '100%', height: '500px' }}></div>
        </div>
    );
};

export default BarChart;
