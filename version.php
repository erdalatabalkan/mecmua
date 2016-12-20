<app>
<isim></isim>
<ver></ver>
</app>

<?php $ver	= "1043"; ?>

<style>
body, html, * {
	margin: 0px;
	padding: 0px;
	background-image: url(gorsel/ic_splash.jpg);
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
