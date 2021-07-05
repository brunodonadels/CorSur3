var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Departamentos_2 = new ol.format.GeoJSON();
var features_Departamentos_2 = format_Departamentos_2.readFeatures(json_Departamentos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamentos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamentos_2.addFeatures(features_Departamentos_2);
var lyr_Departamentos_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Departamentos_2, 
                style: style_Departamentos_2,
                interactive: true,
                title: '<img src="styles/legend/Departamentos_2.png" /> Departamentos'
            });
var format_PoblacinpordepartamentoINDEC_3 = new ol.format.GeoJSON();
var features_PoblacinpordepartamentoINDEC_3 = format_PoblacinpordepartamentoINDEC_3.readFeatures(json_PoblacinpordepartamentoINDEC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PoblacinpordepartamentoINDEC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoblacinpordepartamentoINDEC_3.addFeatures(features_PoblacinpordepartamentoINDEC_3);
var lyr_PoblacinpordepartamentoINDEC_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PoblacinpordepartamentoINDEC_3, 
                style: style_PoblacinpordepartamentoINDEC_3,
                interactive: true,
    title: 'Población por departamento (INDEC)<br />\
    <img src="styles/legend/PoblacinpordepartamentoINDEC_3_0.png" /> 35.645 - 50.000<br />\
    <img src="styles/legend/PoblacinpordepartamentoINDEC_3_1.png" /> 50.001 - 75.000<br />\
    <img src="styles/legend/PoblacinpordepartamentoINDEC_3_2.png" /> 75.001 - 127.450<br />\
    <img src="styles/legend/PoblacinpordepartamentoINDEC_3_3.png" /> 127.451 - 246.400<br />'
        });
var format_PEAINDEC_4 = new ol.format.GeoJSON();
var features_PEAINDEC_4 = format_PEAINDEC_4.readFeatures(json_PEAINDEC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEAINDEC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEAINDEC_4.addFeatures(features_PEAINDEC_4);
var lyr_PEAINDEC_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEAINDEC_4, 
                style: style_PEAINDEC_4,
                interactive: true,
    title: 'PEA (INDEC)<br />\
    <img src="styles/legend/PEAINDEC_4_0.png" /> 12.001 - 35.000<br />\
    <img src="styles/legend/PEAINDEC_4_1.png" /> 35.001 - 70.000<br />\
    <img src="styles/legend/PEAINDEC_4_2.png" /> 70.001 - 150.000<br />\
    <img src="styles/legend/PEAINDEC_4_3.png" /> 150.001 o más<br />'
        });
var format_ViviendasruralesINDEC_5 = new ol.format.GeoJSON();
var features_ViviendasruralesINDEC_5 = format_ViviendasruralesINDEC_5.readFeatures(json_ViviendasruralesINDEC_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ViviendasruralesINDEC_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ViviendasruralesINDEC_5.addFeatures(features_ViviendasruralesINDEC_5);
var lyr_ViviendasruralesINDEC_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ViviendasruralesINDEC_5, 
                style: style_ViviendasruralesINDEC_5,
                interactive: true,
    title: 'Viviendas rurales (INDEC)<br />\
    <img src="styles/legend/ViviendasruralesINDEC_5_0.png" /> 2.500 - 4.500<br />\
    <img src="styles/legend/ViviendasruralesINDEC_5_1.png" /> 4.501 - 6.500<br />\
    <img src="styles/legend/ViviendasruralesINDEC_5_2.png" /> 6.501 - 9.500<br />\
    <img src="styles/legend/ViviendasruralesINDEC_5_3.png" /> 9.501 o más<br />'
        });
var format_CabezasdeporcinosMAGyP_6 = new ol.format.GeoJSON();
var features_CabezasdeporcinosMAGyP_6 = format_CabezasdeporcinosMAGyP_6.readFeatures(json_CabezasdeporcinosMAGyP_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdeporcinosMAGyP_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdeporcinosMAGyP_6.addFeatures(features_CabezasdeporcinosMAGyP_6);
var lyr_CabezasdeporcinosMAGyP_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdeporcinosMAGyP_6, 
                style: style_CabezasdeporcinosMAGyP_6,
                interactive: true,
    title: 'Cabezas de porcinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_0.png" /> 22.500 - 27.500<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_1.png" /> 27.501 - 62.500<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_2.png" /> 62.501 - 165.000<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_3.png" /> 165.001 - 210.000<br />'
        });
