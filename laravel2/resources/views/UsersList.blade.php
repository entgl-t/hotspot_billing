<!DOCTYPE html>
<html>

    <head>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Admin resources</title>

      {!! Html::style('/assets/css/jquery-ui-1.12.1.custom/jquery-ui.css')!!}
      {!! Html::style('/assets/css/ui.jqgrid.css')!!}
      {!!Html::script('/assets/js/jquery-1.4.2.min.js')!!}

      {!!Html::script('/assets/js/i18n/grid.locale-en.js')!!}
      {!!Html::script('/assets/js/jquery.jqGrid.min.js')!!}

      {!!Html::script('/assets/js/grid.common.js')!!}

      {!!Html::script('/assets/js/grid.formedit.js')!!}
      {!!Html::script('/assets/js/jqModal.js')!!}
      {!!Html::script('/assets/js/jqDnR.js')!!}
      {!!Html::script('/assets/js/main.js')!!}



<!-- Fonts -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css" rel='stylesheet' type='text/css'>
    <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700" rel='stylesheet' type='text/css'>

    <!-- Styles -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
    {{-- <link href="{{ elixir('css/app.css') }}" rel="stylesheet"> --}}


    <style>
        body {
            font-family: 'Lato';
        }

        .fa-btn {
            margin-right: 6px;
        }
    </style>

    </head>
    <body>
    <nav class="navbar navbar-default">
            <div class="container">
                <div class="navbar-header">

                    <!-- Collapsed Hamburger -->
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
                        <span class="sr-only">Toggle Navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>

                    <!-- Branding Image -->
                    <a class="navbar-brand" href="{{ url('/') }}">
                        Главная
                    </a>
                </div>

                <div class="collapse navbar-collapse" id="app-navbar-collapse">
                    <!-- Left Side Of Navbar -->
                    <ul class="nav navbar-nav">
                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="nav navbar-nav navbar-right">
                        <!-- Authentication Links -->
                        @if (Auth::guest())
                            <li><a href="{{ url('/login') }}">Login</a></li>
                           <!-- <li><a href="{{ url('/users') }}">Users List</a></li>
                            <li><a href="{{ url('/tariffs') }}">Tariffs List</a></li>
                            <li><a href="{{ url('/register') }}">Register</a></li>-->
                        @else
                            <li><a href="{{ url('/users') }}">Список пользователей</a></li>
                            <li><a href="{{ url('/tariffs') }}">Список тарифов</a></li>
                            <li class="dropdown">
                                <a href="{{ url('auth/logout') }}"><i class="fa fa-btn fa-sign-out"></i>Выход</a>
                            </li>
                        @endif
                    </ul>
                </div>
            </div>
        </nav>

<div class="container">
        <table id="list2"></table>
        <div id="pager2"></div>

</div>

    </body>
</html>