var map = L.map('map').setView([40, -100], 4);

L.tileLayer('https://{s}.tiles.mapbox.com/v3/mapbox.world-bright/{z}/{x}/{y}.png', {
    attribution: '<a href="http://www.mapbox.com/about/maps/" target"_blank">Terms &amp; Feedback</a>'
    }).addTo(map);

// functions to style the seismic risk layer
function getColor(a) {
            return a > 79 ? '#a50f15':
                   a > 59 ? '#de2d26' :
                   a > 39  ? '#fb6a4A' :
                   a > 19 ? '#fcae91' :
                   '#fee5d9';
            }

function getStyle(feature) {
                return {
                    fillColor: getColor(feature.properties.ACC_VAL),
                    color: getColor(feature.properties.ACC_VAL),
                    weight: 1,
                    opacity: 0.4,
                    fillOpacity: 0.7
                };
            }


// the seismic risks layer, styled using functions above
L.geoJson(seismic_risk, {style:getStyle}).addTo(map);