var format_CabezasdeovinosMAGyP_7 = new ol.format.GeoJSON();
var features_CabezasdeovinosMAGyP_7 = format_CabezasdeovinosMAGyP_7.readFeatures(json_CabezasdeovinosMAGyP_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdeovinosMAGyP_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdeovinosMAGyP_7.addFeatures(features_CabezasdeovinosMAGyP_7);
var lyr_CabezasdeovinosMAGyP_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdeovinosMAGyP_7, 
                style: style_CabezasdeovinosMAGyP_7,
                interactive: true,
    title: 'Cabezas de ovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_0.png" /> 12.500 - 16.000<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_1.png" /> 16.001 - 28.000<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_2.png" /> 28.001 - 50.000<br />'
        });
var format_CabezasdecaprinosMAGyP_8 = new ol.format.GeoJSON();
var features_CabezasdecaprinosMAGyP_8 = format_CabezasdecaprinosMAGyP_8.readFeatures(json_CabezasdecaprinosMAGyP_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdecaprinosMAGyP_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdecaprinosMAGyP_8.addFeatures(features_CabezasdecaprinosMAGyP_8);
var lyr_CabezasdecaprinosMAGyP_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdecaprinosMAGyP_8, 
                style: style_CabezasdecaprinosMAGyP_8,
                interactive: true,
    title: 'Cabezas de caprinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_0.png" /> 1.250 - 2.000<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_1.png" /> 2.001 - 4.500<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_2.png" /> 4.501 - 6.000<br />'
        });
var format_CabezasdebovinosMAGyP_9 = new ol.format.GeoJSON();
var features_CabezasdebovinosMAGyP_9 = format_CabezasdebovinosMAGyP_9.readFeatures(json_CabezasdebovinosMAGyP_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdebovinosMAGyP_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdebovinosMAGyP_9.addFeatures(features_CabezasdebovinosMAGyP_9);
var lyr_CabezasdebovinosMAGyP_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdebovinosMAGyP_9, 
                style: style_CabezasdebovinosMAGyP_9,
                interactive: true,
    title: 'Cabezas de bovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_0.png" /> 200.000 - 300.000<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_1.png" /> 300.001 - 575.000<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_2.png" /> 575.001 - 680.000<br />'
        });
var format_HectreasdehortalizasINDEC_10 = new ol.format.GeoJSON();
var features_HectreasdehortalizasINDEC_10 = format_HectreasdehortalizasINDEC_10.readFeatures(json_HectreasdehortalizasINDEC_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdehortalizasINDEC_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdehortalizasINDEC_10.addFeatures(features_HectreasdehortalizasINDEC_10);
var lyr_HectreasdehortalizasINDEC_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdehortalizasINDEC_10, 
                style: style_HectreasdehortalizasINDEC_10,
                interactive: true,
    title: 'Hectáreas de hortalizas (INDEC)<br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_10_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_10_1.png" /> 1 - 15<br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_10_2.png" /> 260<br />'
        });
var format_HectreasdelegumbresINDEC_11 = new ol.format.GeoJSON();
var features_HectreasdelegumbresINDEC_11 = format_HectreasdelegumbresINDEC_11.readFeatures(json_HectreasdelegumbresINDEC_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdelegumbresINDEC_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdelegumbresINDEC_11.addFeatures(features_HectreasdelegumbresINDEC_11);
var lyr_HectreasdelegumbresINDEC_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdelegumbresINDEC_11, 
                style: style_HectreasdelegumbresINDEC_11,
                interactive: true,
    title: 'Hectáreas de legumbres (INDEC)<br />\
    <img src="styles/legend/HectreasdelegumbresINDEC_11_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdelegumbresINDEC_11_1.png" /> 1 - 115<br />\
    <img src="styles/legend/HectreasdelegumbresINDEC_11_2.png" /> Más de 116<br />'
        });
