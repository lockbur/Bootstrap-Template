// app.js demo
+function ($) {
	"use strict";
	$("#dialog-alert").click(function(){
		BootstrapDialog.alert('我是测试提示框!');
	});
	
	
	$("#dialog-confirm").click(function(){
		//BootstrapDialog.alert('I want banana!');
		BootstrapDialog.confirm({
			title: '<i class="fa fa-info-circle fa-fw"></i> 系统提示',
			message: '插件通常会为Vue添加全局功能。插件的范围没有限制——一般有下面几种',
			type: "type-default", // <-- Default value is BootstrapDialog.TYPE_PRIMARY
			size: "size-small",
			closable: true, // <-- Default value is false
			draggable: true, // <-- Default value is false
			btnCancelLabel: '取消', // <-- Default value is 'Cancel',
			btnOKLabel: '确定', // <-- Default value is 'OK',
			btnOKClass: 'btn-info' // <-- If you didn't specify it, dialog type will be used,
			//callback: function (result) {
				// result will be true if button was click, while it will be false if users close the dialog directly.
				//return false;
			//}
		});
	});
	
	$("#dialog-normal").click(function(){
		//BootstrapDialog.alert('I want banana!');
		BootstrapDialog.confirm({
			title: '<i class="fa fa-info-circle fa-fw"></i> 系统提示',
			message: '这是默认大小的弹出框，但是修改居中了',
			type: "type-default", 
			closable: true,
			draggable: true, 
			btnCancelLabel: '取消', 
			btnOKLabel: '确定', 
			btnOKClass: 'btn-info'
	
		});
	});
	
    //alert("app complete");
}(jQuery);

