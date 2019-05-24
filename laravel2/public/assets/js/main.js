jQuery(document).ready(function () {
	alert("Test");
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
	function customButtonClicked(){
		alert("You have clicked button");	
	}
 /*  function  selectValues(){
           var selRowId = $("#list2").jqGrid ('getGridParam', 'selrow');
           var statusValue = $("#list2").jqGrid ('getCell', selRowId, 'status');
      // console.log(statusValue);
           switch(statusValue) {
               case 0:
                   return {1: "active"};
                   break;
               case 1:
                   return {2: "blocked"};
               case 2:
                   return {1: "active"};
               default:
                   return {0: "disactive",1: "active", 2: "blocked"}
           }

    }*/
   /* var countries = $.ajax({
                      url: 'ajaxTariffsList',
                      async: false,
                      success: function(data, result)
                      {
                          if (!result) alert('Failure to retrieve the Countries.');
                      }
                   }).responseText;*/
    //console.log(countries);
    jQuery("#list2").jqGrid({
        url:'userList',
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


        colNames: ['id','Логин','Пароль', 'Тариф','Статус'],
        colModel: [
            {name: 'id', index: 'id', width: 60, sorttype: "int",hidden: true, editable: false},
            {name: 'login', index: 'login', width: 60, editable: true},
            {name: 'password', index: 'password', width: 60,  editable: true},
            {name: 'tariff_name', index: 'tariff_name', width: 60, editable: true,  resizable: true, edittype: "select",
                editoptions: {
                //value:{ "45":"ert","67":"dghjgfh"}
                    dataUrl: 'ajaxTariffsList',
                    buildSelect: function (data) {
                        //console.log(data[0]);
                        var s = "<select>", i, l, item;
                        if (data != null && data.length) {
                            for (i = 0, l = data.length; i < l; i++) {
                                item = data[i];
                                s += '<option value="' + item.id + '">' +
                                    item.tariff_name + '</option>';
                            }
                        }
                        return s + "</select>";
                    },

                     /*dataInit: function(elem)
                     {
                         $(elem).empty()
                         $(elem).append("<option value='0'>next</option>")
                         $(elem).append("<option value='1'>start</option>");
                    }*/
                }
            },
            {name: 'status', index: 'status', width: 60,  editable: true, edittype: "select",
                editoptions: {
                    value:{1: "active", 2: "blocked"}
                    /*buildSelect: function (data) {
                        //console.log(data[0]);
                        var s = "<select>";
                      //  if (data != null && data.length) {
                         // var selRowId = jQuery("#list2").jqGrid ('getGridParam', 'selrow');
                          //  var celValue = jQuery("#list2").jqGrid ('getCell', selRowId, 'status');
                           // console.log(celValue);
                                s += '<option value="' + 1 + '">' +
                                    "ACTIVE" + '</option>';
                     //   }
                        return s + "</select>";
                    }*/
                }
            }
        ],
        multiselect: false,
        caption: "Список пользователей",
        height: "auto", //210,
        width:600,
	rowNum: 20,
	rowList: [10,20,30],
        pager: '#pager2',
	loadonce: true,
	sortname: 'id',
        loadError : function(xhr,st,err) {

            console.log(xhr.status + " "+xhr.statusText);

        }

    });

    jQuery("#list2").jqGrid('navGrid', '#pager2',{edit:true,add:true,del:false,search: false},
        {
            jqModal:true,
            width: 'auto',
            height: 'auto',
	    editCaption: "Внести изменения",
            bSubmit: "ОК",
            bCancel: "Отмена",
	    closeAfterEdit:true,
            reloadAfterSubmit:true,
            url:'userList/editUser',
            mtype: 'POST',
           // postData: { user_id: $("#list2").jqGrid ('getCell', $("#list2").jqGrid ('getGridParam', 'selrow'), 'id') },
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
                var selRowId = $("#list2").jqGrid ('getGridParam', 'selrow');
                var statusValue = $("#list2").jqGrid ('getCell', selRowId, 'status');
               var active = 1;
               var blocked = 2;
                /*$("#tr_status option[value="+ active+"]").hide();*/
               console.log(statusValue == 0)

                   if(statusValue == 0)
                   {
                       $('#tr_tariff_name', form).show();
                       $("#tr_status option[value=" + blocked + "]").hide();
                       $("#tr_status option[value=" + active + "]").show();
                   }
                   if(statusValue == 1) {
                       $('#tr_tariff_name', form).hide();
                       $("#tr_status option[value=" + active + "]").hide();
                       $("#tr_status option[value=" + blocked + "]").show();
                   }

                   if(statusValue == 2) {
                       $('#tr_tariff_name', form).hide();
                       $("#tr_status option[value=" + blocked + "]").hide();
                       $("#tr_status option[value=" + active + "]").show();
                   }



                
            },
            afterShowForm: function () {
                /*var active = 1;
                $("#tr_status option[value="+ active+"]").hide();*/
            }
        }, // edit options
        {   width:"auto",
            height:"auto",
            left:100,
            top:50,
            reloadAfterSubmit:true,
            recreateForm: true,
            jqModal:true,
            addCaption: "Добавить пользователя",
            bSubmit: "ОК",
            bCancel: "Отмена",
            closeAfterAdd:true,
            mtype: 'POST',
            url:'userList/addUser',

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
    jQuery("#list2").navButtonAdd('#pager2',
			{
			  buttonicon:"ui-icon-calculator",
			  title: "Del",
			  caption: "Del",
			  position: "last",
			  onClickButton: customButtonClicked	
			}
	);

    
    /*jQuery("#list2").jqGrid( 'editGridRow', "new", properties );*/
    /*$.extend($.jgrid.edit, {
        bSubmit: "Save and Close",
        bCancel: "Cancel",
        width: 370,
        height: 370,
        recreateForm: true,
        beforeShowForm: function () {
            $('<a href="#">Save and New<span class="ui-icon ui-icon-disk"></span></a>')
                .click(function() {
                    alert("click!");
                }).addClass("fm-button ui-state-default ui-corner-all fm-button-icon-left")
                .prependTo("#Act_Buttons>td.EditButton");
        }
    });*/


   /* for (var i = 0; i <= mydata.length; i++)
        jQuery("#list2").jqGrid('addRowData', i + 1, mydata[i]);*/

});
