<?php

require 'database.php';

$id = ($_GET['customer_id'] !== null && (int)$_GET['customer_id'] > 0)? mysqli_real_escape_string($con, (int)$_GET['customer_id']) : false;

if(!$id)
{
    return http_response_code(400);
}

$sql = "DELETE FROM `orders` WHERE `customer_id` ='{$id}' LIMIT 1";

if(mysqli_query($con, $sql))
{
    http_response_code(204);
}
else
{
    return http_response_code(422);
}
