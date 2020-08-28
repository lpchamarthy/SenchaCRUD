Ext.define('CRUD_App.view.home.HomeView',{
    extend: 'Ext.Container',
    xtype: 'homeview',
	cls: 'homeview',
    requires: ['Ext.layout.Fit'],
    layout: 'fit',
    items:[
        {
            xtype: 'dataformview',
            reference: 'dataformview',
            docked: 'right',
        },
        {
            xtype: 'datadisplayview',
            reference: 'datadisplayview',
            docked: 'left',
        }
    ]
});