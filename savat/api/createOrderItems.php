<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);


  // Sanitize.
  $order_id = mysqli_real_escape_string($con, (int)$request->order_id);
  $product_id = mysqli_real_escape_string($con, (int)$request->product_id); 
  $price = mysqli_real_escape_string($con, trim($request->price));
  $created_at = mysqli_real_escape_string($con, trim($request->created_at));
  $updated_at = mysqli_real_escape_string($con, trim($request->updated_at));   

  // Create.
  $sql = "INSERT INTO 'order__items'('order_id', 'product_id', 'price', 'created_at', 'updated_at') VALUES ('{$order_id}','{$product_id}','{$price}', null, null)";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $orderItems = [
      'order_id' => $order_id,
      'product_id' => $product_id,
      'price' => $price, 
      'created_at' => mysqli_insert_created_at($con),
      'updated_at' => mysqli_insert_created_at($con)
    ];
    echo json_encode($order__items);
  }
  else
  {
    http_response_code(422);
  }
}