var format_HectreasdemazMAGyP_12 = new ol.format.GeoJSON();
var features_HectreasdemazMAGyP_12 = format_HectreasdemazMAGyP_12.readFeatures(json_HectreasdemazMAGyP_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdemazMAGyP_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdemazMAGyP_12.addFeatures(features_HectreasdemazMAGyP_12);
var lyr_HectreasdemazMAGyP_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdemazMAGyP_12, 
                style: style_HectreasdemazMAGyP_12,
                interactive: true,
    title: 'Hectáreas de maíz (MAGyP)<br />\
    <img src="styles/legend/HectreasdemazMAGyP_12_0.png" /> Menos de 130.000<br />\
    <img src="styles/legend/HectreasdemazMAGyP_12_1.png" /> 130.001 - 300.000<br />\
    <img src="styles/legend/HectreasdemazMAGyP_12_2.png" /> 300.001 o más<br />'
        });
var format_HectreasdetrigoMAGyP_13 = new ol.format.GeoJSON();
var features_HectreasdetrigoMAGyP_13 = format_HectreasdetrigoMAGyP_13.readFeatures(json_HectreasdetrigoMAGyP_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdetrigoMAGyP_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdetrigoMAGyP_13.addFeatures(features_HectreasdetrigoMAGyP_13);
var lyr_HectreasdetrigoMAGyP_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdetrigoMAGyP_13, 
                style: style_HectreasdetrigoMAGyP_13,
                interactive: true,
    title: 'Hectáreas de trigo (MAGyP)<br />\
    <img src="styles/legend/HectreasdetrigoMAGyP_13_0.png" /> 50.000 - 80.000<br />\
    <img src="styles/legend/HectreasdetrigoMAGyP_13_1.png" /> 80.001 - 200.000<br />\
    <img src="styles/legend/HectreasdetrigoMAGyP_13_2.png" /> 200.001 o más<br />'
        });
var format_HectreasdegirasolMAGyP_14 = new ol.format.GeoJSON();
var features_HectreasdegirasolMAGyP_14 = format_HectreasdegirasolMAGyP_14.readFeatures(json_HectreasdegirasolMAGyP_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdegirasolMAGyP_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdegirasolMAGyP_14.addFeatures(features_HectreasdegirasolMAGyP_14);
var lyr_HectreasdegirasolMAGyP_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdegirasolMAGyP_14, 
                style: style_HectreasdegirasolMAGyP_14,
                interactive: true,
    title: 'Hectáreas de girasol (MAGyP)<br />\
    <img src="styles/legend/HectreasdegirasolMAGyP_14_0.png" /> 185 - 500<br />\
    <img src="styles/legend/HectreasdegirasolMAGyP_14_1.png" /> 501 - 3.500<br />\
    <img src="styles/legend/HectreasdegirasolMAGyP_14_2.png" /> 3.501 - 7.500<br />\
    <img src="styles/legend/HectreasdegirasolMAGyP_14_3.png" /> 7.501 - 12.000<br />'
        });
var format_HectreasdesojaMAGyP_15 = new ol.format.GeoJSON();
var features_HectreasdesojaMAGyP_15 = format_HectreasdesojaMAGyP_15.readFeatures(json_HectreasdesojaMAGyP_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdesojaMAGyP_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdesojaMAGyP_15.addFeatures(features_HectreasdesojaMAGyP_15);
var lyr_HectreasdesojaMAGyP_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdesojaMAGyP_15, 
                style: style_HectreasdesojaMAGyP_15,
                interactive: true,
    title: 'Hectáreas de soja (MAGyP)<br />\
    <img src="styles/legend/HectreasdesojaMAGyP_15_0.png" /> 100.000 - 315.000<br />\
    <img src="styles/legend/HectreasdesojaMAGyP_15_1.png" /> 315.001 - 450.000<br />\
    <img src="styles/legend/HectreasdesojaMAGyP_15_2.png" /> 450.001 - 675.000<br />'
        });
