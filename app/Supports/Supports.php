<?php
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

if (!function_exists('returnData')) {
    function returnData($status_code = 2000, $result = null, $message = null, $type = false)
    {
        $data = [];
        if ($status_code) {
            $data['status'] = $status_code;
        }
        if ($result) {
            $data['result'] = $result;
        }
        if ($message) {
            $data['message'] = $message;
        }
        if ($message) {
            $data['message'] = $message;
        }
        if ($type) {
            $data['type'] = $type;
        }
        return response()->json($data);
    }
}
if (!function_exists('getData')) {
    function getData($id, $column, $table = 'users', $whereColumn = 'id')
    {
        $user = DB::table($table)->where($whereColumn, $id)->first();
        if ($user) {
            return $user->{$column};
        }
        return '';
    }
}