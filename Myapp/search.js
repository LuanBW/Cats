function UserName1(that){
	that.nextElementSibling.innerHTML='&nbsp;';
	that.nextElementSibling.style.marginLeft='90px';
	that.nextElementSibling.style.color='grey';
	that.nextElementSibling.style.fontSize='14px';
	that.nextElementSibling.innerHTML='请输入用户名';
	
}
function UserName2(that){
	that.nextElementSibling.innerHTML='&nbsp;';
	if(that.value==''){
		that.nextElementSibling.style.marginLeft='90px';
		that.nextElementSibling.style.color='grey';
		that.nextElementSibling.style.fontSize='14px';
		that.nextElementSibling.innerHTML='用户名不能为空';
	}
}

function PhoneNumber1(that){
	that.nextElementSibling.innerHTML='&nbsp;';
	that.nextElementSibling.style.marginLeft='90px';
	that.nextElementSibling.style.color='grey';
	that.nextElementSibling.style.fontSize='14px';
	that.nextElementSibling.innerHTML='手机号不能为空';

}

function PhoneNumber2(that){
	that.nextElementSibling.innerHTML='&nbsp;';
	if(that.value==''){
		that.nextElementSibling.style.marginLeft='90px';
		that.nextElementSibling.style.color='grey';
		that.nextElementSibling.style.fontSize='14px';
		that.nextElementSibling.innerHTML='请输入手机号';
	}
}

function PassWord1(that){
	that.nextElementSibling.innerHTML='&nbsp;';
	that.nextElementSibling.style.marginLeft='90px';
	that.nextElementSibling.style.color='grey';
	that.nextElementSibling.style.fontSize='14px';
	that.nextElementSibling.innerHTML='密码不能为空';

}

function PassWord2(that){
	that.nextElementSibling.innerHTML='&nbsp;';
	if(that.value==''){
		that.nextElementSibling.style.marginLeft='90px';
		that.nextElementSibling.style.color='grey';
		that.nextElementSibling.style.fontSize='14px';
		that.nextElementSibling.innerHTML='密码由字母数字下划线构成';
	}
}

function Submit2(){
	var n1=window.confirm('是否确定提交？');
	if(n1){
		alert('提交成功');
	}
}

function DownLoad(){
	var n1=window.confirm('是否跳转页面');
	if(n1){
		newWindow=open('#');
	}
}
