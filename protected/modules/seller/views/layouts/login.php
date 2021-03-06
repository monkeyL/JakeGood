<!DOCTYPE html>
<html lang="en">
    <head>
        <title>
            阿那里商家后台
        </title>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="cache-control" content="no-cache">
        <meta http-equiv="expires" content="Thu, 19 Nov 1900 08:52:00 GMT">
        <link rel="shortcut icon" href="/assets/skin/fourteen/images/icons/favicon.ico">
        <link rel="apple-touch-icon" href="/assets/skin/fourteen/images/icons/favicon.png">
        <link rel="apple-touch-icon" sizes="72x72" href="/assets/skin/fourteen/images/icons/favicon-72x72.png">
        <link rel="apple-touch-icon" sizes="114x114" href="/assets/skin/fourteen/images/icons/favicon-114x114.png">
        <!--Loading bootstrap css-->
        <link type="text/css" rel="stylesheet" href="/assets/skin/fourteen/vendors/jquery-ui-1.10.4.custom/css/ui-lightness/jquery-ui-1.10.4.custom.min.css">
        <link type="text/css" rel="stylesheet" href="/assets/skin/fourteen/vendors/font-awesome/css/font-awesome.min.css">
        <link type="text/css" rel="stylesheet" href="/assets/skin/fourteen/vendors/bootstrap/css/bootstrap.min.css">
        <!--LOADING STYLESHEET FOR PAGE-->
        <link type="text/css" rel="stylesheet" href="/assets/skin/fourteen/vendors/intro.js/introjs.css">
        <link type="text/css" rel="stylesheet" href="/assets/skin/fourteen/vendors/calendar/zabuto_calendar.min.css">
        <link type="text/css" rel="stylesheet" href="/assets/skin/fourteen/vendors/sco.message/sco.message.css">
        <link type="text/css" rel="stylesheet" href="/assets/skin/fourteen/vendors/intro.js/introjs.css">
        <!--Loading style vendors-->
        <link type="text/css" rel="stylesheet" href="/assets/skin/fourteen/vendors/animate.css/animate.css">
        <link type="text/css" rel="stylesheet" href="/assets/skin/fourteen/vendors/jquery-pace/pace.css">
        <link type="text/css" rel="stylesheet" href="/assets/skin/fourteen/vendors/iCheck/skins/all.css">
        <link type="text/css" rel="stylesheet" href="/assets/skin/fourteen/vendors/jquery-notific8/jquery.notific8.min.css">
        <!--LOADING STYLESHEET FOR PAGE-->
        <link type="text/css" rel="stylesheet" href="/assets/skin/fourteen/vendors/bootstrap-progressbar/css/bootstrap-progressbar-3.1.1.min.css">
        <!--Loading style-->
        <link type="text/css" rel="stylesheet" href="/assets/skin/fourteen/vendors/lightbox/css/lightbox.css">
        <link type="text/css" rel="stylesheet" href="/assets/skin/fourteen/css/themes/style1/pink-blue.css" />
        <link type="text/css" rel="stylesheet" href="/assets/skin/fourteen/css/style-responsive.css">

        <script src="/assets/skin/fourteen/js/jquery-1.10.2.min.js">
        </script>
        <script src="/assets/skin/fourteen/js/jquery-migrate-1.2.1.min.js">
        </script>
        <script src="/assets/skin/fourteen/js/jquery-ui.js">
        </script>

        <!-- jquery paginate -->
        <script src="/assets/plugins/jquery-pagination/jquery-pagination.js" type="text/javascript"></script>
        <link href="/assets/plugins/jquery-pagination/style.css" rel="stylesheet" type="text/css"/>
        
        <!-- jquery lazyload -->
        <script type="text/javascript" src="/assets/plugins/jquery-lazyload/jquery.lazyload.min.js"></script>

		<link rel="stylesheet" href="/assets/style.css" type="text/css" />
       
        <style type="text/css">
            .chat-inner .avt, .avatar{width: 30px;
                                      height: 30px;
                                      border-radius: 50%;
                                      margin: 5px 5px 0px 0px;
                                      vertical-align: -9px;
            }
            #chat-form #chat-box ul.chat-box-body {height: auto;}
        </style>
        <script type="text/javascript">
            $(document).ready(function() {
                $("img.lazy").lazyload();
            });
        </script>

    </head>
    <body>
        <div class="page-form">
			<form action="index.html" class="form">
				<div class="header-content">
					<h1>
						Log In
					</h1>
				</div>
				<div class="body-content">
					<?php echo $content; ?>
				</div>
			</form>
		</div>
    </body>

</html>
<!-- Localized -->