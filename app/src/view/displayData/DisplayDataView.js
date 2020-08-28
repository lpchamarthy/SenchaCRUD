Ext.define('MyCRUD.view.displayData.DisplayDataView',{
	xtype: 'datadisplayview',
    extend: 'Ext.form.Panel',
    requires: [
        'MyCRUD.view.displayData.DisplayDataViewController',
        'MyCRUD.view.displayData.DisplayDataViewModel',
        'MyCRUD.store.displayData.DisplayDataStore',
        'MyCRUD.model.displayData.DisplayDataModel'
    ],
    controller: 'displaydata',
    viewModel:{
        type: 'displaydata'
    },
    items:
    [
        {
            items:[
                {
                    xtype:'button',
                    text: 'Edit',
                    width: 415,
                    handler: function(){
                        var x = 1432;
                        Ext.Msg.alert('Success','number: '+ x);
                    }
                },
                {
                    xtype:'button',
                    text: 'Delete',
                    width: 415,
                    handler: function(){
                        var x = '123'
                        Ext.Msg.alert('Success', x);
                    }
                },
            ]
        },
        {
            iterate: function(){
                
            },
            layout: {
                type: 'vbox',
                align: 'left'
            },
            items:[
                {
                    xtype: 'thumbnailview',
                    referance: 'thumbnailview',
                    bind: {
                        data:{
                            name: '{name}',
                            description: '{description}',
                            jobTitle: '{jobTitle}'
                        }
                    }
                }
            ]
        }
    ]
});