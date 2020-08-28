Ext.define('CRUD_App.Application', {
	extend: 'Ext.app.Application',
	name: 'CRUD_App',
	requires: ['CRUD_App.*', 'Ext.form.Panel', 'MyCRUD.*'],
	defaultToken: 'homeview',

	launch: function () {
		var whichView = 'homeview'
		Ext.Viewport.add([{xtype: whichView}])
    }
    
});