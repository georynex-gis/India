var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_IND_adm1_1 = new ol.format.GeoJSON();
var features_IND_adm1_1 = format_IND_adm1_1.readFeatures(json_IND_adm1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IND_adm1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IND_adm1_1.addFeatures(features_IND_adm1_1);
var lyr_IND_adm1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IND_adm1_1, 
                style: style_IND_adm1_1,
                popuplayertitle: 'IND_adm1',
                interactive: true,
    title: 'IND_adm1<br />\
    <img src="styles/legend/IND_adm1_1_0.png" /> Andaman and Nicobar<br />\
    <img src="styles/legend/IND_adm1_1_1.png" /> Andhra Pradesh<br />\
    <img src="styles/legend/IND_adm1_1_2.png" /> Arunachal Pradesh<br />\
    <img src="styles/legend/IND_adm1_1_3.png" /> Assam<br />\
    <img src="styles/legend/IND_adm1_1_4.png" /> Bihar<br />\
    <img src="styles/legend/IND_adm1_1_5.png" /> Chandigarh<br />\
    <img src="styles/legend/IND_adm1_1_6.png" /> Chhattisgarh<br />\
    <img src="styles/legend/IND_adm1_1_7.png" /> Dadra and Nagar Haveli<br />\
    <img src="styles/legend/IND_adm1_1_8.png" /> Daman and Diu<br />\
    <img src="styles/legend/IND_adm1_1_9.png" /> Delhi<br />\
    <img src="styles/legend/IND_adm1_1_10.png" /> Goa<br />\
    <img src="styles/legend/IND_adm1_1_11.png" /> Gujarat<br />\
    <img src="styles/legend/IND_adm1_1_12.png" /> Haryana<br />\
    <img src="styles/legend/IND_adm1_1_13.png" /> Himachal Pradesh<br />\
    <img src="styles/legend/IND_adm1_1_14.png" /> Jammu and Kashmir<br />\
    <img src="styles/legend/IND_adm1_1_15.png" /> Jharkhand<br />\
    <img src="styles/legend/IND_adm1_1_16.png" /> Karnataka<br />\
    <img src="styles/legend/IND_adm1_1_17.png" /> Kerala<br />\
    <img src="styles/legend/IND_adm1_1_18.png" /> Lakshadweep<br />\
    <img src="styles/legend/IND_adm1_1_19.png" /> Madhya Pradesh<br />\
    <img src="styles/legend/IND_adm1_1_20.png" /> Maharashtra<br />\
    <img src="styles/legend/IND_adm1_1_21.png" /> Manipur<br />\
    <img src="styles/legend/IND_adm1_1_22.png" /> Meghalaya<br />\
    <img src="styles/legend/IND_adm1_1_23.png" /> Mizoram<br />\
    <img src="styles/legend/IND_adm1_1_24.png" /> Nagaland<br />\
    <img src="styles/legend/IND_adm1_1_25.png" /> Orissa<br />\
    <img src="styles/legend/IND_adm1_1_26.png" /> Puducherry<br />\
    <img src="styles/legend/IND_adm1_1_27.png" /> Punjab<br />\
    <img src="styles/legend/IND_adm1_1_28.png" /> Rajasthan<br />\
    <img src="styles/legend/IND_adm1_1_29.png" /> Sikkim<br />\
    <img src="styles/legend/IND_adm1_1_30.png" /> Tamil Nadu<br />\
    <img src="styles/legend/IND_adm1_1_31.png" /> Telangana<br />\
    <img src="styles/legend/IND_adm1_1_32.png" /> Tripura<br />\
    <img src="styles/legend/IND_adm1_1_33.png" /> Uttar Pradesh<br />\
    <img src="styles/legend/IND_adm1_1_34.png" /> Uttaranchal<br />\
    <img src="styles/legend/IND_adm1_1_35.png" /> West Bengal<br />\
    <img src="styles/legend/IND_adm1_1_36.png" /> <br />' });

lyr_GoogleMaps_0.setVisible(true);lyr_IND_adm1_1.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_IND_adm1_1];
lyr_IND_adm1_1.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'NL_NAME_1': 'NL_NAME_1', 'VARNAME_1': 'VARNAME_1', });
lyr_IND_adm1_1.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', });
lyr_IND_adm1_1.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'NL_NAME_1': 'no label', 'VARNAME_1': 'no label', });
lyr_IND_adm1_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});