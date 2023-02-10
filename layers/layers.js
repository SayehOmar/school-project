ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32632").setExtent([598947.765870, 4083646.384587, 600953.932961, 4085595.840241]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BareLands_1 = new ol.format.GeoJSON();
var features_BareLands_1 = format_BareLands_1.readFeatures(json_BareLands_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_BareLands_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BareLands_1.addFeatures(features_BareLands_1);
var lyr_BareLands_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BareLands_1, 
                style: style_BareLands_1,
                interactive: true,
                title: '<img src="styles/legend/BareLands_1.png" /> BareLands'
            });
var format_VineTrees_2 = new ol.format.GeoJSON();
var features_VineTrees_2 = format_VineTrees_2.readFeatures(json_VineTrees_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_VineTrees_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VineTrees_2.addFeatures(features_VineTrees_2);
var lyr_VineTrees_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VineTrees_2, 
                style: style_VineTrees_2,
                interactive: true,
                title: '<img src="styles/legend/VineTrees_2.png" /> VineTrees'
            });
var format_crops_3 = new ol.format.GeoJSON();
var features_crops_3 = format_crops_3.readFeatures(json_crops_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_crops_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_crops_3.addFeatures(features_crops_3);
var lyr_crops_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_crops_3, 
                style: style_crops_3,
                interactive: true,
                title: '<img src="styles/legend/crops_3.png" /> crops '
            });
var format_OliveTrees_4 = new ol.format.GeoJSON();
var features_OliveTrees_4 = format_OliveTrees_4.readFeatures(json_OliveTrees_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_OliveTrees_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OliveTrees_4.addFeatures(features_OliveTrees_4);
var lyr_OliveTrees_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OliveTrees_4, 
                style: style_OliveTrees_4,
                interactive: true,
                title: '<img src="styles/legend/OliveTrees_4.png" /> OliveTrees'
            });
var format_OliveTrees2_5 = new ol.format.GeoJSON();
var features_OliveTrees2_5 = format_OliveTrees2_5.readFeatures(json_OliveTrees2_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_OliveTrees2_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OliveTrees2_5.addFeatures(features_OliveTrees2_5);
var lyr_OliveTrees2_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OliveTrees2_5, 
                style: style_OliveTrees2_5,
                interactive: true,
                title: '<img src="styles/legend/OliveTrees2_5.png" /> OliveTrees2'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_BareLands_1.setVisible(true);lyr_VineTrees_2.setVisible(true);lyr_crops_3.setVisible(true);lyr_OliveTrees_4.setVisible(true);lyr_OliveTrees2_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_BareLands_1,lyr_VineTrees_2,lyr_crops_3,lyr_OliveTrees_4,lyr_OliveTrees2_5];
lyr_BareLands_1.set('fieldAliases', {'Id': 'Id', 'Region': 'Region', 'Size': 'Size', 'Type': 'Type', });
lyr_VineTrees_2.set('fieldAliases', {'Field1': 'Field1', 'Field2': 'Field2', });
lyr_crops_3.set('fieldAliases', {'Id': 'Id', 'Region': 'Region', 'Size': 'Size', 'Type': 'Type', });
lyr_OliveTrees_4.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'X_1': 'X_1', 'Y_1': 'Y_1', 'Field1': 'Field1', 'Field2': 'Field2', });
lyr_OliveTrees2_5.set('fieldAliases', {'Field1': 'Field1', 'Field2': 'Field2', });
lyr_BareLands_1.set('fieldImages', {'Id': '', 'Region': '', 'Size': '', 'Type': '', });
lyr_VineTrees_2.set('fieldImages', {'Field1': 'TextEdit', 'Field2': 'TextEdit', });
lyr_crops_3.set('fieldImages', {'Id': '', 'Region': '', 'Size': '', 'Type': '', });
lyr_OliveTrees_4.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'X_1': 'TextEdit', 'Y_1': 'TextEdit', 'Field1': 'TextEdit', 'Field2': 'TextEdit', });
lyr_OliveTrees2_5.set('fieldImages', {'Field1': 'TextEdit', 'Field2': 'TextEdit', });
lyr_BareLands_1.set('fieldLabels', {'Id': 'no label', 'Region': 'header label', 'Size': 'header label', 'Type': 'header label', });
lyr_VineTrees_2.set('fieldLabels', {'Field1': 'no label', 'Field2': 'no label', });
lyr_crops_3.set('fieldLabels', {'Id': 'no label', 'Region': 'header label', 'Size': 'header label', 'Type': 'header label', });
lyr_OliveTrees_4.set('fieldLabels', {'X': 'header label', 'Y': 'no label', 'X_1': 'no label', 'Y_1': 'no label', 'Field1': 'no label', 'Field2': 'no label', });
lyr_OliveTrees2_5.set('fieldLabels', {'Field1': 'no label', 'Field2': 'no label', });
lyr_OliveTrees2_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});