@extends('layouts.app')
@section('content')
    <!-- BOOSTRAP BOILERPLATE-->
    <div class="panel-body" id="users-index"></div>
    <script>
          var __props = {
             url: "{{route('users.api-index')}}",
          };
    </script>
@endsection
