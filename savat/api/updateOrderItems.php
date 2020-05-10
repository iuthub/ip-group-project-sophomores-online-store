<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);

 
  // Sanitize.
  $order_id    = mysqli_real_escape_string($con, (int)$request->order_id);
  $product_id = mysqli_real_escape_string($con, (int)$request->product_id);
  $price = mysqli_real_escape_string($con, trim($request->price));
  $created_at = mysqli_real_escape_string($con, trim($request->created_at));
  $updated_at = mysqli_real_escape_string($con, trim($request->updated_at));

  // Update.
  $sql = "UPDATE 'order__items' SET 'order_id'='$order_id','product_id'='$product_id','price'='$price','created_at'='$created_at','updated_at'='$updated_at'";

  if(mysqli_query($con, $sql))
  {
    http_response_code(204);
  }
  else
  {
    return http_response_code(422);
  }  
}