<!doctype html>
<html lang="en" dir="ltr">
	<head>
		<!-- META DATA -->
		<meta charset="UTF-8">
		<meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=0'>
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="description" content="Bizdire - Business Directory and classifieds premium html5 CSS template">
		<meta name="author" content="Spruko Technologies Private Limited">
		<meta name="keywords" content="business directory website,online business directory website,directory listing sites,bootstrap form template,bootstrap templates,responsive web design,bootstrap website templates,business directory,business directory template,business listing,buy web templates,directory,directory html template,directory listing html template,directory website template,html list template,html template,html5 responsive template,html5 template,local business directory,local business listing,online business directory,online directory,premium,premium bootstrap templates,small business directory,classified,Premium business directory Templates,Directory & Listing HTML Template,business listing websites">
		<link rel="icon" href="favicon.ico" type="image/x-icon"/>
		<link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />

		<!-- Title -->
		<title>Bizdire - Business Directory and classifieds premium html5 CSS template</title>

		<!-- Bootstrap Css -->
		<link id="style" href="{{ asset('frontend/plugins/bootstrap/css/bootstrap.min.css') }}" rel="stylesheet" />

		<!-- Dashboard Css -->
		<link href="{{ asset('frontend/css/style.css') }}" rel="stylesheet" />

		<!-- Font-awesome  Css -->
		<link href="{{ asset('frontend/css/icons.css') }}" rel="stylesheet"/>
		@stack('styles')

	</head>
	<body>

  	@include('layouts.header')
 
  		@yield('content')
 
  	@include('layouts.footer')
 
  	@stack('js')
  </body>
</html>