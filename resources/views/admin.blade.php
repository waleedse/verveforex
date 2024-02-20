<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <link rel="stylesheet" href=" https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">

<!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"> -->
        <!-- Fonts -->

 <!-- [Page specific CSS] start -->
 <link href="admin/assets/css/plugins/animate.min.css" rel="stylesheet" type="text/css" />
  <link href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" rel="stylesheet" />
  <!-- [Page specific CSS] end -->
  <!-- [Font] Family -->
  <link rel="stylesheet" href="admin/assets/fonts/inter/inter.css" id="main-font-link" />
  <!-- [Tabler Icons] https://tablericons.com -->
  <link rel="stylesheet" href="admin/assets/fonts/tabler-icons.min.css">
  <!-- [Feather Icons] https://feathericons.com -->
  <link rel="stylesheet" href="admin/assets/fonts/feather.css">
  <!-- [Font Awesome Icons] https://fontawesome.com/icons -->
  <link rel="stylesheet" href="admin/assets/fonts/fontawesome.css">
  <!-- [Material Icons] https://fonts.google.com/icons -->
  <link rel="stylesheet" href="admin/assets/fonts/material.css">
  <!-- [Template CSS Files] -->
  <link rel="stylesheet" href="admin/assets/css/style.css" id="main-style-link">
  <link rel="stylesheet" href="admin/assets/css/style-preset.css">


  <!-- <script src="admin/assets/js/tech-stack.js"></script> -->

  <!-- <link rel="stylesheet" href="admin/assets/css/landing.css" /> -->
    </head>

    <body >

    @viteReactRefresh
    @vite('resources/js/app.js')




    <div id="root"></div>


    <!-- [Page Specific JS] start -->
  <script src="admin/assets/js/plugins/apexcharts.min.js"></script>
    <script src="/admin/assets/js/pages/dashboard-default.js"></script>
    <!-- [Page Specific JS] end -->
    <!-- Required Js -->
    <script src="/admin/assets/js/plugins/popper.min.js"></script>
    <script src="/admin/assets/js/plugins/simplebar.min.js"></script>
    <script src="/admin/assets/js/plugins/bootstrap.min.js"></script>
    <script src="/admin/assets/js/fonts/custom-font.js"></script>
    <script src="/admin/assets/js/pcoded.js"></script>
    <script src="/admin/assets/js/plugins/feather.min.js"></script>





    <script>layout_change('light');</script>




    <script>layout_theme_contrast_change('false');</script>



    <script>change_box_container('false');</script>


    <script>layout_caption_change('true');</script>




    <script>layout_rtl_change('false');</script>


    <script>preset_change("preset-1");</script>
    </body>
</html>
