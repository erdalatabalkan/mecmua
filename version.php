<app>
<isim></isim>
<ver></ver>
</app>

<?php $ver	= "1043"; ?>

<style>
body, html, * {
	margin: 0px;
	padding: 0px;
	background-image: url("http://mecmua.ga/wp-content/uploads/2016/12/10-324x235.jpg");
	background-position: center center;
	background-repeat: no-repeat;
	background-size: 100% 100%;
	width: 100%;
	height: 100%;
}
</style>

<script>
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  Android.showToast("<?php echo $ver; ?>");
}
</script>
