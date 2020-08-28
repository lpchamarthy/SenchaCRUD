Ext.define('MyCRUD.model.displayData.DisplayDataModel',{
    extend: 'Ext.data.Model',
    fields:[
        {name: 'name', type: 'string'},
        {name: 'description', type: 'string'},
        {name: 'jobTitle', type: 'string'}
    ],
    addDisplayData: function(name,desc,jobT){
        this.set('name', name);
        this.set('description', desc);
        this.set('jobTitle', jobT);
    },
    removeDisplayData: function(){
        this.set('name', '');
        this.set('description', '');
        this.set('jobTitle', '');
    },
    proxy:{
        type: 'rest',
        url: '/dispalyData'
    }
})