var format_HectreasdemanMAGyP_16 = new ol.format.GeoJSON();
var features_HectreasdemanMAGyP_16 = format_HectreasdemanMAGyP_16.readFeatures(json_HectreasdemanMAGyP_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdemanMAGyP_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdemanMAGyP_16.addFeatures(features_HectreasdemanMAGyP_16);
var lyr_HectreasdemanMAGyP_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdemanMAGyP_16, 
                style: style_HectreasdemanMAGyP_16,
                interactive: true,
    title: 'Hectáreas de maní (MAGyP)<br />\
    <img src="styles/legend/HectreasdemanMAGyP_16_0.png" /> Menos de 11.000<br />\
    <img src="styles/legend/HectreasdemanMAGyP_16_1.png" /> 11.001 - 35.500<br />\
    <img src="styles/legend/HectreasdemanMAGyP_16_2.png" /> Más de 35.501<br />'
        });
var format_Capacitaciones2020difusin_17 = new ol.format.GeoJSON();
var features_Capacitaciones2020difusin_17 = format_Capacitaciones2020difusin_17.readFeatures(json_Capacitaciones2020difusin_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capacitaciones2020difusin_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capacitaciones2020difusin_17.addFeatures(features_Capacitaciones2020difusin_17);
var lyr_Capacitaciones2020difusin_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capacitaciones2020difusin_17, 
                style: style_Capacitaciones2020difusin_17,
                interactive: true,
                title: '<img src="styles/legend/Capacitaciones2020difusin_17.png" /> Capacitaciones 2020 (difusión)'
            });
var format_Capacitaciones2019_18 = new ol.format.GeoJSON();
var features_Capacitaciones2019_18 = format_Capacitaciones2019_18.readFeatures(json_Capacitaciones2019_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capacitaciones2019_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capacitaciones2019_18.addFeatures(features_Capacitaciones2019_18);
var lyr_Capacitaciones2019_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capacitaciones2019_18, 
                style: style_Capacitaciones2019_18,
                interactive: true,
    title: 'Capacitaciones 2019<br />\
    <img src="styles/legend/Capacitaciones2019_18_0.png" /> Difusion<br />\
    <img src="styles/legend/Capacitaciones2019_18_1.png" /> Tecnica<br />'
        });
var format_Capacitaciones2018_19 = new ol.format.GeoJSON();
var features_Capacitaciones2018_19 = format_Capacitaciones2018_19.readFeatures(json_Capacitaciones2018_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capacitaciones2018_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capacitaciones2018_19.addFeatures(features_Capacitaciones2018_19);
var lyr_Capacitaciones2018_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capacitaciones2018_19, 
                style: style_Capacitaciones2018_19,
                interactive: true,
    title: 'Capacitaciones 2018<br />\
    <img src="styles/legend/Capacitaciones2018_19_0.png" /> Difusion<br />\
    <img src="styles/legend/Capacitaciones2018_19_1.png" /> Tecnica<br />'
        });
var format_Capacitaciones2017_20 = new ol.format.GeoJSON();
var features_Capacitaciones2017_20 = format_Capacitaciones2017_20.readFeatures(json_Capacitaciones2017_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capacitaciones2017_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capacitaciones2017_20.addFeatures(features_Capacitaciones2017_20);
var lyr_Capacitaciones2017_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capacitaciones2017_20, 
                style: style_Capacitaciones2017_20,
                interactive: true,
    title: 'Capacitaciones 2017<br />\
    <img src="styles/legend/Capacitaciones2017_20_0.png" /> Concientizacion<br />\
    <img src="styles/legend/Capacitaciones2017_20_1.png" /> Difusion<br />\
    <img src="styles/legend/Capacitaciones2017_20_2.png" /> Tecnica<br />'
        });
var format_Localidades_21 = new ol.format.GeoJSON();
var features_Localidades_21 = format_Localidades_21.readFeatures(json_Localidades_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localidades_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localidades_21.addFeatures(features_Localidades_21);
var lyr_Localidades_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Localidades_21, 
                style: style_Localidades_21,
                interactive: true,
                title: '<img src="styles/legend/Localidades_21.png" /> Localidades'
            });
