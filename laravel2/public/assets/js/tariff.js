jQuery(document).ready(function () {

    jQuery("#list3").jqGrid({
        url:'tariffsList',
        mtype: 'GET',
        datatype: "json",
        ajaxSelectOptions: { dataType: "json" },
        jsonReader: {
            repeatitems: false,
            root: function (obj) {
                console.log(obj);
                return obj;
            },
            page: function () {
                return 1;
            },
            total: function () {
                return 1;
            },
            records: function (obj) {
                return obj.length;
            }
        },


        colNames: ['id','Название тарифа','Размер трафика', 'Скорость выгрузки','Скорость загрузки'],
        colModel: [
            {name: 'id', index: 'id', width: 60, sorttype: "int",hidden: true, editable: false},
            {name: 'tariff_name', index: 'tariff_name', width: 60, editable: true},
            {name: 'traffic_limit_common', index: 'traffic_limit_common', width: 60,  editable: true},
            {name: 'shaper_limit_up', index: 'shaper_limit_up', width: 60, editable: true},
            {name: 'shaper_limit_down', index: 'shaper_limit_down', width: 60,  editable: true}
        ],
        multiselect: false,
        caption: "Список тарифов",
        height: "auto", //210,
        width:600,
	rowNum: 20,
        rowList: [10,20,30],
        loadonce: true,
        sortname: 'id',
        pager: '#pager3',

        loadError : function(xhr,st,err) {

            console.log(xhr.status + " "+xhr.statusText);

        }

    });

    jQuery("#list3").jqGrid('navGrid', '#pager3',{edit:false,add:true,del:false,search: false},
        {
           /* jqModal:true,
            width: 'auto',
            height: 'auto',
            reloadAfterSubmit:true,
            url:'list/editUser',
            mtype: 'POST',
            // postData: { user_id: $("#list3").jqGrid ('getCell', $("#list3").jqGrid ('getGridParam', 'selrow'), 'id') },
            afterComplete: function (response) {
                if (response.responseText) {
                    console.log(response.responseText);
                }
            },
            errorTextFormat: function (data) {
                console.log('Error: ' + data.responseText);
                //return 'Error: ' + data.responseText
            },
            beforeShowForm: function(form) {
                $("#pData, #nData").hide();
                $('#tr_login', form).hide();
                $('#tr_password', form).hide();
                $('#tr_status', form).show();
                var selRowId = $("#list3").jqGrid ('getGridParam', 'selrow');
                var statusValue = $("#list3").jqGrid ('getCell', selRowId, 'status');
                (statusValue != 0) ? $('#tr_tariff_name', form).hide(): $('#tr_tariff_name', form).show();
            }*/
        }, // edit options
        {
            width:"auto",
            height:"auto",
            left:100,
            top:50,
            reloadAfterSubmit:true,
            recreateForm: true,
            jqModal:true,
            addCaption: "Добавить тариф",
            bSubmit: "ОК",
            bCancel: "Отмена",
            closeAfterAdd:true,
            mtype: 'POST',
            url:'tariffsList/addTariff',

            afterComplete: function (response) {
                if (response.responseText) {
                    console.log(response.responseText);
                }
            },
            errorTextFormat: function (data) {
                console.log('Error: ' + data.responseText);
                //return 'Error: ' + data.responseText
            },
            beforeShowForm: function(form) {
                $('#tr_status', form).hide();
            }


        }, // add options
        {
            /*reloadAfterSubmit:true,*/ //del options
        },
        {

        } // search options
    );
});
