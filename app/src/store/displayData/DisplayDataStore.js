Ext.define('MyCRUD.store.displayData.DisplayDataStore',{
    alias: 'store.displaydatastore',
    extend: 'Ext.data.Store',
    requires: ['MyCRUD.model.displayData.DisplayDataModel'],
    model: 'MyCRUD.model.displayData.DisplayDataModel',
    data: [
        {
            name: 'Priyanka',
            description: 'She is a dev who does the database related work.',
            jobTitle: 'DataBase Admin'
        },
        {
            name: 'Shiva',
            description: 'He takes care of Automation related work.',
            jobTitle: 'Automation Engineer'
        },
        {
            name: 'Mohan',
            description: 'He is a pro in data mining and AI',
            jobTitle: 'Senior Developer'
        }
    ]
})