var format_PlantasyempresasmanCmaraArgdelman_22 = new ol.format.GeoJSON();
var features_PlantasyempresasmanCmaraArgdelman_22 = format_PlantasyempresasmanCmaraArgdelman_22.readFeatures(json_PlantasyempresasmanCmaraArgdelman_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlantasyempresasmanCmaraArgdelman_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlantasyempresasmanCmaraArgdelman_22.addFeatures(features_PlantasyempresasmanCmaraArgdelman_22);
var lyr_PlantasyempresasmanCmaraArgdelman_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PlantasyempresasmanCmaraArgdelman_22, 
                style: style_PlantasyempresasmanCmaraArgdelman_22,
                interactive: true,
                title: '<img src="styles/legend/PlantasyempresasmanCmaraArgdelman_22.png" /> Plantas y empresas maní (Cámara Arg. del maní)'
            });
var format_BERCrdobaSur_23 = new ol.format.GeoJSON();
var features_BERCrdobaSur_23 = format_BERCrdobaSur_23.readFeatures(json_BERCrdobaSur_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BERCrdobaSur_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BERCrdobaSur_23.addFeatures(features_BERCrdobaSur_23);
var lyr_BERCrdobaSur_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BERCrdobaSur_23, 
                style: style_BERCrdobaSur_23,
                interactive: true,
                title: '<img src="styles/legend/BERCrdobaSur_23.png" /> BER Córdoba Sur'
            });
var format_BERCrdobaSur_24 = new ol.format.GeoJSON();
var features_BERCrdobaSur_24 = format_BERCrdobaSur_24.readFeatures(json_BERCrdobaSur_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BERCrdobaSur_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BERCrdobaSur_24.addFeatures(features_BERCrdobaSur_24);
var lyr_BERCrdobaSur_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BERCrdobaSur_24, 
                style: style_BERCrdobaSur_24,
                interactive: true,
                title: '<img src="styles/legend/BERCrdobaSur_24.png" /> BER Córdoba Sur'
            });
var format_AgenciaVillaMara_25 = new ol.format.GeoJSON();
var features_AgenciaVillaMara_25 = format_AgenciaVillaMara_25.readFeatures(json_AgenciaVillaMara_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AgenciaVillaMara_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AgenciaVillaMara_25.addFeatures(features_AgenciaVillaMara_25);
var lyr_AgenciaVillaMara_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AgenciaVillaMara_25, 
                style: style_AgenciaVillaMara_25,
                interactive: true,
                title: '<img src="styles/legend/AgenciaVillaMara_25.png" /> Agencia Villa María'
            });
var format_DelegacinRoCuarto_26 = new ol.format.GeoJSON();
var features_DelegacinRoCuarto_26 = format_DelegacinRoCuarto_26.readFeatures(json_DelegacinRoCuarto_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DelegacinRoCuarto_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DelegacinRoCuarto_26.addFeatures(features_DelegacinRoCuarto_26);
var lyr_DelegacinRoCuarto_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DelegacinRoCuarto_26, 
                style: style_DelegacinRoCuarto_26,
                interactive: true,
                title: '<img src="styles/legend/DelegacinRoCuarto_26.png" /> Delegación Río Cuarto'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_Departamentos_2.setVisible(true);lyr_PoblacinpordepartamentoINDEC_3.setVisible(true);lyr_PEAINDEC_4.setVisible(true);lyr_ViviendasruralesINDEC_5.setVisible(true);lyr_CabezasdeporcinosMAGyP_6.setVisible(true);lyr_CabezasdeovinosMAGyP_7.setVisible(true);lyr_CabezasdecaprinosMAGyP_8.setVisible(true);lyr_CabezasdebovinosMAGyP_9.setVisible(true);lyr_HectreasdehortalizasINDEC_10.setVisible(true);lyr_HectreasdelegumbresINDEC_11.setVisible(true);lyr_HectreasdemazMAGyP_12.setVisible(true);lyr_HectreasdetrigoMAGyP_13.setVisible(true);lyr_HectreasdegirasolMAGyP_14.setVisible(true);lyr_HectreasdesojaMAGyP_15.setVisible(true);lyr_HectreasdemanMAGyP_16.setVisible(true);lyr_Capacitaciones2020difusin_17.setVisible(true);lyr_Capacitaciones2019_18.setVisible(true);lyr_Capacitaciones2018_19.setVisible(true);lyr_Capacitaciones2017_20.setVisible(true);lyr_Localidades_21.setVisible(true);lyr_PlantasyempresasmanCmaraArgdelman_22.setVisible(true);lyr_BERCrdobaSur_23.setVisible(true);lyr_BERCrdobaSur_24.setVisible(true);lyr_AgenciaVillaMara_25.setVisible(true);lyr_DelegacinRoCuarto_26.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleHybrid_1,lyr_Departamentos_2,lyr_PoblacinpordepartamentoINDEC_3,lyr_PEAINDEC_4,lyr_ViviendasruralesINDEC_5,lyr_CabezasdeporcinosMAGyP_6,lyr_CabezasdeovinosMAGyP_7,lyr_CabezasdecaprinosMAGyP_8,lyr_CabezasdebovinosMAGyP_9,lyr_HectreasdehortalizasINDEC_10,lyr_HectreasdelegumbresINDEC_11,lyr_HectreasdemazMAGyP_12,lyr_HectreasdetrigoMAGyP_13,lyr_HectreasdegirasolMAGyP_14,lyr_HectreasdesojaMAGyP_15,lyr_HectreasdemanMAGyP_16,lyr_Capacitaciones2020difusin_17,lyr_Capacitaciones2019_18,lyr_Capacitaciones2018_19,lyr_Capacitaciones2017_20,lyr_Localidades_21,lyr_PlantasyempresasmanCmaraArgdelman_22,lyr_BERCrdobaSur_23,lyr_BERCrdobaSur_24,lyr_AgenciaVillaMara_25,lyr_DelegacinRoCuarto_26];
