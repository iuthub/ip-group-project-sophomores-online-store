<?php

require 'database.php';

$order__items = [];
$sql = "SELECT order_id, product_id, price, created_at, updated_at  FROM order__items";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $order__items[$i]['order_id'] = $row['order_id'];
    $order__items[$i]['product_id'] = $row['product_id'];
    $order__items[$i]['price'] = $row['price'];
    $order__items[$i]['created_at'] = $row['created_at'];
    $order__items[$i]['updated_at'] = $row['updated_at'];
    $i++;
  }

  echo json_encode($order__items);
}
else
{
  http_response_code(404);
}