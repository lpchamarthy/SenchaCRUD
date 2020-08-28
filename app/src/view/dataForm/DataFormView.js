Ext.define('MyCRUD.view.dataForm.DataFormView',{
	xtype: 'dataformview',
    extend: 'Ext.form.Panel',
    width: 400,
    title: 'Data Form',
    titleAlign: 'center',
    defaultType: 'textfield',
    items:[
        {
            label: 'Name',
            labelAlign: 'top',
            name: 'name',
            id: 'name',
            msgTarget: 'under',
            invalidText: 'Enter only letters'
        },
        {
            xtype: 'textareafield',
            labelAlign: 'top',
            label: 'Description',
            name: 'description',
            id: 'desc',
            msgTarget: 'under',
            invalidText: 'Maximum limit is 50 letters'

        },
        {
            label: 'Job Title',
            labelAlign: 'top',
            name: 'jobTitle',
            id:'jobT',
            msgTarget: 'under',
            invalidText: 'Enter only letters'

        }
    ],
    buttons: [
        {
            text:'Cancel',
            flex: 1,
            handler: function(){
                Ext.getCmp('name').setValue('');
                Ext.getCmp('desc').setValue('');
                Ext.getCmp('jobT').setValue('');
            } 
        },
        {
            text: 'Save',
            flex: 1,
            handler: function(){
                var name = Ext.getCmp('name').getValue();
                var desc = Ext.getCmp('desc').getValue();
                var jobT = Ext.getCmp('jobT').getValue();
                var formData = {
                    'name': name,
                    'description': desc,
                    'jobTitle': jobT
                }
                Ext.Msg.alert('Success','name: '+formData.name+'\n desc: '+formData.description+'\n jobTitle: '+formData.jobTitle);
            }
        },
    ] 
});