Ext.define('MyCRUD.view.thumbnail.ThumbnailView', {
    xtype: 'thumbnailview',
    extend: 'Ext.form.Panel',
    defaultType:'displayfield',
    border: true,
      items:[
        {
            label: 'Name',
            labelAlign: 'left',
            bind: '{name}',
        },
        {
            label: 'Description',
            labelAlign: 'left',
            bind: '{description}',            
        },
        {
            label: 'Job Title',
            labelAlign: 'left',
            bind: '{jobTitle}',
        }
    ],

});