Package.describe({
    summary: "HighCharts gauge for Meteor",
    version: "0.3.1",
    git: "https://github.com/MaazAli/highcharts-gauge",
    name: "maazalik:highcharts-gauge"
});

Package.onUse(function (api) {
    api.versionsFrom('METEOR@1.0.3.2');
    api.use('jquery');
    api.use('templating');
    
    // basic highcharts
    api.use('maazalik:highcharts@0.3.1');
    api.imply('maazalik:highcharts@0.3.1');
    // gauge
    api.addFiles([
      'lib/highcharts-solide-gauge.js',
    ], 'client');
});
