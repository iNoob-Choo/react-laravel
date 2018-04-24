@extends('layouts.app')
@section('content')
    <!-- BOOSTRAP BOILERPLATE-->
    <div class="panel-body" id="user-form">{{ csrf_field() }}</div>
    <script>
          var __props = {
             url: "{{route('users.api-store')}}",
             csrfToken: "{{ csrf_token() }}",
          };
    </script>
@endsection