lyr_Departamentos_2.set('fieldAliases', {'Depto': 'Depto', });
lyr_PoblacinpordepartamentoINDEC_3.set('fieldAliases', {'Poblacion': 'Poblacion', });
lyr_PEAINDEC_4.set('fieldAliases', {'PEA': 'PEA', });
lyr_ViviendasruralesINDEC_5.set('fieldAliases', {'Viv.Rur': 'Viv.Rur', });
lyr_CabezasdeporcinosMAGyP_6.set('fieldAliases', {'Porcinos': 'Porcinos', });
lyr_CabezasdeovinosMAGyP_7.set('fieldAliases', {'Ovinos': 'Ovinos', });
lyr_CabezasdecaprinosMAGyP_8.set('fieldAliases', {'Caprinos': 'Caprinos', });
lyr_CabezasdebovinosMAGyP_9.set('fieldAliases', {'Bovinos': 'Bovinos', });
lyr_HectreasdehortalizasINDEC_10.set('fieldAliases', {'Hortalizas': 'Hortalizas', });
lyr_HectreasdelegumbresINDEC_11.set('fieldAliases', {'Legumbres': 'Legumbres', });
lyr_HectreasdemazMAGyP_12.set('fieldAliases', {'Maiz': 'Maiz', });
lyr_HectreasdetrigoMAGyP_13.set('fieldAliases', {'Trigo': 'Trigo', });
lyr_HectreasdegirasolMAGyP_14.set('fieldAliases', {'Girasol': 'Girasol', });
lyr_HectreasdesojaMAGyP_15.set('fieldAliases', {'Soja': 'Soja', });
lyr_HectreasdemanMAGyP_16.set('fieldAliases', {'Mani': 'Mani', });
lyr_Capacitaciones2020difusin_17.set('fieldAliases', {'Localidad': 'Localidad', 'Tipo capa': 'Tipo capa', 'Tematica': 'Tematica', 'Fechas': 'Fechas', 'Asistentes': 'Asistentes', });
lyr_Capacitaciones2019_18.set('fieldAliases', {'Localidad': 'Localidad', 'Tipo capa': 'Tipo capa', 'Tematica': 'Tematica', 'Fechas': 'Fechas', 'Asistentes': 'Asistentes', });
lyr_Capacitaciones2018_19.set('fieldAliases', {'Localidad': 'Localidad', 'Tipo Capa': 'Tipo Capa', 'Tematica': 'Tematica', 'Fechas': 'Fechas', 'Asistentes': 'Asistentes', });
lyr_Capacitaciones2017_20.set('fieldAliases', {'Localidad': 'Localidad', 'Tipo Capa': 'Tipo Capa', 'Tematica': 'Tematica', 'Fechas': 'Fechas', 'Asistentes': 'Asistentes', });
lyr_Localidades_21.set('fieldAliases', {'Localidad': 'Localidad', 'Poblacion': 'Poblacion', });
lyr_PlantasyempresasmanCmaraArgdelman_22.set('fieldAliases', {'Nombre': 'Nombre', });
lyr_BERCrdobaSur_23.set('fieldAliases', {'Num.': 'Num.', 'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', });
lyr_BERCrdobaSur_24.set('fieldAliases', {'Num.': 'Num.', 'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', });
lyr_AgenciaVillaMara_25.set('fieldAliases', {'Num.': 'Num.', 'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', });
lyr_DelegacinRoCuarto_26.set('fieldAliases', {'Localidad': 'Localidad', 'Direccion': 'Direccion', 'Prest 2016': 'Prest 2016', 'Prest 2017': 'Prest 2017', 'Prest 2018': 'Prest 2018', 'Prest 2019': 'Prest 2019', 'Prest 2020': 'Prest 2020', 'CAD 2020': 'CAD 2020', });
lyr_Departamentos_2.set('fieldImages', {'Depto': 'TextEdit', });
lyr_PoblacinpordepartamentoINDEC_3.set('fieldImages', {'Poblacion': 'TextEdit', });
lyr_PEAINDEC_4.set('fieldImages', {'PEA': 'TextEdit', });
lyr_ViviendasruralesINDEC_5.set('fieldImages', {'Viv.Rur': 'TextEdit', });
lyr_CabezasdeporcinosMAGyP_6.set('fieldImages', {'Porcinos': 'TextEdit', });
lyr_CabezasdeovinosMAGyP_7.set('fieldImages', {'Ovinos': 'TextEdit', });
lyr_CabezasdecaprinosMAGyP_8.set('fieldImages', {'Caprinos': 'TextEdit', });
lyr_CabezasdebovinosMAGyP_9.set('fieldImages', {'Bovinos': 'TextEdit', });
lyr_HectreasdehortalizasINDEC_10.set('fieldImages', {'Hortalizas': 'TextEdit', });
lyr_HectreasdelegumbresINDEC_11.set('fieldImages', {'Legumbres': 'TextEdit', });
lyr_HectreasdemazMAGyP_12.set('fieldImages', {'Maiz': 'TextEdit', });
lyr_HectreasdetrigoMAGyP_13.set('fieldImages', {'Trigo': 'TextEdit', });
lyr_HectreasdegirasolMAGyP_14.set('fieldImages', {'Girasol': 'TextEdit', });
lyr_HectreasdesojaMAGyP_15.set('fieldImages', {'Soja': 'TextEdit', });
lyr_HectreasdemanMAGyP_16.set('fieldImages', {'Mani': 'TextEdit', });
lyr_Capacitaciones2020difusin_17.set('fieldImages', {'Localidad': 'TextEdit', 'Tipo capa': 'TextEdit', 'Tematica': 'TextEdit', 'Fechas': 'TextEdit', 'Asistentes': 'Range', });
lyr_Capacitaciones2019_18.set('fieldImages', {'Localidad': 'TextEdit', 'Tipo capa': 'TextEdit', 'Tematica': 'TextEdit', 'Fechas': 'TextEdit', 'Asistentes': 'Range', });
lyr_Capacitaciones2018_19.set('fieldImages', {'Localidad': 'TextEdit', 'Tipo Capa': 'TextEdit', 'Tematica': 'TextEdit', 'Fechas': 'TextEdit', 'Asistentes': 'TextEdit', });
lyr_Capacitaciones2017_20.set('fieldImages', {'Localidad': 'TextEdit', 'Tipo Capa': 'TextEdit', 'Tematica': 'TextEdit', 'Fechas': 'TextEdit', 'Asistentes': 'TextEdit', });
lyr_Localidades_21.set('fieldImages', {'Localidad': 'TextEdit', 'Poblacion': 'TextEdit', });
lyr_PlantasyempresasmanCmaraArgdelman_22.set('fieldImages', {'Nombre': 'TextEdit', });
lyr_BERCrdobaSur_23.set('fieldImages', {'Num.': 'TextEdit', 'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', });
lyr_BERCrdobaSur_24.set('fieldImages', {'Num.': 'TextEdit', 'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', });
lyr_AgenciaVillaMara_25.set('fieldImages', {'Num.': 'TextEdit', 'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', });
lyr_DelegacinRoCuarto_26.set('fieldImages', {'Localidad': 'TextEdit', 'Direccion': 'TextEdit', 'Prest 2016': 'Range', 'Prest 2017': 'Range', 'Prest 2018': 'Range', 'Prest 2019': 'Range', 'Prest 2020': 'Range', 'CAD 2020': 'TextEdit', });
lyr_Departamentos_2.set('fieldLabels', {'Depto': 'inline label', });
lyr_PoblacinpordepartamentoINDEC_3.set('fieldLabels', {'Poblacion': 'inline label', });
lyr_PEAINDEC_4.set('fieldLabels', {'PEA': 'inline label', });
lyr_ViviendasruralesINDEC_5.set('fieldLabels', {'Viv.Rur': 'inline label', });
lyr_CabezasdeporcinosMAGyP_6.set('fieldLabels', {'Porcinos': 'inline label', });
lyr_CabezasdeovinosMAGyP_7.set('fieldLabels', {'Ovinos': 'inline label', });
lyr_CabezasdecaprinosMAGyP_8.set('fieldLabels', {'Caprinos': 'inline label', });
lyr_CabezasdebovinosMAGyP_9.set('fieldLabels', {'Bovinos': 'inline label', });
lyr_HectreasdehortalizasINDEC_10.set('fieldLabels', {'Hortalizas': 'inline label', });
lyr_HectreasdelegumbresINDEC_11.set('fieldLabels', {'Legumbres': 'inline label', });
lyr_HectreasdemazMAGyP_12.set('fieldLabels', {'Maiz': 'inline label', });
lyr_HectreasdetrigoMAGyP_13.set('fieldLabels', {'Trigo': 'inline label', });
lyr_HectreasdegirasolMAGyP_14.set('fieldLabels', {'Girasol': 'inline label', });
lyr_HectreasdesojaMAGyP_15.set('fieldLabels', {'Soja': 'inline label', });
lyr_HectreasdemanMAGyP_16.set('fieldLabels', {'Mani': 'inline label', });
lyr_Capacitaciones2020difusin_17.set('fieldLabels', {'Localidad': 'inline label', 'Tipo capa': 'inline label', 'Tematica': 'inline label', 'Fechas': 'inline label', 'Asistentes': 'inline label', });
lyr_Capacitaciones2019_18.set('fieldLabels', {'Localidad': 'inline label', 'Tipo capa': 'inline label', 'Tematica': 'inline label', 'Fechas': 'inline label', 'Asistentes': 'inline label', });
lyr_Capacitaciones2018_19.set('fieldLabels', {'Localidad': 'inline label', 'Tipo Capa': 'inline label', 'Tematica': 'inline label', 'Fechas': 'inline label', 'Asistentes': 'inline label', });
lyr_Capacitaciones2017_20.set('fieldLabels', {'Localidad': 'inline label', 'Tipo Capa': 'inline label', 'Tematica': 'inline label', 'Fechas': 'inline label', 'Asistentes': 'inline label', });
lyr_Localidades_21.set('fieldLabels', {'Localidad': 'inline label', 'Poblacion': 'inline label', });
lyr_PlantasyempresasmanCmaraArgdelman_22.set('fieldLabels', {'Nombre': 'inline label', });
lyr_BERCrdobaSur_23.set('fieldLabels', {'Num.': 'inline label', 'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', });
lyr_BERCrdobaSur_24.set('fieldLabels', {'Num.': 'inline label', 'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', });
lyr_AgenciaVillaMara_25.set('fieldLabels', {'Num.': 'inline label', 'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', });
lyr_DelegacinRoCuarto_26.set('fieldLabels', {'Localidad': 'inline label', 'Direccion': 'inline label', 'Prest 2016': 'inline label', 'Prest 2017': 'inline label', 'Prest 2018': 'inline label', 'Prest 2019': 'inline label', 'Prest 2020': 'inline label', 'CAD 2020': 'inline label', });
lyr_DelegacinRoCuarto_26.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});